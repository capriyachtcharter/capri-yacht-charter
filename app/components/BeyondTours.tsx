"use client";

import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";
import { FAREHARBOR_URL } from "../data/booking";

export default function BeyondTours() {
  const { t, path, lang } = useLang();

  return (
    <section className="beyond-tours" data-reveal>
      <div className="section-inner">
        <div className="beyond-head">
          <div className="eyebrow">{t.beyond.eyebrow}</div>
          <h2 className="section-title">
            {t.beyond.title} <span className="accent">{t.beyond.titleAccent}</span>
          </h2>
        </div>

        {/* Two info cards — no buttons inside. The whole section is about noleggio
            breve; the tailor-made tour has its own section above (MiniCruises). */}
        <div className="beyond-grid">
          <article className="beyond-card">
            <div className="beyond-card-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 22 Q9 18 16 22 T29 22" />
                <path d="M3 26 Q9 22 16 26 T29 26" opacity="0.5" />
                <path d="M9 18 L16 8 L23 18 Z" />
                <line x1="16" y1="8" x2="16" y2="22" />
              </svg>
            </div>
            <h3 className="beyond-card-title">{t.beyond.charterTitle}</h3>
            <p className="beyond-card-desc">{t.beyond.charterDesc}</p>
          </article>

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
          </article>
        </div>

        {/* Single CTA row shared by both cards */}
        <div className="beyond-cta-row">
          <Link href={path("/charter")} className="beyond-cta-btn">
            {t.beyond.cardCta}
          </Link>
          <a href={FAREHARBOR_URL} target="_blank" rel="noopener" className="beyond-cta-btn-alt">
            {lang === "it" ? "Prenota ora" : "Book now"}
          </a>
        </div>
      </div>
    </section>
  );
}
