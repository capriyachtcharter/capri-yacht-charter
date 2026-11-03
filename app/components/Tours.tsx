"use client";

import Image from "next/image";
import Link from "next/link";
import { cmsField, useLang } from "../i18n/LanguageProvider";
import { tourPath } from "../data/tours";

// Home tours section — 4 curated preview cards + a CTA that links to the
// full /tours page so the visitor can browse the complete catalogue.

// Images come from the single source of truth — tours data (tour.image) — resolved
// live via context so a swapped photo shows without a rebuild, and the home Tours
// section never drifts from the /tours pages.

export default function Tours() {
  const { t, path, toursByLegacyId, f } = useLang();
  return (
    <section className="section" id="tours">
      <div className="section-inner">
        <div data-reveal>
          <div className="eyebrow" {...f("tours.eyebrow")}>{t.tours.eyebrow}</div>
          <h2 className="section-title">
            <span {...f("tours.title")}>{t.tours.title}</span> <span className="accent" {...f("tours.titleAccent")}>{t.tours.titleAccent}</span>
          </h2>
          <p className="section-desc tours-desc" {...f("tours.desc", "multiline")}>{t.tours.desc}</p>
        </div>

        <div className="tours-grid">
          {t.tours.list.map((tour, i) => {
            const detail = toursByLegacyId[tour.id];
            const detailHref = detail ? path(tourPath(detail.slug)) : path("/tours");
            return (
              <Link
                key={tour.id}
                id={tour.id}
                href={detailHref}
                className="tour-card tour-card-link"
                data-reveal="left"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div
                  className="tour-card-img"
                  {...(detail ? cmsField(`tours:${detail.slug}`, "imageHome", "image") : {})}
                >
                  {tour.tag && <span className="tour-card-tag" {...f(`tours.tags.${tour.tag}`)}>{t.tours.tags[tour.tag]}</span>}
                  <Image
                    src={detail?.imageHome ?? detail?.image ?? "/og.jpg"}
                    alt={tour.title}
                    width={900}
                    height={1125}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="tour-card-body">
                  <div className="tour-card-meta" {...f(`tours.list.${i}.meta`)}>{tour.meta}</div>
                  <h3 className="tour-card-title" {...f(`tours.list.${i}.title`)}>{tour.title}</h3>
                  <p className="tour-card-desc" {...f(`tours.list.${i}.desc`, "multiline")}>{tour.desc}</p>
                  {(tour.tag as string) === "bespoke" ? (
                    <div className="tour-card-footer tour-card-footer-bespoke">
                      <span className="tour-card-book tour-card-book-full">
                        <span {...f("tours.discover")}>{t.tours.discover}</span>
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="3" y1="8" x2="13" y2="8" />
                          <polyline points="9 4 13 8 9 12" />
                        </svg>
                      </span>
                    </div>
                  ) : (
                    <div className="tour-card-footer">
                      <div className="tour-card-price">
                        <span className="tour-card-price-label" {...f("tours.from")}>{t.tours.from}</span>
                        <span className="tour-card-price-value" {...f(`tours.list.${i}.price`)}>{tour.price}</span>
                      </div>
                      <span className="tour-card-book">
                        <span {...f("tours.discover")}>{t.tours.discover}</span>
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

        <div className="tours-cta-row" data-reveal>
          <Link href={path("/tours")} className="btn-primary" {...f("tours.seeAll")}>
            {t.tours.seeAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
