/**
 * ContentStore — the backend-agnostic edit engine core.
 *
 * The AI chat and any admin UI speak ONLY to this interface. Today the concrete
 * implementation is JsonGitStore (edits app/data/*.json, publishes via git commit).
 * Swapping to a Payload/Sanity adapter later means writing a new class here; the
 * chat, the tool layer, and the schema stay untouched.
 *
 * Every write is guarded by lib/cms/schema.ts — an edit to a path not declared
 * editable throws. That guarantee is what makes an AI-driven editor safe.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import {
  collections,
  collectionByKey,
  fieldByPath,
  type Collection,
  type EditableField,
} from "./schema";

export type EntrySummary = { id: string; title: string };
export type FieldValue = string | string[];

export type EditResult = {
  collection: string;
  id: string;
  path: string;
  before: FieldValue;
  after: FieldValue;
};

const REPO_ROOT = process.cwd();

/* ---------- dot-path helpers (support "it.tagline", "gallery.2") ---------- */

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc == null) return undefined;
    return (acc as Record<string, unknown>)[key];
  }, obj);
}

function setByPath(obj: Record<string, unknown>, path: string, value: unknown): void {
  const keys = path.split(".");
  const last = keys.pop()!;
  let target: Record<string, unknown> = obj;
  for (const key of keys) {
    const next = target[key];
    if (next == null || typeof next !== "object") {
      throw new Error(`path segment "${key}" is not an object in "${path}"`);
    }
    target = next as Record<string, unknown>;
  }
  target[last] = value;
}

function validateValueKind(field: EditableField, value: FieldValue): void {
  const wantsList = field.kind === "list" || field.kind === "imageList";
  if (wantsList && !Array.isArray(value)) {
    throw new Error(`field "${field.path}" (${field.kind}) expects a list of strings`);
  }
  if (!wantsList && typeof value !== "string") {
    throw new Error(`field "${field.path}" (${field.kind}) expects a string`);
  }
}

/* ------------------------------- store ------------------------------- */

export interface ContentStore {
  listCollections(): Collection[];
  listEntries(collectionKey: string, lang?: "it" | "en"): EntrySummary[];
  getEntry(collectionKey: string, id: string): Record<string, unknown>;
  getField(collectionKey: string, id: string, path: string): FieldValue;
  /** Writes to the working tree (an unpublished draft). Returns before/after. */
  updateField(collectionKey: string, id: string, path: string, value: FieldValue): EditResult;
  /** Are there uncommitted content changes? */
  hasPendingChanges(): boolean;
  /** Commit the pending content edits. push=true also pushes (fires the deploy). */
  publish(message: string, opts?: { push?: boolean }): void;
  /** Discard all uncommitted content edits. */
  revert(): void;
}

export class JsonGitStore implements ContentStore {
  private readEntries(c: Collection): Record<string, unknown>[] {
    const raw = readFileSync(join(REPO_ROOT, c.file), "utf8");
    return JSON.parse(raw) as Record<string, unknown>[];
  }

  private writeEntries(c: Collection, entries: unknown[]): void {
    writeFileSync(join(REPO_ROOT, c.file), JSON.stringify(entries, null, 2) + "\n");
  }

  private collection(key: string): Collection {
    const c = collectionByKey[key];
    if (!c) throw new Error(`unknown collection "${key}"`);
    return c;
  }

  listCollections(): Collection[] {
    return collections;
  }

  listEntries(collectionKey: string, lang: "it" | "en" = "it"): EntrySummary[] {
    const c = this.collection(collectionKey);
    return this.readEntries(c).map((e) => {
      const langObj = e[lang] as Record<string, unknown> | undefined;
      const title =
        (langObj?.name as string) ||
        (langObj?.title as string) ||
        (e.shortName as string) ||
        String(e[c.idField]);
      return { id: String(e[c.idField]), title };
    });
  }

  getEntry(collectionKey: string, id: string): Record<string, unknown> {
    const c = this.collection(collectionKey);
    const entry = this.readEntries(c).find((e) => String(e[c.idField]) === id);
    if (!entry) throw new Error(`no entry "${id}" in "${collectionKey}"`);
    return entry;
  }

  getField(collectionKey: string, id: string, path: string): FieldValue {
    if (!fieldByPath(collectionKey, path)) {
      throw new Error(`"${path}" is not a readable/editable field of "${collectionKey}"`);
    }
    return getByPath(this.getEntry(collectionKey, id), path) as FieldValue;
  }

  updateField(collectionKey: string, id: string, path: string, value: FieldValue): EditResult {
    const c = this.collection(collectionKey);
    const field = fieldByPath(collectionKey, path);
    if (!field) {
      throw new Error(`refused: "${path}" is not editable on "${collectionKey}" (not in schema)`);
    }
    validateValueKind(field, value);

    const entries = this.readEntries(c);
    const entry = entries.find((e) => String(e[c.idField]) === id);
    if (!entry) throw new Error(`no entry "${id}" in "${collectionKey}"`);

    const before = getByPath(entry, path) as FieldValue;
    setByPath(entry, path, value);
    this.writeEntries(c, entries);
    return { collection: collectionKey, id, path, before, after: value };
  }

  private git(args: string[]): string {
    return execFileSync("git", args, { cwd: REPO_ROOT, encoding: "utf8" }).trim();
  }

  hasPendingChanges(): boolean {
    const files = collections.map((c) => c.file);
    return this.git(["status", "--porcelain", "--", ...files]).length > 0;
  }

  publish(message: string, opts: { push?: boolean } = {}): void {
    const files = collections.map((c) => c.file);
    this.git(["add", "--", ...files]);
    this.git(["commit", "-m", message]);
    if (opts.push) this.git(["push"]); // gated: only when explicitly asked — this fires the deploy
  }

  revert(): void {
    const files = collections.map((c) => c.file);
    this.git(["checkout", "--", ...files]);
  }
}
