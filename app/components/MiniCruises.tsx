"use client";

import { useLang } from "../i18n/LanguageProvider";
import CyclingImage from "./CyclingImage";

const cruiseImages = [
  "/cruises/fiordo-furore.webp",   // iconic Amalfi scene — strongest opener
  "/cruises/capri-tour.webp",       // yacht navigating through the Faraglioni
  "/cruises/amalfi-aerial.jpg",     // aerial of the Amalfi coast
  "/cruises/procida.jpg",           // colorful Corricella di Procida
  "/cruises/sunrise-yacht.webp",    // yacht crossing open water
  "/cruises/ischia.webp",           // Ischia port at golden hour
];

export default function MiniCruises() {
  const { t } = useLang();
  return (
    <section className="mini-cruises">
      <div className="mini-cruises-inner">
        <div className="mini-cruises-img" data-reveal="left">
          <CyclingImage images={cruiseImages} alt={t.miniCruises.title} interval={4500} autoCycle />
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

          <a href="https://wa.me/393335741333" target="_blank" rel="noopener" className="btn-primary">
            {t.miniCruises.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
