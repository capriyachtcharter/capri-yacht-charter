/**
 * Media proxy: serves files uploaded through Mosto CMS (committed to
 * public/uploads on main) right away, before the next build puts them in the
 * static bundle. URL shape: /media/uploads/<file> -> public/uploads/<file>.
 */
import { createMediaHandler, githubSourceFromEnv } from "@mosto-cms/next";

export const runtime = "nodejs";

const handler = createMediaHandler({
  dir: "public",
  source: () => githubSourceFromEnv(process.env),
  maxAgeSeconds: 60,
});

export async function GET(req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  // Only committed uploads, never anything else under public/.
  if (path?.[0] !== "uploads" || path.length < 2) {
    return Response.json({ error: "bad path" }, { status: 400 });
  }
  return handler(req, ctx);
}
