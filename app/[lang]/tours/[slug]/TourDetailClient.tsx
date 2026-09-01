"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import PageShell from "../../../components/PageShell";
import { useLang } from "../../../i18n/LanguageProvider";
import { toursBySlug, fixedDefault, variableDefault, extrasDefault, pickupDefault } from "../../../data/tours";
import { boatByLegacyId } from "../../../data/fleet";

export default function TourDetailPage() {
  const params = useParams<{ slug: string }>();
  const tour = toursBySlug[params.slug];
  const { lang, t, path } = useLang();

  if (!tour) {
    notFound();
  }

  const c = lang === "it" ? tour.it : tour.en;
  const boats = tour.boats.map((id) => boatByLegacyId[id]).filter(Boolean);

  return (
    <PageShell>
      <section className="tour-hero">
        <Image
          src={tour.image}
          alt={c.title}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="tour-hero-overlay" />
        <div className="tour-hero-inner">
          <div className="tour-hero-eyebrow">
            <Link href={path("/tours")} className="tour-hero-back">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="13" y1="8" x2="3" y2="8" />
                <polyline points="7 4 3 8 7 12" />
              </svg>
              {lang === "it" ? "Tutti i tour" : "All tours"}
            </Link>
          </div>
          <h1 className="tour-hero-title">{c.title}</h1>
          <div className="tour-hero-meta">{c.meta}</div>
          <div className="tour-hero-price">
            <span className="tour-hero-price-label">{t.tours.from}</span>
            <span className="tour-hero-price-value">{tour.priceFrom}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner tour-detail-grid">
          <div className="tour-detail-main">
            <p className="tour-detail-lead">{c.long}</p>

            <h2 className="tour-detail-h">
              {lang === "it" ? "Itinerario" : "Itinerary"}
            </h2>
            <ol className="tour-itinerary">
              {c.itinerary.map((step, i) => (
                <li key={i}>
                  <span className="tour-itinerary-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <h2 className="tour-detail-h">
              {lang === "it" ? "Highlight" : "Highlights"}
            </h2>
            <ul className="tour-highlights">
              {c.highlights.map((h, i) => (
                <li key={i}>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 8 6.5 11.5 13 4.5" />
                  </svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="tour-included-grid">
              <div>
                <h3 className="tour-included-h">
                  {lang === "it" ? "Prezzo fisso" : "Fixed price"}
                </h3>
                <ul className="tour-included-list">
                  {(lang === "it" ? fixedDefault.it : fixedDefault.en).map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="tour-included-h">
                  {lang === "it" ? "Variabile" : "Variable"}
                </h3>
                <ul className="tour-included-list tour-included-list-muted">
                  {(lang === "it" ? variableDefault.it : variableDefault.en).map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>

            {tour.pricesByBoat && boats.length > 0 && (
              <>
                <h2 className="tour-detail-h">
                  {lang === "it" ? "Prezzo per barca" : "Price per boat"}
                </h2>
                <p className="tour-detail-lead" style={{ fontSize: "0.95rem" }}>
                  {lang === "it"
                    ? "Il tour è privato: prenoti l'intera barca. Il prezzo dipende dall'imbarcazione scelta."
                    : "The tour is private: you book the whole boat. Price depends on which vessel you pick."}
                </p>
                <ul className="tour-extras-list">
                  {boats.map((b) => {
                    const bc = lang === "it" ? b.it : b.en;
                    const price = tour.pricesByBoat?.[b.legacyId];
                    if (!price) return null;
                    return (
                      <li key={b.legacyId}>
                        <span>
                          {bc.name} · <em style={{ fontStyle: "normal", opacity: 0.7 }}>{bc.model}</em>
                        </span>
                        <strong>{price}</strong>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            <h2 className="tour-detail-h">
              {lang === "it" ? "Extra a bordo" : "On-board extras"}
            </h2>
            <p className="tour-detail-lead" style={{ fontSize: "0.95rem" }}>
              {lang === "it"
                ? "Aggiungi al tuo tour su richiesta al momento della prenotazione."
                : "Add to your tour on request at the time of booking."}
            </p>
            <ul className="tour-extras-list">
              {(lang === "it" ? extrasDefault.it : extrasDefault.en).map((e) => (
                <li key={e.label}>
                  <span>{e.label}</span>
                  <strong>{e.price}</strong>
                </li>
              ))}
            </ul>

            <h2 className="tour-detail-h">
              {lang === "it" ? "Pick-up dai porti" : "Pick-up from ports"}
            </h2>
            <p className="tour-detail-lead" style={{ fontSize: "0.95rem" }}>
              {lang === "it"
                ? "Verifica in fase di prenotazione se vuoi un P&D custom."
                : "Ask at booking time if you'd like a custom pick-up & drop-off."}
            </p>
          </div>

          <aside className="tour-detail-side">
            <div className="tour-detail-card">
              <h3 className="tour-detail-card-h">
                {lang === "it" ? "Prenota questa giornata" : "Book this day"}
              </h3>
              <div className="tour-detail-card-price">
                <span>{t.tours.from}</span>
                <strong>{tour.priceFrom}</strong>
              </div>
              <a
                href="https://wa.me/393335741333"
                target="_blank"
                rel="noopener"
                className="btn-primary tour-detail-cta"
              >
                {lang === "it" ? "Prenota ora" : "Book now"}
              </a>
              <div className="tour-detail-card-note">
                {lang === "it"
                  ? "Cancellazione gratuita fino a 7 giorni prima"
                  : "Free cancellation up to 7 days before"}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {boats.length > 0 && (
        <section className="section section-alt">
          <div className="section-inner">
            <div data-reveal>
              <div className="eyebrow">{lang === "it" ? "Scegli la barca" : "Choose your boat"}</div>
              <h2 className="section-title">
                {lang === "it" ? "Disponibile a bordo di " : "Available aboard "}
                <span className="accent">
                  {boats.length} {lang === "it" ? "imbarcazioni" : "vessels"}
                </span>
              </h2>
            </div>

            <div className="tour-boats-grid">
              {boats.map((b) => {
                const bc = lang === "it" ? b.it : b.en;
                return (
                  <Link
                    key={b.slug}
                    href={path(`/fleet/${b.slug}`)}
                    className="tour-boat-card"
                    data-reveal="left"
                  >
                    <div className="tour-boat-img">
                      <img src={b.cover} alt={bc.name} />
                    </div>
                    <div className="tour-boat-body">
                      <h3>{bc.name}</h3>
                      <div className="tour-boat-model">{bc.model}</div>
                      <div className="tour-boat-specs">
                        {b.specs.length} · {b.specs.capacityDay}
                      </div>
                      <span className="tour-boat-cta">
                        {lang === "it" ? "Dettagli" : "Details"}
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="3" y1="8" x2="13" y2="8" />
                          <polyline points="9 4 13 8 9 12" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
