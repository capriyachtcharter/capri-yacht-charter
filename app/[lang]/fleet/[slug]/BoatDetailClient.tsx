"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import PageShell from "../../../components/PageShell";
import TourCarousel, { type CarouselItem } from "../../../components/TourCarousel";
import { useLang } from "../../../i18n/LanguageProvider";
import { boatBySlug } from "../../../data/fleet";
import { tours } from "../../../data/tours";

export default function BoatDetailPage() {
  const params = useParams<{ slug: string }>();
  const boat = boatBySlug[params.slug];
  const { lang, path } = useLang();
  const [idx, setIdx] = useState(0);

  if (!boat) {
    notFound();
  }

  const c = lang === "it" ? boat.it : boat.en;
  const compatibleTours = tours.filter((tr) => tr.boats.includes(boat.legacyId));

  return (
    <PageShell>
      <section className="boat-hero">
        <div className="boat-hero-gallery">
          <img src={boat.gallery[idx]} alt={c.name} className="boat-hero-img" />
          <div className="boat-hero-thumbs">
            {boat.gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`boat-hero-thumb${idx === i ? " is-active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Photo ${i + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="boat-hero-info">
          <Link href={path("/fleet")} className="boat-hero-back">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="13" y1="8" x2="3" y2="8" />
              <polyline points="7 4 3 8 7 12" />
            </svg>
            {lang === "it" ? "Tutta la flotta" : "All fleet"}
          </Link>
          <div className="boat-hero-model">{c.model}</div>
          <h1 className="boat-hero-name">{c.name}</h1>
          <div className="boat-hero-type">{c.type}</div>
          <p className="boat-hero-tagline">{c.tagline}</p>

          <div className="boat-hero-actions">
            <a
              href={`https://wa.me/393335741333?text=${encodeURIComponent(
                lang === "it"
                  ? `Ciao, vorrei prenotare lo yacht ${c.name}.`
                  : `Hi, I'd like to book the ${c.name} yacht.`
              )}`}
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              {lang === "it" ? "Prenota ora" : "Book now"}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner boat-detail-grid">
          <div className="boat-detail-main">
            <h2 className="boat-detail-h">
              {lang === "it" ? "L'imbarcazione" : "The vessel"}
            </h2>
            <p className="boat-detail-lead">{c.description}</p>

            <h2 className="boat-detail-h">
              {lang === "it" ? "A bordo" : "On board"}
            </h2>
            <ul className="boat-detail-amenities">
              {c.amenities.map((a) => (
                <li key={a}>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 8 6.5 11.5 13 4.5" />
                  </svg>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="boat-detail-side">
            <h3 className="boat-detail-card-h">
              {lang === "it" ? "Specifiche tecniche" : "Specs"}
            </h3>
            <dl className="boat-specs-list">
              <div>
                <dt>{lang === "it" ? "Lunghezza" : "Length"}</dt>
                <dd>{boat.specs.length}</dd>
              </div>
              <div>
                <dt>{lang === "it" ? "Larghezza" : "Beam"}</dt>
                <dd>{boat.specs.beam}</dd>
              </div>
              <div>
                <dt>{lang === "it" ? "Velocità max" : "Top speed"}</dt>
                <dd>{boat.specs.speed}</dd>
              </div>
              <div>
                <dt>{lang === "it" ? "Motori" : "Engines"}</dt>
                <dd>{boat.specs.engines}</dd>
              </div>
              <div>
                <dt>{lang === "it" ? "Cabine" : "Cabins"}</dt>
                <dd>{boat.specs.cabins}</dd>
              </div>
              <div>
                <dt>{lang === "it" ? "Bagni" : "Bathrooms"}</dt>
                <dd>{boat.specs.bathrooms}</dd>
              </div>
              <div>
                <dt>{lang === "it" ? "Ospiti (giorno)" : "Guests (day)"}</dt>
                <dd>{boat.specs.capacityDay}</dd>
              </div>
              <div>
                <dt>{lang === "it" ? "Ospiti (notte)" : "Guests (night)"}</dt>
                <dd>{boat.specs.capacityNight}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {compatibleTours.length > 0 && (
        <section className="section section-alt">
          <div className="section-inner">
            <div data-reveal>
              <div className="eyebrow">{lang === "it" ? "Tour disponibili" : "Available tours"}</div>
              <h2 className="section-title">
                {lang === "it" ? "Salpa con " : "Sail aboard "}
                <span className="accent">{c.name}</span>
              </h2>
            </div>
          </div>
          <TourCarousel
            items={compatibleTours.map<CarouselItem>((tr) => {
              const tc = lang === "it" ? tr.it : tr.en;
              // Per-tour crop just for this boat-detail carousel.
              const pos: Record<string, string> = {
                "tour-capri-ischia": "72% 62%", // shift right to centre the islet, a touch lower
              };
              return {
                slug: tr.slug,
                // Giro Isola, Blue Grotto (and Full Day) use their main-page
                // shot here, matching the home; others use the bento image.
                image: tr.imageHome ?? tr.image,
                imagePosition: pos[tr.legacyId],
                title: tc.title,
                meta: tc.meta,
                priceFrom: tr.priceFrom,
                short: tc.short,
              };
            })}
            fromLabel={lang === "it" ? "Da" : "From"}
            ctaLabel={lang === "it" ? "Scopri il tour" : "Discover the tour"}
          />
        </section>
      )}
    </PageShell>
  );
}
