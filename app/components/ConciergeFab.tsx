"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function ConciergeFab() {
  const { t } = useLang();
  return (
    <a
      href="https://wa.me/393335741333"
      target="_blank"
      rel="noopener"
      className="concierge-fab"
      aria-label={t.nav.concierge}
    >
      <span className="concierge-fab-icon" aria-hidden>
        <svg viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
          <path d="M45.4 177.7 32 224l46.3-13.4a96 96 0 1 0-32.9-32.9Z" />
          <path d="M152 176a72.08 72.08 0 0 1-72-72 24 24 0 0 1 24-24c2.9 0 5.6 1.5 7.1 4l11.5 23c1.4 2.8 1 6.1-1.1 8.5l-9.8 11c.8 1.6 5.7 11 16.8 22.2 11.1 11.2 20.7 16.2 22.2 16.8l11-9.8c2.3-2.1 5.6-2.5 8.5-1.1l23 11.5c2.5 1.5 4 4.2 4 7.1a24 24 0 0 1-24 24Z" />
        </svg>
      </span>
      <span className="concierge-fab-label">{t.nav.whatsappLong}</span>
    </a>
  );
}
