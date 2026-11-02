/**
 * Mosto CMS (open source, https://github.com/mosto-cms/mosto-cms) for this site.
 *
 * - `/admin`: editors sign in with email + password (MOSTO_CMS_EDITORS) and
 *   edit the site visually or with forms. Every publish is one commit on main.
 * - `/api/mosto-cms`: the mosto-cms/1 protocol, used by /admin and by any
 *   platform connected with a connector key (e.g. Mosto Studio).
 * - `content`: the live reader the pages render with (GitHub through the
 *   Next.js cache, expired right after a publish), falling back to the JSON
 *   bundled at build time, so the CMS never breaks the site.
 *
 * Production env (Netlify): MOSTO_CMS_SECRET, MOSTO_CMS_EDITORS,
 * MOSTO_CMS_GITHUB_REPO, MOSTO_CMS_GITHUB_BRANCH, MOSTO_CMS_GITHUB_TOKEN.
 * Without MOSTO_CMS_GITHUB_REPO (local dev) edits go to the files on disk.
 */
import { createFsAdapter } from "@mosto-cms/adapter-fs";
import { githubAdapterFromEnv } from "@mosto-cms/adapter-github";
import { createContentReader, defineMostoCms, githubSourceFromEnv } from "@mosto-cms/next";

import content from "./app/data/content.json";
import fleet from "./app/data/fleet.json";
import tours from "./app/data/tours.json";
import schema from "./mosto-cms.schema.json";

/** Admin origins allowed to drive the click-to-edit overlay besides /admin itself. */
export const OVERLAY_ORIGINS = ["https://by.mosto.studio"];

export const cms = defineMostoCms({
  schema,
  adapter: (env) => {
    const github = githubAdapterFromEnv(env);
    if (github) return github;
    // Local only: edit the files on disk (`next dev`, or MOSTO_CMS_FS_ROOT for a local `next start`).
    if (env.MOSTO_CMS_FS_ROOT || process.env.NODE_ENV !== "production") {
      return createFsAdapter({ root: env.MOSTO_CMS_FS_ROOT || process.cwd() });
    }
    throw new Error("Mosto CMS: MOSTO_CMS_GITHUB_REPO is not configured");
  },
  admin: {
    pages: [
      { path: "/it", label: "Home (IT)" },
      { path: "/en", label: "Home (EN)" },
      { path: "/it/tours", label: "Tour" },
      { path: "/it/fleet", label: "Flotta" },
      { path: "/it/charter", label: "Noleggio breve" },
    ],
  },
});

export const siteContent = createContentReader({
  schema,
  source: () => githubSourceFromEnv(process.env),
  bundled: {
    "app/data/content.json": content,
    "app/data/fleet.json": fleet,
    "app/data/tours.json": tours,
  },
});
