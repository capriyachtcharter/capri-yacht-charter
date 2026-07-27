/**
 * GithubApiStore — the serverless-friendly ContentStore adapter.
 *
 * Netlify/Vercel functions have no writable git checkout, so this adapter reads and
 * writes app/data/*.json through the GitHub Contents API instead of local git.
 *
 * Flow mirrors JsonGitStore: updateField() stages an in-memory draft; publish()
 * writes one commit per changed file to the target branch (which triggers the
 * client's deploy); revert() drops the draft. Same schema fence guards every write.
 */
import {
  collections,
  collectionByKey,
  fieldByPath,
  type Collection,
} from "./schema";
import {
  getByPath,
  setByPath,
  validateValueKind,
  type EditStore,
  type EntrySummary,
  type EditResult,
  type FieldValue,
} from "./store";

export type GithubStoreConfig = {
  owner: string;
  repo: string;
  branch: string;
  token: string;
};

type FileState = {
  entries: Record<string, unknown>[];
  sha: string;
  dirty: boolean;
};

const API = "https://api.github.com";

export class GithubApiStore implements EditStore {
  private cache = new Map<string, FileState>();

  constructor(private cfg: GithubStoreConfig) {}

  private headers() {
    return {
      Authorization: `Bearer ${this.cfg.token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
  }

  private collection(key: string): Collection {
    const c = collectionByKey[key];
    if (!c) throw new Error(`unknown collection "${key}"`);
    return c;
  }

  /** Fetch (and cache) the parsed JSON array + blob sha for a collection file. */
  private async load(c: Collection): Promise<FileState> {
    const cached = this.cache.get(c.file);
    if (cached) return cached;
    const url = `${API}/repos/${this.cfg.owner}/${this.cfg.repo}/contents/${c.file}?ref=${encodeURIComponent(this.cfg.branch)}`;
    const res = await fetch(url, { headers: this.headers() });
    if (!res.ok) throw new Error(`GitHub read ${c.file} failed: ${res.status} ${await res.text()}`);
    const json = (await res.json()) as { content: string; sha: string };
    const decoded = Buffer.from(json.content, "base64").toString("utf8");
    const state: FileState = { entries: JSON.parse(decoded), sha: json.sha, dirty: false };
    this.cache.set(c.file, state);
    return state;
  }

  async listCollections(): Promise<Collection[]> {
    return collections;
  }

  async listEntries(collectionKey: string, lang: "it" | "en" = "it"): Promise<EntrySummary[]> {
    const c = this.collection(collectionKey);
    const { entries } = await this.load(c);
    return entries.map((e) => {
      const langObj = e[lang] as Record<string, unknown> | undefined;
      const title =
        (langObj?.name as string) ||
        (langObj?.title as string) ||
        (e.shortName as string) ||
        String(e[c.idField]);
      return { id: String(e[c.idField]), title };
    });
  }

  async getEntry(collectionKey: string, id: string): Promise<Record<string, unknown>> {
    const c = this.collection(collectionKey);
    const { entries } = await this.load(c);
    const entry = entries.find((e) => String(e[c.idField]) === id);
    if (!entry) throw new Error(`no entry "${id}" in "${collectionKey}"`);
    return entry;
  }

  async getField(collectionKey: string, id: string, path: string): Promise<FieldValue> {
    if (!fieldByPath(collectionKey, path)) {
      throw new Error(`"${path}" is not a readable/editable field of "${collectionKey}"`);
    }
    return getByPath(await this.getEntry(collectionKey, id), path) as FieldValue;
  }

  async updateField(collectionKey: string, id: string, path: string, value: FieldValue): Promise<EditResult> {
    const c = this.collection(collectionKey);
    const field = fieldByPath(collectionKey, path);
    if (!field) {
      throw new Error(`refused: "${path}" is not editable on "${collectionKey}" (not in schema)`);
    }
    validateValueKind(field, value);

    const state = await this.load(c);
    const entry = state.entries.find((e) => String(e[c.idField]) === id);
    if (!entry) throw new Error(`no entry "${id}" in "${collectionKey}"`);

    const before = getByPath(entry, path) as FieldValue;
    setByPath(entry, path, value);
    state.dirty = true; // staged draft, not yet committed
    return { collection: collectionKey, id, path, before, after: value };
  }

  async hasPendingChanges(): Promise<boolean> {
    return [...this.cache.values()].some((s) => s.dirty);
  }

  async publish(message: string): Promise<void> {
    for (const c of collections) {
      const state = this.cache.get(c.file);
      if (!state || !state.dirty) continue;
      const content = Buffer.from(JSON.stringify(state.entries, null, 2) + "\n", "utf8").toString("base64");
      const url = `${API}/repos/${this.cfg.owner}/${this.cfg.repo}/contents/${c.file}`;
      const res = await fetch(url, {
        method: "PUT",
        headers: { ...this.headers(), "Content-Type": "application/json" },
        body: JSON.stringify({ message, content, sha: state.sha, branch: this.cfg.branch }),
      });
      if (!res.ok) throw new Error(`GitHub write ${c.file} failed: ${res.status} ${await res.text()}`);
      const out = (await res.json()) as { content: { sha: string } };
      state.sha = out.content.sha; // keep sha fresh for further edits in the same session
      state.dirty = false;
    }
  }

  async revert(): Promise<void> {
    this.cache.clear(); // drop drafts; next read re-fetches pristine content
  }
}

/** Build a GithubApiStore from env (used by the serverless /admin route). */
export function githubStoreFromEnv(): GithubApiStore {
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GH_TOKEN/GITHUB_TOKEN missing");
  return new GithubApiStore({
    owner: process.env.CMS_REPO_OWNER || "capriyachtcharter",
    repo: process.env.CMS_REPO_NAME || "capri-yacht-charter",
    branch: process.env.CMS_BRANCH || "feature/cms",
    token,
  });
}
