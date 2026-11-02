/**
 * Live content for the layout, through the Mosto CMS reader (see mosto-cms.config.ts).
 *
 * Reads the latest published JSON from GitHub (Next.js data cache, refreshed every
 * MOSTO_CMS_REVALIDATE seconds and expired right after a publish through
 * /api/mosto-cms), else the copy bundled at build time. The functions keep their old
 * contract: null means "use the bundle", so the site never breaks because of the CMS.
 */
import { siteContent } from "../../mosto-cms.config";

export type HomeCopy = { it?: unknown; en?: unknown };

export async function getLiveContent(): Promise<HomeCopy | null> {
  return siteContent.entry<{ id: string } & HomeCopy>("content", "home");
}

export async function getLiveFleet<T = unknown>(): Promise<T[] | null> {
  const entries = await siteContent.collection("fleet");
  return entries.length ? (entries as T[]) : null;
}

export async function getLiveTours<T = unknown>(): Promise<T[] | null> {
  const entries = await siteContent.collection("tours");
  return entries.length ? (entries as T[]) : null;
}
