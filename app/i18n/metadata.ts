import type { Metadata } from "next";

export type LocaleCopy = { title: string; description: string };

/**
 * Build a Metadata block with canonical URL, hreflang alternates,
 * Open Graph and Twitter card — all localized.
 *
 * Pass `path` without the locale prefix, e.g. "/tours".
 */
export function pageMetadata({
  lang,
  path,
  en,
  it,
}: {
  lang: string;
  path: string;
  en: LocaleCopy;
  it: LocaleCopy;
}): Metadata {
  const l: "en" | "it" = lang === "it" ? "it" : "en";
  const copy = l === "it" ? it : en;
  const localized = (loc: "en" | "it") => `/${loc}${path === "/" ? "" : path}`;
  const url = localized(l);

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: url,
      languages: {
        en: localized("en"),
        it: localized("it"),
        "x-default": localized("en"),
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url,
      type: "website",
      locale: l === "it" ? "it_IT" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
    },
  };
}
