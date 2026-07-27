/**
 * Live homepage-copy reader (server-side, ISR).
 *
 * The site renders its copy from app/data/content.json. To make a client publish show
 * up WITHOUT a rebuild (and without fighting Netlify's free-plan Git-contributor limit),
 * the layout reads content.json straight from the CMS branch on GitHub at request time,
 * cached by Next's fetch for `revalidate` seconds. On any failure we return null and the
 * caller falls back to the copy bundled at build time — the site never breaks.
 */
const API = "https://api.github.com";

/** How long a fetched content.json is reused before Next revalidates it (seconds). */
export const CONTENT_REVALIDATE = Number(process.env.CMS_CONTENT_REVALIDATE || 15);

export type HomeCopy = { it?: unknown; en?: unknown };

export async function getLiveContent(): Promise<HomeCopy | null> {
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) return null;
  const owner = process.env.CMS_REPO_OWNER || "capriyachtcharter";
  const repo = process.env.CMS_REPO_NAME || "capri-yacht-charter";
  const branch = process.env.CMS_BRANCH || "feature/cms";
  const url = `${API}/repos/${owner}/${repo}/contents/app/data/content.json?ref=${encodeURIComponent(branch)}`;
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.raw+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: CONTENT_REVALIDATE },
    });
    if (!res.ok) return null;
    const entries = JSON.parse(await res.text()) as Array<{ id: string } & HomeCopy>;
    return entries.find((e) => e.id === "home") ?? null;
  } catch {
    return null;
  }
}
