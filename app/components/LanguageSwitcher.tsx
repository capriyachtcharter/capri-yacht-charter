"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const next = lang === "it" ? "en" : "it";
  const flag = lang === "it" ? "🇮🇹" : "🇬🇧";
  const code = lang.toUpperCase();

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLang(next)}
      aria-label={lang === "it" ? "Cambia in inglese" : "Switch to Italian"}
      title={lang === "it" ? "EN" : "IT"}
    >
      <span className="lang-toggle-flag" aria-hidden>
        {flag}
      </span>
      <span className="lang-toggle-code">{code}</span>
    </button>
  );
}
