"use client";

import Link from "next/link";
import PageShell from "../../components/PageShell";
import { useLang } from "../../i18n/LanguageProvider";
import { transferRoutes } from "../../data/tours";

type Route = {
  from: { it: string; en: string };
  to: { it: string; en: string };
  duration: string;
  desc: { it: string; en: string };
};

const pickupRoutes: Route[] = [
  {
    from: { it: "Positano", en: "Positano" },
    to: { it: "Capri", en: "Capri" },
    duration: "8h",
    desc: {
      it: "Imbarco al molo di Positano alle 10:00. Sosta bagno a Li Galli, sbarco a Capri per visita e shopping. Giro completo dell'isola di Capri con visita delle grotte. Navigazione lungo la Costiera Amalfitana. Rientro alle 18:00.",
      en: "Boarding at Positano pier at 10:00. Swim stop at Li Galli, landing in Capri for visit and shopping. Full island loop with grotto visits. Sail along the Amalfi Coast. Return at 18:00.",
    },
  },
  {
    from: { it: "Amalfi", en: "Amalfi" },
    to: { it: "Capri", en: "Capri" },
    duration: "8h",
    desc: {
      it: "Imbarco al porto di Amalfi alle 10:00. Sosta bagno a Li Galli, sbarco a Capri per visita e shopping. Giro dell'isola di Capri. Costiera Amalfitana con Nerano, Positano, Praiano, Fiordo di Furore, Conca dei Marini. Rientro alle 18:00.",
      en: "Boarding at Amalfi port at 10:00. Swim stop at Li Galli, landing in Capri for visit and shopping. Capri island loop. Amalfi Coast with Nerano, Positano, Praiano, Fiordo di Furore, Conca dei Marini. Return at 18:00.",
    },
  },
  {
    from: { it: "Sorrento", en: "Sorrento" },
    to: { it: "Capri", en: "Capri" },
    duration: "8h",
    desc: {
      it: "Imbarco al porto di Sorrento alle 10:00. Navigazione verso Capri, sbarco per visita e shopping. Giro dell'isola di Capri. Costiera Sorrentina con Massa Lubrense e Bagni della Regina Giovanna. Rientro alle 18:00.",
      en: "Boarding at Sorrento port at 10:00. Sail to Capri, landing for visit and shopping. Capri island loop. Sorrento Coast with Massa Lubrense and Regina Giovanna Baths. Return at 18:00.",
    },
  },
  {
    from: { it: "Sorrento", en: "Sorrento" },
    to: { it: "Costiera Amalfitana", en: "Amalfi Coast" },
    duration: "8h",
    desc: {
      it: "Imbarco al porto di Sorrento alle 10:00. Costiera Sorrentina con Bagni della Regina Giovanna, Massa Lubrense, Punta Campanella. Costiera Amalfitana: Nerano, Li Galli, Positano, Praiano, Fiordo di Furore, Conca dei Marini, Amalfi. Sbarco a Positano e Amalfi. Rientro alle 18:00.",
      en: "Boarding at Sorrento port at 10:00. Sorrento Coast with Regina Giovanna Baths, Massa Lubrense, Punta Campanella. Amalfi Coast: Nerano, Li Galli, Positano, Praiano, Fiordo di Furore, Conca dei Marini, Amalfi. Landing in Positano and Amalfi. Return at 18:00.",
    },
  },
];

