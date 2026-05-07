"use client";

import Image from "next/image";
import { useLang } from "../i18n/LanguageProvider";

const imgs: Record<string, string> = {
  "tour-island": "/tours/island-tour.jpg",
  "tour-blue-grotto": "/tours/blue-grotto.jpg",
  "tour-full-day": "/tours/full-day.jpg",
  "tour-custom": "/tours/custom.jpg",
};

export default function Tours() {
  const { t } = useLang();
  return (
    <section className="section" id="tours">
      <div className="section-inner">
        <div data-reveal>
          <div className="eyebrow">{t.tours.eyebrow}</div>
          <h2 className="section-title">
            {t.tours.title} <span className="accent">{t.tours.titleAccent}</span>
          </h2>
          <p className="section-desc tours-desc">{t.tours.desc}</p>
        </div>

        <div className="tours-grid">
          {t.tours.list.map((tour, i) => (
            <div
              key={tour.id}
              id={tour.id}
              className="tour-card"
              data-reveal="left"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="tour-card-img">
                {tour.tag && <span className="tour-card-tag">{t.tours.tags[tour.tag]}</span>}
                <Image
                  src={imgs[tour.id]}
                  alt={tour.title}
                  width={900}
                  height={1125}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="tour-card-body">
                <div className="tour-card-meta">{tour.meta}</div>
                <h3 className="tour-card-title">{tour.title}</h3>
                <p className="tour-card-desc">{tour.desc}</p>
                {tour.tag === "bespoke" ? (
                  <div className="tour-card-footer tour-card-footer-bespoke">
                    <a
                      href="https://wa.me/393335741333"
                      target="_blank"
                      rel="noopener"
                      className="tour-card-book tour-card-book-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t.tours.inquire}
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="8" x2="13" y2="8" />
                        <polyline points="9 4 13 8 9 12" />
                      </svg>
                    </a>
                  </div>
                ) : (
                  <div className="tour-card-footer">
                    <div className="tour-card-price">
                      <span className="tour-card-price-label">{t.tours.from}</span>
                      <span className="tour-card-price-value">{tour.price}</span>
                    </div>
                    <button
                      type="button"
                      className="tour-card-book"
                      data-holidoit-tour={tour.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Hook for the Holidoit modal — wired by the booking script
                        // (window as any).HolidoitModal?.open?.(tour.id);
                      }}
                    >
                      {t.tours.book}
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="8" x2="13" y2="8" />
                        <polyline points="9 4 13 8 9 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
