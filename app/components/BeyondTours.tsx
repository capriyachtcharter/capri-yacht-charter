"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function BeyondTours() {
  const { t } = useLang();

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
          {/* Transfers card with VIP top-service highlight */}
          <a href="/transfers" className="beyond-card">
            <div className="beyond-card-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 22 Q9 18 16 22 T29 22" />
                <path d="M3 26 Q9 22 16 26 T29 26" opacity="0.5" />
                <path d="M9 18 L16 8 L23 18 Z" />
                <line x1="16" y1="8" x2="16" y2="22" />
              </svg>
            </div>
            <h3 className="beyond-card-title">{t.beyond.transferTitle}</h3>
            <p className="beyond-card-desc">{t.beyond.transferDesc}</p>

            <div className="vip-callout">
              <div className="vip-callout-badge">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6 L8 11 L13 6" />
                  <path d="M3 12 L13 12" />
                </svg>
                {t.transferVip.title}
              </div>
              <p className="vip-callout-text">{t.transferVip.desc}</p>
            </div>

            <span className="beyond-card-cta">
              {t.beyond.transferCta}
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9 4 13 8 9 12" />
              </svg>
            </span>
          </a>

          {/* Skipper Charter card */}
          <a href="/skipper-charter" className="beyond-card">
            <div className="beyond-card-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="22" cy="9" r="3" />
                <path d="M19 14 L19 26" />
                <path d="M14 18 L24 18" />
                <path d="M16 26 L22 26" />
                <path d="M3 22 Q9 18 16 22" />
              </svg>
            </div>
            <h3 className="beyond-card-title">{t.beyond.skipperTitle}</h3>
            <p className="beyond-card-desc">{t.beyond.skipperDesc}</p>
            <span className="beyond-card-cta">
              {t.beyond.skipperCta}
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9 4 13 8 9 12" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
