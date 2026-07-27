"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";

type Ctx = {
  lang: Lang;
  t: Translations;
  /**
   * Prefix an absolute in-app path with the current locale.
   * Already-prefixed paths (eg "/en/tours") and external URLs pass through.
   */
  path: (p: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const LOCALES: readonly string[] = ["en", "it"];

export function LanguageProvider({
  initialLang,
  content,
  children,
}: {
  initialLang: Lang;
  /** Live copy (fetched server-side at request time). Falls back to bundled if omitted. */
  content?: { it: Translations; en: Translations };
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
    return { lang, t: source[lang] as Translations, path };
  }, [initialLang, content]);

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
    };
  }
  return ctx;
}
