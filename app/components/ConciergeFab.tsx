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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.5A9 9 0 1 1 21 12z" />
          <path d="M9 9h.5c.4 0 .7.2.9.6l.8 1.6c.1.3.1.6-.1.8l-.6.6a5.5 5.5 0 0 0 3.4 3.4l.6-.6c.2-.2.5-.2.8-.1l1.6.8c.4.2.6.5.6.9V18a1.5 1.5 0 0 1-1.5 1.5A9 9 0 0 1 7.5 10.5 1.5 1.5 0 0 1 9 9z" />
        </svg>
      </span>
      <span className="concierge-fab-label">{t.nav.whatsappLong}</span>
    </a>
  );
}
