/**
 * /admin/api/upload — receives a client-uploaded image and commits it to the CMS
 * repo, returning the same-origin path that serves it live (/media/uploads/<name>).
 *
 * The client attaches an image in the /admin chat; the browser uploads it here first,
 * then sends the returned path to the chat agent, which writes it into the chosen
 * image field. Same shared-password auth as the chat route (pilot).
 */
import { NextResponse } from "next/server";
import { githubStoreFromEnv } from "@/lib/cms/store-github";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
};

// Cap the decoded image at ~8 MB — plenty for web photos, keeps the function fast.
const MAX_BYTES = 8 * 1024 * 1024;

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "image";
}

export async function POST(req: Request) {
  const password = req.headers.get("x-admin-password");
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: { filename?: string; contentType?: string; dataBase64?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const contentType = (body.contentType || "").toLowerCase();
  const ext = ALLOWED[contentType];
  if (!ext) {
    return NextResponse.json(
      { error: `formato non supportato (${contentType || "?"}). Usa JPG, PNG, WEBP, GIF o AVIF.` },
      { status: 400 },
    );
  }

  const base64 = (body.dataBase64 || "").replace(/^data:[^;]+;base64,/, "");
  if (!base64) return NextResponse.json({ error: "immagine mancante" }, { status: 400 });

  const approxBytes = Math.floor((base64.length * 3) / 4);
  if (approxBytes > MAX_BYTES) {
    return NextResponse.json({ error: "immagine troppo grande (max 8 MB)" }, { status: 413 });
  }

  // Unique, human-readable filename. crypto.randomUUID avoids collisions without
  // needing to read the repo first.
  const base = slugify((body.filename || "image").replace(/\.[^.]+$/, ""));
  const name = `${base}-${crypto.randomUUID().slice(0, 8)}.${ext}`;

  try {
    const store = githubStoreFromEnv();
    const { path } = await store.uploadImage(name, base64, `CMS: upload immagine ${name}`);
    return NextResponse.json({ path });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    );
  }
}
