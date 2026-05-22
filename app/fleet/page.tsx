"use client";

import Link from "next/link";
import PageShell from "../components/PageShell";
import { useLang } from "../i18n/LanguageProvider";
import { fleet } from "../data/fleet";

export default function FleetHubPage() {
  const { lang, t } = useLang();
  return (
    <PageShell>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">{t.fleet.eyebrow}</div>
          <h1 className="page-hero-title">
            {lang === "it" ? "La nostra flotta" : "Our fleet"}
          </h1>
          <p className="page-hero-desc">{t.fleet.desc}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="fleet-detail-list">
            {fleet.map((b, i) => {
              const c = lang === "it" ? b.it : b.en;
              return (
                <article
                  key={b.slug}
                  className={`fleet-detail-row${i % 2 === 1 ? " is-reversed" : ""}`}
                  data-reveal
                >
                  <div className="fleet-detail-img">
                    <img src={b.gallery[0]} alt={c.name} />
                  </div>
                  <div className="fleet-detail-body">
                    <div className="fleet-detail-model">{c.model}</div>
                    <h2 className="fleet-detail-name">{c.name}</h2>
                    <div className="fleet-detail-type">{c.type}</div>
                    <p className="fleet-detail-tagline">{c.tagline}</p>

                    <ul className="fleet-detail-specs">
                      <li>
                        <span>{lang === "it" ? "Lunghezza" : "Length"}</span>
                        <strong>{b.specs.length}</strong>
                      </li>
                      <li>
                        <span>{lang === "it" ? "Velocità" : "Top speed"}</span>
                        <strong>{b.specs.speed}</strong>
                      </li>
                      <li>
                        <span>{lang === "it" ? "Ospiti" : "Guests"}</span>
                        <strong>{b.specs.capacityDay}</strong>
                      </li>
                      <li>
                        <span>{lang === "it" ? "Cabine" : "Cabins"}</span>
                        <strong>{b.specs.cabins}</strong>
                      </li>
                    </ul>

                    <div className="fleet-detail-actions">
                      <Link href={`/fleet/${b.slug}`} className="btn-primary">
                        {lang === "it" ? "Scopri di più" : "Discover more"}
                      </Link>
                      <Link href="/tours" className="btn-secondary-dark">
                        {lang === "it" ? "Vedi i tour" : "See the tours"}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
