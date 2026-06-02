"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function MiniCruises() {
  const { t } = useLang();
  return (
    <section className="mini-cruises" id="mini-cruises">
      <div className="mini-cruises-inner">
        <div className="mini-cruises-img" data-reveal="left">
          <video
            className="mini-cruises-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/cruises/crociera-1.jpg"
          >
            <source src="/cruises/mini-crociere.mp4" type="video/mp4" />
          </video>
          <div className="mini-cruises-img-overlay" aria-hidden />
        </div>

        <div className="mini-cruises-body" data-reveal="right">
          <div className="eyebrow">{t.miniCruises.eyebrow}</div>
          <h2 className="section-title mini-cruises-title">
            {t.miniCruises.title} <span className="accent">{t.miniCruises.titleAccent}</span>
          </h2>
          <p className="mini-cruises-desc">{t.miniCruises.desc}</p>

          <ul className="mini-cruises-features">
            <li>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 8 6.5 11.5 13 4.5" />
              </svg>
              <span>{t.miniCruises.bullet1}</span>
            </li>
            <li>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 8 6.5 11.5 13 4.5" />
              </svg>
              <span>{t.miniCruises.bullet2}</span>
            </li>
            <li>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 8 6.5 11.5 13 4.5" />
              </svg>
              <span>{t.miniCruises.bullet3}</span>
            </li>
          </ul>

          <a
            href="https://wa.me/393335741333?text=Vorrei%20prenotare%20una%20mini%20crociera"
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            {t.miniCruises.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
