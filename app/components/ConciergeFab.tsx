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
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.3 0-.5 0-.2 0-.5.1-.7.4-.2.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3ZM12 22a10 10 0 0 1-5-1.4L2 22l1.4-5A10 10 0 1 1 12 22Z" />
        </svg>
      </span>
      <span className="concierge-fab-label">{t.nav.whatsappLong}</span>
    </a>
  );
}
