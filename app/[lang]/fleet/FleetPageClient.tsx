"use client";

import Link from "next/link";
import PageShell from "../../components/PageShell";
import BoatCarousel from "../../components/BoatCarousel";
import { cmsField, useLang } from "../../i18n/LanguageProvider";

export default function FleetHubPage() {
  const { lang, t, path, f, boatByLegacyId } = useLang();
  // Live boats (published edits show without a rebuild), in fleet order.
  const fleet = Object.values(boatByLegacyId);
  const p = t.pages.fleet;
  return (
    <PageShell>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow" {...f("fleet.eyebrow")}>{t.fleet.eyebrow}</div>
          <h1 className="page-hero-title" {...f("pages.fleet.title")}>
            {p.title}
          </h1>
          <p className="page-hero-desc" {...f("fleet.desc", "multiline")}>{t.fleet.desc}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="fleet-detail-list">
            {fleet.map((b, i) => {
              const c = lang === "it" ? b.it : b.en;
              const boat = `fleet:${b.slug}`;
              return (
                <article
                  key={b.slug}
                  className={`fleet-detail-row${i % 2 === 1 ? " is-reversed" : ""}`}
                  data-reveal
                >
                  <div className="fleet-detail-img">
                    <BoatCarousel images={b.gallery} alt={c.name} fieldBase={`${boat}:gallery`} />
                  </div>
                  <div className="fleet-detail-body">
                    <div className="fleet-detail-model" {...cmsField(boat, `${lang}.model`)}>{c.model}</div>
                    <h2 className="fleet-detail-name" {...cmsField(boat, `${lang}.name`)}>{c.name}</h2>
                    <div className="fleet-detail-type" {...cmsField(boat, `${lang}.type`)}>{c.type}</div>
                    <p className="fleet-detail-tagline" {...cmsField(boat, `${lang}.tagline`)}>{c.tagline}</p>

                    <ul className="fleet-detail-specs">
                      <li>
                        <span {...f("pages.fleet.length")}>{p.length}</span>
                        <strong {...cmsField(boat, "specs.length")}>{b.specs.length}</strong>
                      </li>
                      <li>
                        <span {...f("pages.fleet.speed")}>{p.speed}</span>
                        <strong {...(typeof b.specs.speed === "string" ? cmsField(boat, "specs.speed") : {})}>{typeof b.specs.speed === "string" ? b.specs.speed : b.specs.speed[lang]}</strong>
                      </li>
                      <li>
                        <span {...f("pages.fleet.guests")}>{p.guests}</span>
                        <strong {...(typeof b.specs.capacityDay === "string" ? cmsField(boat, "specs.capacityDay") : {})}>{typeof b.specs.capacityDay === "string" ? b.specs.capacityDay : b.specs.capacityDay[lang]}</strong>
                      </li>
                      <li>
                        <span {...f("pages.fleet.cabins")}>{p.cabins}</span>
                        <strong {...(typeof b.specs.cabins === "string" ? cmsField(boat, "specs.cabins") : {})}>{typeof b.specs.cabins === "string" ? b.specs.cabins : b.specs.cabins[lang]}</strong>
                      </li>
                    </ul>

                    <div className="fleet-detail-actions">
                      <Link href={path(`/fleet/${b.slug}`)} className="btn-primary" {...f("fleet.discover")}>
                        {t.fleet.discover}
                      </Link>
                      <a
                        href="https://wa.me/393335741333"
                        target="_blank"
                        rel="noopener"
                        className="btn-secondary-dark"
                        {...f("pages.fleet.book")}
                      >
                        {p.book}
                      </a>
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
