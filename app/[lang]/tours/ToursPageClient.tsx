"use client";

import Link from "next/link";
import Image from "next/image";
import PageShell from "../../components/PageShell";
import { useLang } from "../../i18n/LanguageProvider";
import { tours, tourImagePosition } from "../../data/tours";

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
  const { lang, t, path } = useLang();
  const dailyMap = Object.fromEntries(
    tours.filter((tr) => tr.category === "daily").map((tr) => [tr.legacyId, tr])
  );
  const daily = renderOrder.map((id) => dailyMap[id]).filter(Boolean);
  // Everything else in the daily category that isn't part of the fixed bento
  // renders below in a simple grid ("Altri itinerari"). This lets us grow the
  // tour catalogue without redesigning the bento every time.
  const bentoIds = new Set(renderOrder);
  const extraDaily = tours.filter(
    (tr) => tr.category === "daily" && !bentoIds.has(tr.legacyId)
  );

  return (
    <PageShell>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">{t.tours.eyebrow}</div>
          <h1 className="page-hero-title">
            {lang === "it" ? "Tour & escursioni" : "Tours & experiences"}
          </h1>
          <p className="page-hero-desc">
            {lang === "it"
              ? "Giornate private al mare, ognuna disegnata su un'idea di Capri diversa. Scegli quella che hai in mente — o costruiamola insieme."
              : "Private days at sea, each shaped around a different idea of Capri. Pick the one you have in mind — or let's build it together."}
          </p>
        </div>
      </section>

      <section className="section" id="daily">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow">{lang === "it" ? "Tour giornalieri" : "Day tours"}</div>
            <h2 className="section-title">
              {lang === "it" ? "Le esperienze " : "Signature "}
              <span className="accent">{lang === "it" ? "in mare" : "experiences"}</span>
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
                  href={path(`/tours/${tour.slug}`)}
                  className={`bento-card bento-${size}`}
                >
                  <div className="bento-card-img">
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
                    {tagLabel && <span className="bento-card-tag">{tagLabel}</span>}
                    <div className="bento-card-meta">{c.meta}</div>
                    <h3 className="bento-card-title">{c.title}</h3>
                    <p className="bento-card-desc">{c.short}</p>
                    <div className="bento-card-footer">
                      <div className="bento-card-price">
                        <span>{t.tours.from}</span>
                        <strong>{tour.priceFrom}</strong>
                      </div>
                      <span className="bento-card-cta">
                        {lang === "it" ? "Scopri" : "Discover"}
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

      {extraDaily.length > 0 && (
        <section className="section tours-more-section" id="more-itineraries">
          <div className="section-inner">
            <div data-reveal>
              <div className="eyebrow">
                {lang === "it" ? "Altri itinerari" : "More itineraries"}
              </div>
              <h2 className="section-title">
                {lang === "it" ? "Altre giornate " : "More days "}
                <span className="accent">
                  {lang === "it" ? "in mare" : "at sea"}
                </span>
              </h2>
            </div>

            <div className="tours-more-grid">
              {extraDaily.map((tour) => {
                const c = lang === "it" ? tour.it : tour.en;
                return (
                  <Link
                    key={tour.slug}
                    href={path(`/tours/${tour.slug}`)}
                    className="tours-more-card"
                  >
                    <div className="tours-more-card-img">
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
                      <div className="tours-more-card-meta">{c.meta}</div>
                      <h3 className="tours-more-card-title">{c.title}</h3>
                      <p className="tours-more-card-desc">{c.short}</p>
                      <div className="tours-more-card-footer">
                        <div className="tours-more-card-price">
                          <span>{t.tours.from}</span>
                          <strong>{tour.priceFrom}</strong>
                        </div>
                        <span className="tours-more-card-cta">
                          {lang === "it" ? "Scopri" : "Discover"}
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

      <section className="section section-alt" id="mini-cruises">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow">{t.miniCruises.eyebrow}</div>
            <h2 className="section-title">
              {t.miniCruises.title} <span className="accent">{t.miniCruises.titleAccent}</span>
            </h2>
            <p className="section-desc">{t.miniCruises.desc}</p>
          </div>

          <div className="mini-cruises-features-grid" data-reveal>
            <div className="mini-cruise-feature">
              <h3>{t.miniCruises.bullet1}</h3>
              <p>
                {lang === "it"
                  ? "Cabine private, bagno con doccia, aria condizionata, biancheria fornita."
                  : "Private cabins, bathroom with shower, air conditioning, linens provided."}
              </p>
            </div>
            <div className="mini-cruise-feature">
              <h3>{t.miniCruises.bullet2}</h3>
              <p>
                {lang === "it"
                  ? "Chef a bordo su richiesta, itinerario costruito intorno ai tuoi gusti."
                  : "On-board chef on request, itinerary built around your taste."}
              </p>
            </div>
            <div className="mini-cruise-feature">
              <h3>{t.miniCruises.bullet3}</h3>
              <p>
                {lang === "it"
                  ? "Tender, SUP, attrezzatura snorkel — tutto a bordo."
                  : "Tender, SUP, snorkeling gear — all on board."}
              </p>
            </div>
          </div>

          <div className="cta-row" data-reveal>
            <a
              href={`https://wa.me/393335741333?text=${encodeURIComponent(
                lang === "it" ? "Vorrei prenotare una mini crociera" : "I'd like to book a mini cruise"
              )}`}
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              {lang === "it" ? "Prenota la tua crociera" : "Book your cruise"}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
