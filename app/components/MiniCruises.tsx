"use client";

import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";

export default function MiniCruises() {
  const { t, path } = useLang();
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
            {[t.miniCruises.bullet1, t.miniCruises.bullet2, t.miniCruises.bullet3, t.miniCruises.bullet4, t.miniCruises.bullet5].map((b) => (
              <li key={b}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 8 6.5 11.5 13 4.5" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <Link href={path("/tailor-made")} className="btn-primary">
            {t.miniCruises.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
