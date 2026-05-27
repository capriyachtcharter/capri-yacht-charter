"use client";

import Link from "next/link";
import PageShell from "../components/PageShell";
import { useLang } from "../i18n/LanguageProvider";
import { fleet } from "../data/fleet";

export default function CharterPage() {
  const { lang } = useLang();
  return (
    <PageShell>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">
            {lang === "it" ? "Charter · noleggio yacht" : "Charter · yacht hire"}
          </div>
          <h1 className="page-hero-title">
            {lang === "it" ? "La barca è tua." : "The boat is yours."}
            <br />
            <span className="accent-italic">
              {lang === "it" ? "Il capitano è nostro." : "The captain is ours."}
            </span>
          </h1>
          <p className="page-hero-desc">
            {lang === "it"
              ? "Noleggia un nostro yacht con capitano dedicato per una giornata intera o multi-day. Nessun itinerario imposto, nessun orario fisso — disegniamo la giornata insieme."
              : "Hire one of our yachts with a dedicated captain for a full day or multi-day. No fixed itinerary, no rigid schedule — we design the day together."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow">
              {lang === "it" ? "Come funziona" : "How it works"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Tre passi, " : "Three steps, "}
              <span className="accent">
                {lang === "it" ? "una giornata su misura." : "one tailored day."}
              </span>
            </h2>
          </div>

          <div className="skipper-steps" data-reveal>
            <div className="skipper-step">
              <div className="skipper-step-num">01</div>
              <h3>{lang === "it" ? "Ci scrivi" : "You reach out"}</h3>
              <p>
                {lang === "it"
                  ? "Telefono, WhatsApp o email. Raccontaci cosa hai in mente: una caletta, un tramonto, un pranzo lontano dalle folle."
                  : "Phone, WhatsApp or email. Tell us what you have in mind: a hidden cove, a sunset, a lunch away from the crowds."}
              </p>
            </div>
            <div className="skipper-step">
              <div className="skipper-step-num">02</div>
              <h3>{lang === "it" ? "Costruiamo l'itinerario" : "We build the route"}</h3>
              <p>
                {lang === "it"
                  ? "Il capitano studia con te orari, soste, eventuali ristoranti e prenotazioni. Tutto privato, tutto flessibile."
                  : "The captain plans with you times, stops, restaurants and reservations. Private, flexible, yours."}
              </p>
            </div>
            <div className="skipper-step">
              <div className="skipper-step-num">03</div>
              <h3>{lang === "it" ? "Salpate" : "You sail"}</h3>
              <p>
                {lang === "it"
                  ? "Sali a bordo, ci pensiamo a tutto: navigazione, ancoraggi, sicurezza, comfort. Tu pensi solo a goderti la giornata."
                  : "Step on board, we handle everything: navigation, anchoring, safety, comfort. You just enjoy the day."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow">
              {lang === "it" ? "Cosa è incluso" : "What's included"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Tutto, " : "Everything, "}
              <span className="accent">
                {lang === "it" ? "senza extra nascosti." : "no hidden extras."}
              </span>
            </h2>
          </div>

          <div className="skipper-included" data-reveal>
            <div>
              <h4>{lang === "it" ? "Sempre incluso" : "Always included"}</h4>
              <ul>
                <li>{lang === "it" ? "Capitano qualificato" : "Licensed captain"}</li>
                <li>{lang === "it" ? "Carburante e ormeggi" : "Fuel and mooring"}</li>
                <li>{lang === "it" ? "IVA" : "VAT"}</li>
                <li>{lang === "it" ? "Snack & soft drink a bordo" : "Snacks & soft drinks on board"}</li>
                <li>{lang === "it" ? "Attrezzatura snorkeling e SUP" : "Snorkeling gear and SUP"}</li>
                <li>{lang === "it" ? "Asciugamani e doccia esterna" : "Towels and outdoor shower"}</li>
              </ul>
            </div>
            <div>
              <h4>{lang === "it" ? "Su richiesta" : "On request"}</h4>
              <ul>
                <li>{lang === "it" ? "Chef privato a bordo" : "Private chef on board"}</li>
                <li>{lang === "it" ? "Catering / aperitivo" : "Catering / aperitivo"}</li>
                <li>{lang === "it" ? "Wine pairing curato" : "Curated wine pairing"}</li>
                <li>{lang === "it" ? "Trasferimento porta-a-porta" : "Door-to-door transfer"}</li>
                <li>{lang === "it" ? "Servizio fotografico" : "Photography service"}</li>
                <li>{lang === "it" ? "Allestimento speciale (compleanno, proposta)" : "Special setup (birthday, proposal)"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div data-reveal>
            <div className="eyebrow">
              {lang === "it" ? "Scegli la barca" : "Choose the boat"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Tre imbarcazioni, " : "Three vessels, "}
              <span className="accent">
                {lang === "it" ? "un'unica promessa." : "one promise."}
              </span>
            </h2>
          </div>

          <div className="tour-boats-grid">
            {fleet.map((b) => {
              const c = lang === "it" ? b.it : b.en;
              return (
                <Link key={b.slug} href={`/fleet/${b.slug}`} className="tour-boat-card" data-reveal="left">
                  <div className="tour-boat-img">
                    <img src={b.cover} alt={c.name} />
                  </div>
                  <div className="tour-boat-body">
                    <h3>{c.name}</h3>
                    <div className="tour-boat-model">{c.model}</div>
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

          <div className="cta-row" data-reveal>
            <a
              href="https://wa.me/393335741333?text=Vorrei%20noleggiare%20uno%20yacht%20con%20skipper"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              {lang === "it" ? "Richiedi preventivo" : "Request a quote"}
            </a>
            <Link href="/contact" className="btn-secondary-dark">
              {lang === "it" ? "Contattaci" : "Contact us"}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
