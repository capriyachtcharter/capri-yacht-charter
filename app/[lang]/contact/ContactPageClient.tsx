"use client";

import PageShell from "../../components/PageShell";
import { useLang } from "../../i18n/LanguageProvider";

const primaryChannels = [
  {
    key: "whatsapp",
    href: "https://wa.me/393335741333",
    external: true,
    icon: (
      <svg viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
        <path d="M45.4 177.7 32 224l46.3-13.4a96 96 0 1 0-32.9-32.9Z" />
        <path d="M152 176a72.08 72.08 0 0 1-72-72 24 24 0 0 1 24-24c2.9 0 5.6 1.5 7.1 4l11.5 23c1.4 2.8 1 6.1-1.1 8.5l-9.8 11c.8 1.6 5.7 11 16.8 22.2 11.1 11.2 20.7 16.2 22.2 16.8l11-9.8c2.3-2.1 5.6-2.5 8.5-1.1l23 11.5c2.5 1.5 4 4.2 4 7.1a24 24 0 0 1-24 24Z" />
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

const socials = [
  {
    key: "instagram",
    href: "https://instagram.com/capriyachtcharter",
    label: "Instagram",
    handle: "@capriyachtcharter",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
  },
  {
    key: "facebook",
    href: "https://facebook.com/capriyachtcharter",
    label: "Facebook",
    handle: "Capri Yacht Charter",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
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
            {primaryChannels.map((ch) => (
              <a
                key={ch.key}
                href={ch.href}
                target={ch.external ? "_blank" : undefined}
                rel={ch.external ? "noopener" : undefined}
                className="contact-card"
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
          <div>
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
          <div>
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

      <section className="section">
        <div className="section-inner">
          <div className="eyebrow">{lang === "it" ? "Seguici" : "Follow us"}</div>
          <h2 className="section-title contact-social-title">
            {lang === "it" ? "Le storie della " : "Stories from the "}
            <span className="accent">{lang === "it" ? "stagione" : "season"}</span>
          </h2>
          <p className="contact-social-desc">
            {lang === "it"
              ? "Foto, video, recensioni e novità. Le prenotazioni passano dai canali sopra — qui raccontiamo il dietro le quinte."
              : "Photos, video, reviews and updates. Bookings go through the channels above — here we share the behind-the-scenes."}
          </p>
          <div className="contact-social-row">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="contact-social-link"
              >
                <span className="contact-social-icon">{s.icon}</span>
                <span className="contact-social-text">
                  <span className="contact-social-label">{s.label}</span>
                  <span className="contact-social-handle">{s.handle}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
