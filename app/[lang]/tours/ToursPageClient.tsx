"use client";

import Link from "next/link";
import Image from "next/image";
import PageShell from "../../components/PageShell";
import { useLang } from "../../i18n/LanguageProvider";
import { tours, tourImagePosition } from "../../data/tours";

// Bento layout — perfect 6-column rectangle:
// Row 1-2: LARGE Costiera (4×2)         + TALL Positano (2×2)
// Row 3:   MEDIUM Ischia (3)            + MEDIUM Procida (3)
// Row 4:   TALL Sorrento (2×2) starts   + SMALL Giro (2) + SMALL Grotta (2)
// Row 5:   TALL Sorrento continues      + HALFWIDE Su Misura (4)
const sizeByLegacy: Record<string, "large" | "tall" | "medium" | "small" | "halfwide"> = {
  "tour-full-day": "large", // Capri & Costiera Amalfitana €890 — flagship
  "tour-capri-positano": "tall", // €750
  "tour-capri-ischia": "medium", // €820
  "tour-ischia-procida": "medium", // €820
  "tour-capri-sorrento": "tall", // €780 — vertical on the left
  "tour-island": "small", // €480
  "tour-blue-grotto": "small", // €360
  "tour-custom": "halfwide", // bespoke — 4-wide banner
};

// Render order respects auto-flow so cells fill the 6×5 rectangle with no gaps.
const renderOrder = [
  "tour-full-day", // large rows 1-2 cols 1-4
  "tour-capri-positano", // tall rows 1-2 cols 5-6
  "tour-capri-ischia", // medium row 3 cols 1-3
  "tour-ischia-procida", // medium row 3 cols 4-6
  "tour-capri-sorrento", // tall rows 4-5 cols 1-2 (LEFT)
  "tour-island", // small row 4 cols 3-4
  "tour-blue-grotto", // small row 4 cols 5-6
  "tour-custom", // halfwide row 5 cols 3-6
];

export default function ToursHubPage() {
  const { lang, t, path } = useLang();
  const dailyMap = Object.fromEntries(
    tours.filter((tr) => tr.category === "daily").map((tr) => [tr.legacyId, tr])
  );
  const daily = renderOrder.map((id) => dailyMap[id]).filter(Boolean);

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
              ? "Otto giornate private al mare, ognuna disegnata su un'idea di Capri diversa. Scegli quella che hai in mente — o costruiamola insieme."
              : "Eight private days at sea, each shaped around a different idea of Capri. Pick the one you have in mind — or let's build it together."}
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
