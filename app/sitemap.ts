import type { MetadataRoute } from "next";
import { tours } from "./data/tours";
import { fleet } from "./data/fleet";

const SITE_URL = "https://capriyachtcharter.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`,          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/tours`,     lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${SITE_URL}/fleet`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/charter`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/transfers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`,   lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
  ];

  const tourRoutes: MetadataRoute.Sitemap = tours.map((t) => ({
    url: `${SITE_URL}/tours/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const fleetRoutes: MetadataRoute.Sitemap = fleet.map((b) => ({
    url: `${SITE_URL}/fleet/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...tourRoutes, ...fleetRoutes];
}
