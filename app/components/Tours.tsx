"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";
import { toursByLegacyId, tourImagePosition } from "../data/tours";

// Images come from the single source of truth — data/tours.ts (tour.image) —
// so the home Tours section never drifts from the /tours pages.

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
          {t.tours.list.map((tour, i) => {
            const detail = toursByLegacyId[tour.id];
            const detailHref = detail ? `/tours/${detail.slug}` : "/tours";
            return (
              <Link
                key={tour.id}
                id={tour.id}
                href={detailHref}
                className="tour-card tour-card-link"
                data-reveal="left"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="tour-card-img">
                  {tour.tag && <span className="tour-card-tag">{t.tours.tags[tour.tag]}</span>}
                  <Image
                    src={detail?.image ?? "/og.jpg"}
                    alt={tour.title}
                    width={900}
                    height={1125}
                    style={{
                      objectFit: "cover",
                      objectPosition: tourImagePosition[tour.id] ?? "center",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="tour-card-body">
                  <div className="tour-card-meta">{tour.meta}</div>
                  <h3 className="tour-card-title">{tour.title}</h3>
                  <p className="tour-card-desc">{tour.desc}</p>
                  {tour.tag === "bespoke" ? (
                    <div className="tour-card-footer tour-card-footer-bespoke">
                      <span className="tour-card-book tour-card-book-full">
                        {t.tours.inquire}
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="3" y1="8" x2="13" y2="8" />
                          <polyline points="9 4 13 8 9 12" />
                        </svg>
                      </span>
                    </div>
                  ) : (
                    <div className="tour-card-footer">
                      <div className="tour-card-price">
                        <span className="tour-card-price-label">{t.tours.from}</span>
                        <span className="tour-card-price-value">{tour.price}</span>
                      </div>
                      <span className="tour-card-book">
                        {t.tours.book}
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="3" y1="8" x2="13" y2="8" />
                          <polyline points="9 4 13 8 9 12" />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
