/**
 * Media proxy — serves client-uploaded images live from the private CMS repo.
 *
 * Uploaded images are committed to `public/uploads/*` on the CMS branch (see the
 * /admin upload endpoint). The production site is built from `main`, so those files
 * are NOT in the static bundle; and the repo is private, so raw.githubusercontent
 * URLs need a token the browser doesn't have. This route bridges the gap: it fetches
 * the committed file from the GitHub Contents API with the server-side token and
 * streams it back same-origin, so a freshly uploaded image is visible immediately —
 * no rebuild, mirroring the ISR live-copy approach used for text.
 *
 * URL shape: /media/uploads/<file>  ->  public/uploads/<file> on the CMS branch.
 */
import { NextResponse } from "next/server";

export const runtime = "nodejs";
// Cache at the edge/CDN for a short window; a re-upload uses a fresh filename anyway.
export const revalidate = 60;

const API = "https://api.github.com";

const CONTENT_TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  avif: "image/avif",
  svg: "image/svg+xml",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  // Only ever serve from public/uploads — never let the path escape it.
  const rel = (path ?? []).join("/");
  if (!rel || rel.includes("..") || rel.includes("\\")) {
    return NextResponse.json({ error: "bad path" }, { status: 400 });
  }
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) return NextResponse.json({ error: "no token" }, { status: 500 });

  const owner = process.env.CMS_REPO_OWNER || "capriyachtcharter";
  const repo = process.env.CMS_REPO_NAME || "capri-yacht-charter";
  const branch = process.env.CMS_BRANCH || "feature/cms";
  const filePath = `public/uploads/${rel}`;
  const url = `${API}/repos/${owner}/${repo}/contents/${filePath}?ref=${encodeURIComponent(branch)}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.raw+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    next: { revalidate: 60 },
  });
  if (!res.ok) return NextResponse.json({ error: "not found" }, { status: 404 });

  const ext = rel.split(".").pop()?.toLowerCase() ?? "";
  const contentType = CONTENT_TYPES[ext] || "application/octet-stream";
  const bytes = await res.arrayBuffer();
  return new NextResponse(bytes, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
