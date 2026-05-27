"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "../i18n/LanguageProvider";

/**
 * Toggle between the two supported locales by linking to the same page
 * under the other locale prefix. SSR-friendly: the URL is the source of
 * truth for language, no client-side state flips.
 */
export default function LanguageSwitcher() {
  const { lang } = useLang();
  const pathname = usePathname() || "/";
  const next: "en" | "it" = lang === "it" ? "en" : "it";

  // Swap the first path segment (the locale) with the target locale.
  const segments = pathname.split("/");
  if (segments[1] === "en" || segments[1] === "it") {
    segments[1] = next;
  } else {
    // No locale prefix (eg root or pre-redirect path) → just prepend.
    segments.splice(1, 0, next);
  }
  const target = segments.join("/") || `/${next}`;

  const flag = lang === "it" ? "🇮🇹" : "🇬🇧";
  const code = lang.toUpperCase();

  return (
    <Link
      href={target}
      className="lang-toggle"
      aria-label={lang === "it" ? "Switch to English" : "Cambia in italiano"}
      title={next.toUpperCase()}
      prefetch={false}
    >
      <span className="lang-toggle-flag" aria-hidden>
        {flag}
      </span>
      <span className="lang-toggle-code">{code}</span>
    </Link>
  );
}
