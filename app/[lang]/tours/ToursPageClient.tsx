"use client";

import Link from "next/link";
import Image from "next/image";
import PageShell from "../../components/PageShell";
import { cmsField, useLang } from "../../i18n/LanguageProvider";
import { tourImagePosition, tourPath, formatPrice, TAILOR_MADE_SLUG } from "../../data/tours";

// Bento layout — 4 principali + 3 secondari piccoli (7 cards):
// Row 1-2: LARGE Capri & Costiera (4×2) + TALL Capri & Positano (2×2) — LA PIÙ RICHIESTA
// Row 3-4: TALL Capri & Sorrento (2×2)  + LARGE Sorrento & Costiera (4×2)
// Row 5:   SMALL Capri Full Day (2×1) + SMALL Ischia & Procida (2×1) + SMALL Capri & Ischia (2×1)
// Row sotto in sezione "Altre giornate" ci sono i 4 restanti con Su Misura ultima a destra.
const sizeByLegacy: Record<string, "large" | "tall" | "medium" | "small" | "halfwide" | "wide"> = {
  "tour-full-day": "large", // Capri & Costiera Amalfitana — LA PIÙ COMPLETA
  "tour-capri-positano": "tall", // LA PIÙ RICHIESTA
  "tour-capri-sorrento": "tall",
  "tour-penisola-amalfitana": "large", // Sorrento & Costiera Amalfitana
  "tour-capri-full-day": "small",
  "tour-ischia-procida": "small",
  "tour-capri-ischia": "small",
};

// Render order respects auto-flow so cells fill the 6×5 rectangle with no gaps.
const renderOrder = [
  "tour-full-day", // large rows 1-2 cols 1-4 — LA PIÙ COMPLETA
  "tour-capri-positano", // tall rows 1-2 cols 5-6 — LA PIÙ RICHIESTA
  "tour-capri-sorrento", // tall rows 3-4 cols 1-2
  "tour-penisola-amalfitana", // large rows 3-4 cols 3-6
  "tour-capri-full-day", // small row 5 cols 1-2
  "tour-ischia-procida", // small row 5 cols 3-4
  "tour-capri-ischia", // small row 5 cols 5-6
];

