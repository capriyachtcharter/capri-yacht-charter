"use client";

import { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageProvider";

type Boat = {
  id: string;
  name: string;
  model: string;
  type: string;
  length: string;
  capacity: string;
  desc: string;
  images: string[];
};

const boatImages: Record<string, string[]> = {
  // Order: cover → exterior shots (varied angles) → interior
  "primatist-g65": [
    "/fleet/primatist-g65.jpg",      // cover — sleek dark hull near cliffs
    "/fleet/g65/side-profile.jpg",    // exterior — clean side profile in motion
    "/fleet/g65/aerial-top.jpg",      // exterior — aerial 3/4 view
    "/fleet/g65/exterior-1.jpg",      // interior — helm / cockpit
    "/fleet/g65/salon.jpg",            // interior — master cabin
  ],
  "primatist-g50": [
    "/fleet/primatist-g50.jpg",      // cover — gray hull at Capri's Faraglioni
    "/fleet/g50/bow.jpg",             // exterior — aft cockpit / champagne setup
    "/fleet/g50/salon.jpg",           // interior — wooden salon
    "/fleet/g50/cabin.jpg",           // interior — master cabin
  ],
  "sarima-39": [
    "/fleet/sarima/capri-anchored.jpg", // cover — dark hull anchored in Capri turquoise
    "/fleet/sarima/navigating.jpg",     // exterior — navigating with coast behind
    "/fleet/sarima/sunset.jpg",         // exterior — sunset golden hour with guests
    "/fleet/sarima/at-anchor.jpg",      // exterior — white profile at anchor
    "/fleet/sarima/detail-3.jpg",       // interior — salon
    "/fleet/sarima/detail-2.jpg",       // interior — cabin
  ],
};

function ChevronLeft() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="10 4 6 8 10 12" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 4 10 8 6 12" />
    </svg>
  );
}

function FleetCard({ boat, delay }: { boat: Boat; delay: number }) {
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [pausedByArrow, setPausedByArrow] = useState(false);

  useEffect(() => {
    if (!hovered) {
      setIdx(0);
      return;
    }
    if (pausedByArrow) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % boat.images.length);
    }, 3200);
    return () => clearInterval(id);
  }, [hovered, pausedByArrow, boat.images.length]);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % boat.images.length);
  };
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + boat.images.length) % boat.images.length);
  };

  return (
    <article
      id={`fleet-${boat.id}`}
      className="fleet-card"
      data-reveal="left"
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="fleet-card-img">
        {boat.images.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={boat.name}
            className={`fleet-card-frame${idx === i ? " is-active" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <button
          className="fleet-card-nav fleet-card-prev"
          onClick={prev}
          onMouseEnter={() => setPausedByArrow(true)}
          onMouseLeave={() => setPausedByArrow(false)}
          aria-label="Previous photo"
        >
          <ChevronLeft />
        </button>
        <button
          className="fleet-card-nav fleet-card-next"
          onClick={next}
          onMouseEnter={() => setPausedByArrow(true)}
          onMouseLeave={() => setPausedByArrow(false)}
          aria-label="Next photo"
        >
          <ChevronRight />
        </button>
        <div className="fleet-card-counter">
          <span>{String(idx + 1).padStart(2, "0")}</span>
          <span className="fleet-card-counter-divider" aria-hidden>—</span>
          <span>{String(boat.images.length).padStart(2, "0")}</span>
        </div>
      </div>

      <div className="fleet-card-body">
        <h3 className="fleet-card-name">{boat.name}</h3>
        <div className="fleet-card-model">{boat.model}</div>
        <div className="fleet-card-type">{boat.type}</div>
        <div className="fleet-card-specs">
          <span>{boat.length}</span>
          <span className="fleet-card-spec-divider" aria-hidden>·</span>
          <span>{boat.capacity}</span>
        </div>

        <div className="fleet-card-extra">
          <div className="fleet-card-extra-inner">
            <p className="fleet-card-desc">{boat.desc}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Fleet() {
  const { t } = useLang();
  const boats: Boat[] = t.fleet.boats.map((b) => ({
    ...b,
    images: boatImages[b.id] ?? [],
  }));
  return (
    <section className="fleet section" data-reveal>
      <div className="section-inner">
        <div className="fleet-head">
          <div className="eyebrow">{t.fleet.eyebrow}</div>
          <h2 className="section-title">
            {t.fleet.title} <span className="accent">{t.fleet.titleAccent}</span>
          </h2>
          <p className="section-desc">{t.fleet.desc}</p>
        </div>

        <div className="fleet-grid">
          {boats.map((b, i) => (
            <FleetCard key={b.id} boat={b} delay={i * 0.14} />
          ))}
        </div>
      </div>
    </section>
  );
}
