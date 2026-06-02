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

  // Official WhatsApp glyph (filled) — outline strokes at small sizes
  // don't read as the WA logo. Filled silhouette stays instantly recognizable.
  const WhatsAppIcon = (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.3 0-.5 0-.2 0-.5.1-.7.4-.2.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3ZM12 22a10 10 0 0 1-5-1.4L2 22l1.4-5A10 10 0 1 1 12 22Z" />
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
