"use client";

import Link from "next/link";
import Image from "next/image";
import PageShell from "../components/PageShell";
import { useLang } from "../i18n/LanguageProvider";
import { tours, transferRoutes } from "../data/tours";

export default function ToursHubPage() {
  const { lang, t } = useLang();
  const daily = tours.filter((tr) => tr.category === "daily");

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
              ? "Tour giornalieri privati, noleggi brevi e mini crociere — scegli la giornata che hai in mente o costruiamola insieme."
              : "Private day tours, short charters and mini cruises — pick the day you have in mind or build it with us."}
          </p>
        </div>
      </section>

      <section className="section" id="daily">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow">{lang === "it" ? "Tour Giornalieri" : "Day Tours"}</div>
            <h2 className="section-title">
              {lang === "it" ? "Le esperienze " : "Signature "}
              <span className="accent">{lang === "it" ? "in mare" : "experiences"}</span>
            </h2>
            <p className="section-desc tours-desc">
              {lang === "it"
                ? "Otto itinerari curati, ognuno interamente privato. Da Capri all'Amalfitana, fino al Golfo e alle isole."
                : "Eight curated itineraries, each entirely private. From Capri to the Amalfi Coast and the Gulf islands."}
            </p>
          </div>

          <div className="tours-grid tours-grid-wide">
            {daily.map((tour, i) => {
              const c = lang === "it" ? tour.it : tour.en;
              const tagLabel = tour.tag ? t.tours.tags[tour.tag] : null;
              return (
                <Link
                  key={tour.slug}
                  href={`/tours/${tour.slug}`}
                  className="tour-card tour-card-link"
                  data-reveal="left"
                  style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
                >
                  <div className="tour-card-img">
                    {tagLabel && <span className="tour-card-tag">{tagLabel}</span>}
                    <Image
                      src={tour.image}
                      alt={c.title}
                      width={900}
                      height={1125}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="tour-card-body">
                    <div className="tour-card-meta">{c.meta}</div>
                    <h3 className="tour-card-title">{c.title}</h3>
                    <p className="tour-card-desc">{c.short}</p>
                    <div className="tour-card-footer">
                      <div className="tour-card-price">
                        <span className="tour-card-price-label">{t.tours.from}</span>
                        <span className="tour-card-price-value">{tour.priceFrom}</span>
                      </div>
                      <span className="tour-card-book">
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

      <section className="section section-alt" id="transfers">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow">
              {lang === "it" ? "Noleggio Breve & Trasferimenti" : "Short Charters & Transfers"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Tratte dirette, " : "Direct routes, "}
              <span className="accent">
                {lang === "it" ? "tariffe trasparenti." : "transparent rates."}
              </span>
            </h2>
            <p className="section-desc">
              {lang === "it"
                ? "Trasferimenti privati point-to-point tra Capri, la costiera e le isole. Prezzi per barca, equipaggio e snack inclusi."
                : "Private point-to-point transfers between Capri, the coast and the islands. Prices per boat, crew and snacks included."}
            </p>
          </div>

          <div className="transfer-table-wrap" data-reveal>
            <table className="transfer-table">
              <thead>
                <tr>
                  <th>{lang === "it" ? "Tratta" : "Route"}</th>
                  <th>{lang === "it" ? "Durata" : "Duration"}</th>
                  <th>Libeccio</th>
                  <th>Tramontana</th>
                  <th>Gabbiano</th>
                </tr>
              </thead>
              <tbody>
                {transferRoutes.map((r) => (
                  <tr key={`${r.from}-${r.to}`}>
                    <td>
                      <strong>{r.from}</strong> → {r.to}
                    </td>
                    <td>{r.duration}</td>
                    <td>€{r.v65.toLocaleString("it-IT")}</td>
                    <td>€{r.v55.toLocaleString("it-IT")}</td>
                    <td>€{r.s38.toLocaleString("it-IT")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="transfer-note">
              {lang === "it"
                ? "Il prezzo include equipaggio, carburante, IVA, snack e soft drink, porti d'imbarco e sbarco."
                : "Price includes crew, fuel, VAT, snacks and soft drinks, embarkation and disembarkation ports."}
            </p>
            <a
              href="https://wa.me/393335741333"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              {lang === "it" ? "Richiedi un trasferimento" : "Request a transfer"}
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="mini-cruises">
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
                  ? "Tender, SUP, snorkeling, attrezzatura snorkel — tutto a bordo."
                  : "Tender, SUP, snorkeling gear — all on board."}
              </p>
            </div>
          </div>

          <div className="cta-row" data-reveal>
            <a href="https://wa.me/393335741333" target="_blank" rel="noopener" className="btn-primary">
              {t.miniCruises.cta}
            </a>
            <Link href="/fleet" className="btn-secondary-dark">
              {lang === "it" ? "Vedi la flotta" : "View the fleet"}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
