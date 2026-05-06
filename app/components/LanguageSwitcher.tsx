"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-btn${lang === "it" ? " is-active" : ""}`}
        onClick={() => setLang("it")}
        aria-label="Italiano"
        aria-pressed={lang === "it"}
      >
        <span className="lang-flag" aria-hidden>🇮🇹</span>
        <span className="lang-code">IT</span>
      </button>
      <span className="lang-divider" aria-hidden />
      <button
        type="button"
        className={`lang-btn${lang === "en" ? " is-active" : ""}`}
        onClick={() => setLang("en")}
        aria-label="English"
        aria-pressed={lang === "en"}
      >
        <span className="lang-flag" aria-hidden>🇬🇧</span>
        <span className="lang-code">EN</span>
      </button>
    </div>
  );
}
