"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";
import { toursByLegacyId as staticToursByLegacyId, type Tour } from "../data/tours";
import { boatByLegacyId as staticBoatByLegacyId, type Boat } from "../data/fleet";

type Ctx = {
  lang: Lang;
  t: Translations;
  /**
   * Prefix an absolute in-app path with the current locale.
   * Already-prefixed paths (eg "/en/tours") and external URLs pass through.
   */
  path: (p: string) => string;
  /** Tours keyed by legacyId — live (fetched server-side) when available, else the
   *  build-time bundle. Home cards read image/slug from here so a swapped photo or
   *  edited tour shows without a rebuild. */
  toursByLegacyId: Record<string, Tour>;
  /** Boats keyed by legacyId — same live-or-bundled rationale as toursByLegacyId. */
  boatByLegacyId: Record<string, Boat>;
};

const LanguageContext = createContext<Ctx | null>(null);

const LOCALES: readonly string[] = ["en", "it"];

export function LanguageProvider({
  initialLang,
  content,
  fleet,
  tours,
  children,
}: {
  initialLang: Lang;
  /** Live copy (fetched server-side at request time). Falls back to bundled if omitted. */
  content?: { it: Translations; en: Translations };
  /** Live fleet array (fetched server-side). Falls back to the bundle if omitted. */
  fleet?: Boat[];
  /** Live tours array (fetched server-side). Falls back to the bundle if omitted. */
  tours?: Tour[];
  children: ReactNode;
}) {
  const value = useMemo<Ctx>(() => {
    const lang = initialLang;
    const source = content ?? translations;
    const path = (p: string) => {
      if (!p.startsWith("/")) return p; // external (https://…, mailto:, etc.)
      const seg = p.split("/")[1] ?? "";
      if (LOCALES.includes(seg)) return p; // already prefixed
      return p === "/" ? `/${lang}` : `/${lang}${p}`;
    };
    const toursByLegacyId = tours?.length
      ? Object.fromEntries(tours.map((t) => [t.legacyId, t]))
      : staticToursByLegacyId;
    const boatByLegacyId = fleet?.length
      ? Object.fromEntries(fleet.map((b) => [b.legacyId, b]))
      : staticBoatByLegacyId;
    return { lang, t: source[lang] as Translations, path, toursByLegacyId, boatByLegacyId };
  }, [initialLang, content, fleet, tours]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Outside provider: harmless fallback (mostly for tests).
    const lang: Lang = "en";
    return {
      lang,
      // it/en share the same shape but `as const` gives them divergent string
      // literals (eg "Tour" vs "Tours"), so a direct cast trips the strict
      // build. Route through unknown — consumers still get full Translations types.
      t: translations[lang] as unknown as Translations,
      path: (p: string) => p,
      toursByLegacyId: staticToursByLegacyId,
      boatByLegacyId: staticBoatByLegacyId,
    };
  }
  return ctx;
}
