"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/hero-faraglioni.webp">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-pill">
          <span className="hero-pill-dot" />
          {t.hero.pill}
        </div>

        <h1 className="hero-title">
          {t.hero.titleLine1}<br />
          <span className="italic">{t.hero.titleAccent}</span>
        </h1>

        <div className="hero-actions">
          <a href="#tour-island" className="btn-primary">{t.hero.ctaPrimary}</a>
          <a href="https://wa.me/393335741333" target="_blank" rel="noopener" className="btn-secondary">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">{t.hero.scroll}</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
