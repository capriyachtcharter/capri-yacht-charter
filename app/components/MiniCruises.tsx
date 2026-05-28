"use client";

import { useLang } from "../i18n/LanguageProvider";
import CyclingImage from "./CyclingImage";

// Captivating reel — our real boats at the Faraglioni, at sunset, on the
// move. ALL landscape so the 5:4 frame always shows the boat + the sea,
// never just the rocks behind. No stock town shots, no broken refs.
const cruiseImages = [
  "/cruises/crociera-1.jpg",   // the three yachts at the Faraglioni
  "/cruises/capri-tour.webp",  // yacht slicing through the Faraglioni arch
  "/cruises/crociera-2.jpg",   // Libeccio in golden-hour light
  "/cruises/crociera-3.jpg",   // Tramontana in profile, Vesuvius behind
  "/cruises/crociera-4.jpg",   // Libeccio at the Faraglioni
  "/cruises/crociera-5.jpg",   // running home at sunset
  "/cruises/crociera-6.jpg",   // Gabbiano with Vesuvius behind
];

export default function MiniCruises() {
  const { t } = useLang();
  return (
    <section className="mini-cruises">
      <div className="mini-cruises-inner">
        <div className="mini-cruises-img" data-reveal="left">
          <CyclingImage
            images={cruiseImages}
            alt={t.miniCruises.title}
            interval={5000}
            autoCycle
            startWhenInView
            viewportGate={0.85}
          />
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
