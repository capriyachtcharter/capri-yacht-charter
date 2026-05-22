"use client";

import PageShell from "../components/PageShell";
import { useLang } from "../i18n/LanguageProvider";

const channels = [
  {
    key: "whatsapp",
    href: "https://wa.me/393335741333",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.3 0-.5 0-.2 0-.5.1-.7.4-.2.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3ZM12 22a10 10 0 0 1-5-1.4L2 22l1.4-5A10 10 0 1 1 12 22Z" />
      </svg>
    ),
    label: { it: "WhatsApp", en: "WhatsApp" },
    value: "+39 333 574 1333",
    note: {
      it: "Risposta più veloce — anche fuori orario",
      en: "Fastest reply — also after hours",
    },
  },
  {
    key: "phone",
    href: "tel:+393335741333",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    label: { it: "Telefono", en: "Phone" },
    value: "+39 333 574 1333",
    note: {
      it: "Lun-Dom · 8.00 — 20.00",
      en: "Mon-Sun · 8:00 — 20:00",
    },
  },
  {
    key: "email",
    href: "mailto:info@capriyachtcharter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
    label: { it: "Email", en: "Email" },
    value: "info@capriyachtcharter.com",
    note: {
      it: "Risposta entro la giornata",
      en: "Reply within the day",
    },
  },
  {
    key: "address",
    href: "https://maps.apple.com/?q=Marina+Grande+282+Capri",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: { it: "Ufficio", en: "Office" },
    value: "Via Marina Grande 282, Capri",
    note: {
      it: "Aperto durante la stagione (Apr — Ott)",
      en: "Open during season (Apr — Oct)",
    },
  },
];

export default function ContactPage() {
  const { lang } = useLang();
  return (
    <PageShell>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">
            {lang === "it" ? "Contatti" : "Contact"}
          </div>
          <h1 className="page-hero-title">
            {lang === "it" ? "Parliamo del tuo mare." : "Let's talk about your sea."}
          </h1>
          <p className="page-hero-desc">
            {lang === "it"
              ? "Disponibili tutti i giorni durante la stagione. Scegli il canale che preferisci — ti risponderemo nel minor tempo possibile."
              : "Available daily during the season. Pick the channel you prefer — we'll get back as soon as possible."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="contact-grid">
            {channels.map((ch) => (
              <a
                key={ch.key}
                href={ch.href}
                target={ch.external ? "_blank" : undefined}
                rel={ch.external ? "noopener" : undefined}
                className="contact-card"
                data-reveal
              >
                <div className="contact-card-icon">{ch.icon}</div>
                <div className="contact-card-label">{ch.label[lang]}</div>
                <div className="contact-card-value">{ch.value}</div>
                <div className="contact-card-note">{ch.note[lang]}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner contact-info-grid">
          <div data-reveal>
            <div className="eyebrow">{lang === "it" ? "Stagione" : "Season"}</div>
            <h2 className="contact-info-h">
              {lang === "it" ? "Aprile — Ottobre" : "April — October"}
            </h2>
            <p>
              {lang === "it"
                ? "Operiamo tutti i giorni durante la stagione, con uscite mattutine, pomeridiane e giornata intera. Consigliamo la prenotazione con almeno 48 ore di anticipo per garantire la barca e l'orario preferito."
                : "We operate daily during the season, with morning, afternoon and full-day departures. We recommend booking at least 48 hours in advance to secure your preferred boat and time slot."}
            </p>
          </div>
          <div data-reveal>
            <div className="eyebrow">{lang === "it" ? "Dove ci troviamo" : "Where to find us"}</div>
            <h2 className="contact-info-h">Marina Grande, Capri</h2>
            <p>
              {lang === "it"
                ? "Imbarco diretto al porto turistico di Capri. Su richiesta organizziamo pick-up da Sorrento, Positano, Amalfi, Napoli e Salerno."
                : "Direct boarding at Capri Marina. On request we arrange pick-up from Sorrento, Positano, Amalfi, Naples and Salerno."}
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
