import type { MetadataRoute } from "next";
import { tours } from "./data/tours";
import { fleet } from "./data/fleet";

const SITE_URL = "https://capriyachtcharter.com";
const LOCALES = ["en", "it"] as const;

/**
 * Bilingual sitemap: every route appears under /en and /it with an `alternates.languages`
 * block so search engines understand the language pairs. `x-default` points to /en.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
    { path: "",          changeFrequency: "weekly",  priority: 1.0 }, // /{lang}
    { path: "/tours",    changeFrequency: "weekly",  priority: 0.9 },
    { path: "/fleet",    changeFrequency: "monthly", priority: 0.9 },
    { path: "/charter",  changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact",  changeFrequency: "yearly",  priority: 0.6 },
    { path: "/privacy",  changeFrequency: "yearly",  priority: 0.3 },
    { path: "/cookie",   changeFrequency: "yearly",  priority: 0.3 },
    { path: "/terms",    changeFrequency: "yearly",  priority: 0.3 },
  ];

  const dynamicPaths = [
    ...tours.map((t) => ({ path: `/tours/${t.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...fleet.map((b) => ({ path: `/fleet/${b.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

  const entries: MetadataRoute.Sitemap = [];
  for (const { path, changeFrequency, priority } of allPaths) {
    for (const lang of LOCALES) {
      const url = `${SITE_URL}/${lang}${path}`;
      entries.push({
        url,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            en: `${SITE_URL}/en${path}`,
            it: `${SITE_URL}/it${path}`,
            "x-default": `${SITE_URL}/en${path}`,
          },
        },
      });
    }
  }
  return entries;
}
