"use client";

import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";

export default function BeyondTours() {
  const { t, path, lang } = useLang();

  const moreLabel = lang === "it" ? "Scopri di più" : "Discover more";
  const waLabel = "WhatsApp";

  // Pre-filled WhatsApp message per card so the chat opens with context.
  const waPickup = `https://wa.me/393335741333?text=${encodeURIComponent(
    lang === "it"
      ? "Ciao, vorrei informazioni sul pick-up dal mio porto."
      : "Hi, I'd like info on pick-up from my port."
  )}`;

  const waSkipper = `https://wa.me/393335741333?text=${encodeURIComponent(
    lang === "it"
      ? "Ciao, vorrei informazioni sul noleggio con skipper."
      : "Hi, I'd like info on the skipper charter."
  )}`;

  const ArrowIcon = (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="3" y1="8" x2="13" y2="8" />
      <polyline points="9 4 13 8 9 12" />
    </svg>
  );

  const WhatsAppIcon = (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );

  return (
    <section className="beyond-tours" data-reveal>
      <div className="section-inner">
        <div className="beyond-head">
          <div className="eyebrow">{t.beyond.eyebrow}</div>
          <h2 className="section-title">
            {t.beyond.title} <span className="accent">{t.beyond.titleAccent}</span>
          </h2>
        </div>

        <div className="beyond-grid">
          {/* Pick-up & 24h card */}
          <article className="beyond-card">
            <div className="beyond-card-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 22 Q9 18 16 22 T29 22" />
                <path d="M3 26 Q9 22 16 26 T29 26" opacity="0.5" />
                <path d="M9 18 L16 8 L23 18 Z" />
                <line x1="16" y1="8" x2="16" y2="22" />
              </svg>
            </div>
            <h3 className="beyond-card-title">{t.beyond.transferTitle}</h3>
            <p className="beyond-card-desc">{t.beyond.transferDesc}</p>
            <div className="beyond-card-actions">
              <Link href={path("/charter")} className="beyond-card-btn">
                {moreLabel}
                {ArrowIcon}
              </Link>
              <a
                href={waPickup}
                target="_blank"
                rel="noopener"
                className="beyond-card-btn-ghost"
                aria-label={`${waLabel} — Pick-up`}
              >
                {WhatsAppIcon}
                {waLabel}
              </a>
            </div>
          </article>

          {/* Skipper Charter card */}
          <article className="beyond-card">
            <div className="beyond-card-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="22" cy="9" r="3" />
                <path d="M19 14 L19 26" />
                <path d="M14 18 L24 18" />
                <path d="M16 26 L22 26" />
                <path d="M3 22 Q9 18 16 22" />
              </svg>
            </div>
            <h3 className="beyond-card-title">{t.beyond.skipperTitle}</h3>
            <p className="beyond-card-desc">{t.beyond.skipperDesc}</p>
            <div className="beyond-card-actions">
              <Link href={path("/charter")} className="beyond-card-btn">
                {moreLabel}
                {ArrowIcon}
              </Link>
              <a
                href={waSkipper}
                target="_blank"
                rel="noopener"
                className="beyond-card-btn-ghost"
                aria-label={`${waLabel} — Skipper Charter`}
              >
                {WhatsAppIcon}
                {waLabel}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