export default function TransfersPage() {
  const { lang, path } = useLang();
  return (
    <PageShell>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">
            {lang === "it" ? "Trasferimenti in barca" : "Boat transfers"}
          </div>
          <h1 className="page-hero-title">
            {lang === "it" ? "Tratte dirette " : "Direct routes "}
            <span className="accent-italic">
              {lang === "it" ? "nel Golfo." : "across the Gulf."}
            </span>
          </h1>
          <p className="page-hero-desc">
            {lang === "it"
              ? "Trasferimenti privati point-to-point tra Capri, la costiera e le isole. Sui tuoi orari — anche di notte, anche all'ultimo minuto. Equipaggio, carburante e snack inclusi."
              : "Private point-to-point transfers between Capri, the coast and the islands. On your schedule — also at night, also last-minute. Crew, fuel and onboard snacks included."}
          </p>
          <div className="page-hero-pills">
            <span className="page-hero-pill">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="8" r="6" />
                <polyline points="8 4 8 8 11 10" />
              </svg>
              {lang === "it" ? "24/7 · anche notturni" : "24/7 · overnight available"}
            </span>
            <span className="page-hero-pill">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 13 L3 5 L13 5 L13 13" />
                <polyline points="3 9 13 9" />
              </svg>
              {lang === "it" ? "2 ore di preavviso" : "2-hour notice"}
            </span>
            <span className="page-hero-pill">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 8 6.5 11.5 13 4.5" />
              </svg>
              {lang === "it" ? "Equipaggio incluso" : "Crew included"}
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow">{lang === "it" ? "Tariffario" : "Pricing"}</div>
            <h2 className="section-title">
              {lang === "it" ? "Prezzi " : "Prices "}
              <span className="accent">
                {lang === "it" ? "per imbarcazione." : "by vessel."}
              </span>
            </h2>
          </div>

          <div className="transfer-table-wrap" data-reveal>
            <table className="transfer-table transfer-table-interactive">
              <thead>
                <tr>
                  <th>{lang === "it" ? "Tratta" : "Route"}</th>
                  <th>{lang === "it" ? "Durata" : "Duration"}</th>
                  <th>Libeccio</th>
                  <th>Tramontana</th>
                  <th>Gabbiano</th>
                  <th aria-label="Book"></th>
                </tr>
              </thead>
              <tbody>
                {transferRoutes.map((r) => {
                  const text = `${lang === "it" ? "Prenotazione trasferimento" : "Transfer booking"}: ${r.from} → ${r.to}`;
                  const wa = `https://wa.me/393335741333?text=${encodeURIComponent(text)}`;
                  return (
                    <tr key={`${r.from}-${r.to}`}>
                      <td>
                        <strong>{r.from}</strong> → {r.to}
                      </td>
                      <td>{r.duration}</td>
                      <td>€{r.v65.toLocaleString("it-IT")}</td>
                      <td>€{r.v55.toLocaleString("it-IT")}</td>
                      <td>€{r.s38.toLocaleString("it-IT")}</td>
                      <td className="transfer-table-cta-cell">
                        <a href={wa} target="_blank" rel="noopener" className="transfer-row-cta">
                          {lang === "it" ? "Prenota" : "Book"}
                          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="8" x2="13" y2="8" />
                            <polyline points="9 4 13 8 9 12" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="transfer-note">
              {lang === "it"
                ? "Il prezzo include equipaggio, carburante, IVA, snack e soft drink, porti d'imbarco e sbarco. Disponibili anche di notte e a orari flessibili — sufficienti 2 ore di anticipo."
                : "Price includes crew, fuel, VAT, snacks and soft drinks, embarkation and disembarkation ports. Available at night too with flexible scheduling — 2-hour notice is enough."}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow">Top Service · VIP</div>
            <h2 className="section-title">
              {lang === "it" ? "Trasferimento " : "Door-to-door "}
              <span className="accent">
                {lang === "it" ? "porta-a-porta." : "VIP."}
              </span>
            </h2>
            <p className="section-desc">
              {lang === "it"
                ? "Auto privata da/per l'hotel, servizio bagagli, assistenza all'imbarco e all'arrivo in aeroporto. Pensato per chi vuole zero attese e zero pensieri."
                : "Private car to/from the hotel, porterage, assistance at boarding and at the airport. Built for guests who want zero waits and zero hassle."}
            </p>
          </div>

          <div className="vip-features-grid" data-reveal>
            <div className="vip-feature">
              <h3>{lang === "it" ? "Auto privata" : "Private car"}</h3>
              <p>
                {lang === "it"
                  ? "Mercedes Classe V o E con autista in livrea. Servizio dedicato dall'hotel al porto."
                  : "Mercedes V-Class or E-Class with uniformed driver. Dedicated hotel-to-port service."}
              </p>
            </div>
            <div className="vip-feature">
              <h3>{lang === "it" ? "Servizio bagagli" : "Porterage"}</h3>
              <p>
                {lang === "it"
                  ? "Trasferimento bagagli porta-a-porta. Vi attende già sistemato a bordo."
                  : "Door-to-door luggage handling. Already loaded when you arrive on board."}
              </p>
            </div>
            <div className="vip-feature">
              <h3>{lang === "it" ? "Assistenza aeroporto" : "Airport assist"}</h3>
              <p>
                {lang === "it"
                  ? "Check-in espresso, fast-track sicurezza e accompagnamento al gate."
                  : "Express check-in, security fast-track and walk to the gate."}
              </p>
            </div>
          </div>

          <div className="cta-row" data-reveal>
            <a
              href="https://wa.me/393335741333?text=VIP%20Top%20Service%20transfer"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              {lang === "it" ? "Richiedi Top Service" : "Request Top Service"}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow">{lang === "it" ? "Pick-up & drop-off" : "Pick-up & drop-off"}</div>
            <h2 className="section-title">
              {lang === "it" ? "Imbarco da " : "Boarding from "}
              <span className="accent">
                {lang === "it" ? "altri porti." : "other ports."}
              </span>
            </h2>
            <p className="section-desc">
              {lang === "it"
                ? "Giornata intera con imbarco e sbarco dal tuo porto preferito. Stesse esperienze dei tour da Capri, ma partendo dalla costa."
                : "Full day with embarkation and disembarkation from the port of your choice. Same experiences as the Capri tours, starting from the coast."}
            </p>
          </div>

          <div className="pickup-list">
            {pickupRoutes.map((r, i) => (
              <article
                key={`${r.from.it}-${r.to.it}`}
                className="pickup-row"
                data-reveal="left"
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div className="pickup-header">
                  <div className="pickup-route">
                    <strong>{r.from[lang]}</strong>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="8" x2="13" y2="8" />
                      <polyline points="9 4 13 8 9 12" />
                    </svg>
                    <strong>{r.to[lang]}</strong>
                  </div>
                  <span className="pickup-duration">{r.duration}</span>
                </div>
                <p className="pickup-desc">{r.desc[lang]}</p>
              </article>
            ))}
          </div>

          <div className="cta-row" data-reveal>
            <a
              href="https://wa.me/393335741333"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              {lang === "it" ? "Richiedi un preventivo" : "Request a quote"}
            </a>
            <Link href={path("/charter")} className="btn-secondary-dark">
              {lang === "it" ? "Noleggio con skipper" : "Skipper charter"}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