export default function ToursHubPage() {
  const { lang, t, path, f, toursByLegacyId } = useLang();
  // Live tours (published edits show without a rebuild), in catalogue order.
  const tours = Object.values(toursByLegacyId);
  const p = t.pages.tours;
  const dailyMap = Object.fromEntries(
    tours.filter((tr) => tr.category === "daily").map((tr) => [tr.legacyId, tr])
  );
  const daily = renderOrder.map((id) => dailyMap[id]).filter(Boolean);
  // Everything else in the daily category that isn't part of the fixed bento
  // renders below in a simple grid ("Altri itinerari"). This lets us grow the
  // tour catalogue without redesigning the bento every time.
  const bentoIds = new Set(renderOrder);
  const bespoke = tours.find((tr) => tr.slug === TAILOR_MADE_SLUG);
  // The bespoke tour is shown as its own highlighted card above, so it's left out here.
  const extraDaily = tours.filter(
    (tr) => tr.category === "daily" && !bentoIds.has(tr.legacyId) && tr.slug !== TAILOR_MADE_SLUG
  );

  // Highlighted "Tour su misura" card, shown inside the Tour su misura block right after its
  // intro text (so it carries no description of its own).
  const BespokeCard = ({ className = "" }: { className?: string }) =>
    bespoke ? (
    <Link href={path(tourPath(bespoke.slug))} className={`bento-card tours-bespoke-highlight ${className}`} data-reveal>
      <div className="bento-card-img">
        <Image
          src={bespoke.image}
          alt={p.bespokeTitle}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: tourImagePosition[bespoke.legacyId] ?? "center" }}
        />
        <div className="bento-card-overlay" />
      </div>
      <div className="bento-card-body">
        <span className="bento-card-tag" {...f("tours.tags.bespoke")}>{t.tours.tags.bespoke}</span>
        <div className="bento-card-meta" {...f("pages.tours.bespokeMeta")}>{p.bespokeMeta}</div>
        <h3 className="bento-card-title" {...f("pages.tours.bespokeTitle")}>{p.bespokeTitle}</h3>
        <div className="bento-card-footer">
          <div className="bento-card-price">
            <span {...f("tours.from")}>{t.tours.from}</span>
            <strong>{formatPrice(bespoke.priceFrom, lang)}</strong>
          </div>
          <span className="bento-card-cta">
            <span {...f("tours.discover")}>{t.tours.discover}</span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="8" x2="13" y2="8" />
              <polyline points="9 4 13 8 9 12" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
    ) : null;

  return (
    <PageShell>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow" {...f("tours.eyebrow")}>{t.tours.eyebrow}</div>
          <h1 className="page-hero-title" {...f("pages.tours.title")}>
            {p.title}
          </h1>
          <p className="page-hero-desc" {...f("pages.tours.desc", "multiline")}>
            {p.desc}
          </p>
        </div>
      </section>

      <div className="tours-flow">
      <section className="section" id="daily">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow" {...f("pages.tours.dailyEyebrow")}>{p.dailyEyebrow}</div>
            <h2 className="section-title">
              <span {...f("pages.tours.dailyTitle")}>{p.dailyTitle}</span>{" "}
              <span className="accent" {...f("pages.tours.dailyTitleAccent")}>{p.dailyTitleAccent}</span>
            </h2>
          </div>

          <div className="bento-grid">
            {daily.map((tour, i) => {
              const c = lang === "it" ? tour.it : tour.en;
              const tagLabel = tour.tag ? t.tours.tags[tour.tag] : null;
              const size = sizeByLegacy[tour.legacyId] ?? "medium";
              return (
                <Link
                  key={tour.slug}
                  href={path(tourPath(tour.slug))}
                  className={`bento-card bento-${size}`}
                >
                  <div className="bento-card-img" {...cmsField(`tours:${tour.slug}`, "image", "image")}>
                    <Image
                      src={tour.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: tourImagePosition[tour.legacyId] ?? "center",
                      }}
                    />
                    <div className="bento-card-overlay" />
                  </div>
                  <div className="bento-card-body">
                    {tagLabel && <span className="bento-card-tag" {...f(`tours.tags.${tour.tag}`)}>{tagLabel}</span>}
                    <div className="bento-card-meta" {...cmsField(`tours:${tour.slug}`, `${lang}.meta`)}>{c.meta}</div>
                    <h3 className="bento-card-title" {...cmsField(`tours:${tour.slug}`, `${lang}.title`)}>{c.title}</h3>
                    <p className="bento-card-desc" {...cmsField(`tours:${tour.slug}`, `${lang}.short`, "multiline")}>{c.short}</p>
                    <div className="bento-card-footer">
                      <div className="bento-card-price">
                        <span {...f("tours.from")}>{t.tours.from}</span>
                        <strong>{formatPrice(tour.priceFrom, lang)}</strong>
                      </div>
                      <span className="bento-card-cta">
                        <span {...f("tours.discover")}>{t.tours.discover}</span>
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="3" y1="8" x2="13" y2="8" />
                          <polyline points="9 4 13 8 9 12" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* TOUR SU MISURA — one block right under the day tours (desktop): intro text, its card,
          the details and the CTA. On phones it moves after all the tours (CSS order). */}
      <section className="section section-alt tours-flow-tailor" id="mini-cruises">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow" {...f("miniCruises.eyebrow")}>{t.miniCruises.eyebrow}</div>
            <h2 className="section-title">
              <span {...f("miniCruises.title")}>{t.miniCruises.title}</span> <span className="accent" {...f("miniCruises.titleAccent")}>{t.miniCruises.titleAccent}</span>
            </h2>
            <p className="section-desc" {...f("miniCruises.desc", "multiline")}>{t.miniCruises.desc}</p>
          </div>

          <div className="tours-bespoke-card">
            <BespokeCard />
          </div>

          <div className="mini-cruises-features-grid" data-reveal>
            {[
              t.miniCruises.bullet1,
              t.miniCruises.bullet2,
              t.miniCruises.bullet3,
              t.miniCruises.bullet4,
              t.miniCruises.bullet5,
            ].map((h, i) => (
              <div key={h} className="mini-cruise-feature">
                <h3 {...f(`miniCruises.bullet${i + 1}`)}>{h}</h3>
                <p {...f(`pages.tours.features.${i}`, "multiline")}>{p.features[i]}</p>
              </div>
            ))}
          </div>

          {/* The card above already opens the Tour su misura page: this one books it straight on WhatsApp. */}
          <div className="cta-row" data-reveal>
            <a
              href={`https://wa.me/393335741333?text=${encodeURIComponent(
                lang === "it" ? "Ciao, vorrei organizzare un tour su misura." : "Hi, I'd like to arrange a bespoke tour."
              )}`}
              target="_blank"
              rel="noopener"
              className="btn-primary"
              {...f("miniCruises.ctaBook")}
            >
              {t.miniCruises.ctaBook}
            </a>
          </div>
        </div>
      </section>

      {extraDaily.length > 0 && (
        <section className="section tours-more-section" id="more-itineraries">
          <div className="section-inner">
            <div data-reveal>
              <div className="eyebrow" {...f("pages.tours.moreEyebrow")}>
                {p.moreEyebrow}
              </div>
              <h2 className="section-title">
                <span {...f("pages.tours.moreTitle")}>{p.moreTitle}</span>{" "}
                <span className="accent" {...f("pages.tours.moreTitleAccent")}>
                  {p.moreTitleAccent}
                </span>
              </h2>
            </div>

            <div className="tours-more-grid">
              {extraDaily.map((tour) => {
                const c = lang === "it" ? tour.it : tour.en;
                return (
                  <Link
                    key={tour.slug}
                    href={path(tourPath(tour.slug))}
                    className="tours-more-card"
                  >
                    <div className="tours-more-card-img" {...cmsField(`tours:${tour.slug}`, "image", "image")}>
                      <Image
                        src={tour.image}
                        alt={c.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: tourImagePosition[tour.legacyId] ?? "center",
                        }}
                      />
                      <div className="tours-more-card-overlay" />
                    </div>
                    <div className="tours-more-card-body">
                      <div className="tours-more-card-meta" {...cmsField(`tours:${tour.slug}`, `${lang}.meta`)}>{c.meta}</div>
                      <h3 className="tours-more-card-title" {...cmsField(`tours:${tour.slug}`, `${lang}.title`)}>{c.title}</h3>
                      <p className="tours-more-card-desc" {...cmsField(`tours:${tour.slug}`, `${lang}.short`, "multiline")}>{c.short}</p>
                      <div className="tours-more-card-footer">
                        <div className="tours-more-card-price">
                          <span {...f("tours.from")}>{t.tours.from}</span>
                          <strong>{formatPrice(tour.priceFrom, lang)}</strong>
                        </div>
                        <span className="tours-more-card-cta">
                          <span {...f("tours.discover")}>{t.tours.discover}</span>
                          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="8" x2="13" y2="8" />
                            <polyline points="9 4 13 8 9 12" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      </div>
    </PageShell>
  );
}
