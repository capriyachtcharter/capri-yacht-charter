"use client";

import { useEffect } from "react";
import { useLang } from "../i18n/LanguageProvider";

type Props = {
  open: boolean;
  onClose: () => void;
};

const items = [
  {
    key: "whatsapp",
    href: "https://wa.me/393335741333",
    label: "WhatsApp",
    value: "+39 333 574 1333",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.3 0-.5 0-.2 0-.5.1-.7.4-.2.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" fill="currentColor" />
      </svg>
    ),
    external: true,
  },
  {
    key: "phone",
    href: "tel:+393335741333",
    label: "Telefono",
    labelEn: "Phone",
    value: "+39 333 574 1333",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    key: "email",
    href: "mailto:info@capriyachtcharter.com",
    label: "Email",
    value: "info@capriyachtcharter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
  },
  {
    key: "address",
    href: "https://maps.apple.com/?q=Marina+Grande+282+Capri",
    label: "Indirizzo",
    labelEn: "Address",
    value: "Via Marina Grande 282, Capri",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    external: true,
  },
  {
    key: "instagram",
    href: "https://instagram.com/capriyachtcharter",
    label: "Instagram",
    value: "@capriyachtcharter",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
    external: true,
  },
  {
    key: "facebook",
    href: "https://facebook.com/capriyachtcharter",
    label: "Facebook",
    value: "Capri Yacht Charter",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    external: true,
  },
];

export default function ContactPopover({ open, onClose }: Props) {
  const { lang, t } = useLang();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`contact-pop${open ? " is-open" : ""}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
    >
      <div className="contact-pop-backdrop" onClick={onClose} />
      <div className="contact-pop-sheet">
        <button className="contact-pop-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="3" y1="3" x2="13" y2="13" />
            <line x1="13" y1="3" x2="3" y2="13" />
          </svg>
        </button>

        <div className="contact-pop-head">
          <div className="contact-pop-eyebrow">{lang === "it" ? "In contatto" : "Get in touch"}</div>
          <h3 className="contact-pop-title">{t.nav.concierge}</h3>
          <p className="contact-pop-sub">
            {lang === "it"
              ? "Disponibili tutti i giorni durante la stagione. Scegli il canale che preferisci."
              : "Available daily during the season. Pick the channel you prefer."}
          </p>
        </div>

        <ul className="contact-pop-list">
          {items.map((it) => (
            <li key={it.key}>
              <a
                href={it.href}
                className="contact-pop-row"
                target={it.external ? "_blank" : undefined}
                rel={it.external ? "noopener" : undefined}
                onClick={() => onClose()}
              >
                <span className="contact-pop-icon">{it.icon}</span>
                <span className="contact-pop-text">
                  <span className="contact-pop-label">
                    {lang === "it" ? it.label : it.labelEn ?? it.label}
                  </span>
                  <span className="contact-pop-value">{it.value}</span>
                </span>
                <span className="contact-pop-arrow" aria-hidden>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 4 10 8 6 12" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
