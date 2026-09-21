"use client";

import Link from "next/link";
import BoatCarousel from "./BoatCarousel";
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

function FleetCard({ boat, delay, ctaLabel, ctaHref, fieldBase }: { boat: Boat; delay: number; ctaLabel: string; ctaHref: string; fieldBase?: string }) {
  return (
    <article
      id={`fleet-${boat.id}`}
      className="fleet-card"
      data-reveal="left"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="fleet-card-img">
        <BoatCarousel images={boat.images} alt={boat.name} fieldBase={fieldBase} />
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
            <Link href={ctaHref} className="fleet-card-cta">
              <span>{ctaLabel}</span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9 4 13 8 9 12" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Fleet() {
  const { lang, t, path, boatByLegacyId } = useLang();
  const boats: Boat[] = t.fleet.boats.map((b) => ({
    ...b,
    images: boatByLegacyId[b.id]?.gallery ?? [],
  }));
  const ctaLabel = lang === "it" ? "Scopri di più" : "Discover more";
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
          {boats.map((b, i) => {
            const slug = boatByLegacyId[b.id]?.slug;
            return (
              <FleetCard
                key={b.id}
                boat={b}
                delay={i * 0.14}
                ctaLabel={ctaLabel}
                ctaHref={path(`/fleet/${slug ?? ""}`)}
                fieldBase={slug ? `fleet:${slug}:gallery` : undefined}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
