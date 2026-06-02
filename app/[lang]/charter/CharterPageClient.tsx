"use client";

import Link from "next/link";
import PageShell from "../../components/PageShell";
import { useLang } from "../../i18n/LanguageProvider";
import { fleet } from "../../data/fleet";

export default function CharterPage() {
  const { lang, path } = useLang();

  // Three numbered steps for the zig-zag timeline.
  const steps = [
    {
      n: "01",
      it: {
        h: "Ci scrivi",
        p: "Telefono, WhatsApp o email. Raccontaci cosa hai in mente: una caletta, un tramonto, un pranzo lontano dalle folle.",
      },
      en: {
        h: "You reach out",
        p: "Phone, WhatsApp or email. Tell us what you have in mind: a hidden cove, a sunset, a lunch away from the crowds.",
      },
    },
    {
      n: "02",
      it: {
        h: "Costruiamo l'itinerario",
        p: "Il capitano studia con te orari, soste, eventuali ristoranti e prenotazioni. Tutto privato, tutto flessibile.",
      },
      en: {
        h: "We build the route",
        p: "The captain plans with you times, stops, restaurants and reservations. Private, flexible, yours.",
      },
    },
    {
      n: "03",
      it: {
        h: "Salpate",
        p: "Sali a bordo, ci pensiamo a tutto: navigazione, ancoraggi, sicurezza, comfort. Tu pensi solo a goderti la giornata.",
      },
      en: {
        h: "You sail",
        p: "Step on board, we handle everything: navigation, anchoring, safety, comfort. You just enjoy the day.",
      },
    },
  ];

  const includedAlways = [
    { it: "Capitano qualificato", en: "Licensed captain" },
    { it: "Carburante e ormeggi", en: "Fuel and mooring" },
    { it: "IVA inclusa", en: "VAT included" },
    { it: "Snack & soft drink a bordo", en: "Snacks & soft drinks on board" },
    { it: "Attrezzatura snorkeling e SUP", en: "Snorkeling gear and SUP" },
    { it: "Asciugamani e doccia esterna", en: "Towels and outdoor shower" },
  ];

  const includedRequest = [
    { it: "Chef privato a bordo", en: "Private chef on board" },
    { it: "Catering / aperitivo curato", en: "Catering / curated aperitivo" },
    { it: "Wine pairing", en: "Wine pairing" },
    { it: "Auto privata porta-a-porta", en: "Door-to-door private car" },
    { it: "Servizio fotografico", en: "Photography service" },
    { it: "Allestimento speciale", en: "Special-occasion setup" },
  ];

  const Check = () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="3 8.5 6.5 12 13 5" />
    </svg>
  );

  const waBook = `https://wa.me/393335741333?text=${encodeURIComponent(
    lang === "it"
      ? "Ciao, vorrei organizzare un noleggio su misura."
      : "Hi, I'd like to arrange a tailored charter."
  )}`;

  return (
    <PageShell>
      {/* HERO — navy full-viewport, "La barca è tua" lands hard */}
      <section className="page-hero charter-hero-navy">
        <div className="page-hero-inner">
          <div className="eyebrow">
            {lang === "it" ? "Noleggio yacht" : "Charter · yacht hire"}
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

      {/* COME FUNZIONA — zig-zag timeline with manifesto-style numerals */}
      <section className="section charter-howto">
        <div className="section-inner">
          <header className="charter-section-head" data-reveal>
            <div className="eyebrow">
              {lang === "it" ? "Come funziona" : "How it works"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Tre passi, " : "Three steps, "}
              <span className="accent">
                {lang === "it" ? "una giornata su misura." : "one tailored day."}
              </span>
            </h2>
          </header>

          <ol className="charter-timeline">
            {steps.map((s, i) => {
              const c = lang === "it" ? s.it : s.en;
              return (
                <li
                  key={s.n}
                  className={`charter-timeline-row${i % 2 === 1 ? " is-reverse" : ""}`}
                  data-reveal={i % 2 === 1 ? "left" : ""}
                >
                  <div className="charter-timeline-num"><span>{s.n}</span></div>
                  <div className="charter-timeline-card">
                    <h3>{c.h}</h3>
                    <p>{c.p}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* A BORDO — luxury photo grid moved UP for visual movement */}
      <section className="section section-alt charter-luxury" data-reveal>
        <div className="section-inner">
          <div className="charter-luxury-head">
            <div className="eyebrow">
              {lang === "it" ? "A bordo" : "On board"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "La barca è il programma. " : "The boat is the plan. "}
              <span className="accent">
                {lang === "it" ? "Tu, il tempo." : "You, the pace."}
              </span>
            </h2>
            <p className="section-desc">
              {lang === "it"
                ? "Solarium, doccia esterna, chef su richiesta — l'unica cosa da decidere è quando rientrare."
                : "Sun deck, outdoor shower, chef on request — the only thing to decide is when to head back."}
            </p>
          </div>

          <div className="charter-luxury-grid">
            <figure className="charter-luxury-cell">
              <img src="/charter/sundeck-couple.jpg" alt={lang === "it" ? "Coppia in relax sul solarium dello yacht" : "Couple relaxing on the yacht sun deck"} />
            </figure>
            <figure className="charter-luxury-cell">
              <img src="/charter/luxury-detail.jpg" alt={lang === "it" ? "Dettaglio cuscini e teli Capri Yacht Charter" : "Capri Yacht Charter towel and cushion detail"} />
            </figure>
            <figure className="charter-luxury-cell">
              <img src="/charter/aperitivo.jpg" alt={lang === "it" ? "Aperitivo a bordo con cuscino Capri Yacht Charter" : "Aperitivo on board with Capri Yacht Charter cushion"} />
            </figure>
            <figure className="charter-luxury-cell">
              <img src="/charter/sunset-reading.jpg" alt={lang === "it" ? "Lettura al tramonto in prua" : "Reading on the bow at sunset"} />
            </figure>
            <figure className="charter-luxury-cell">
              <img src="/charter/swim-faraglione.jpg" alt={lang === "it" ? "Tuffo davanti ai Faraglioni" : "Swimming by the Faraglioni"} />
            </figure>
            <figure className="charter-luxury-cell">
              <img src="/charter/champagne-archway.jpg" alt={lang === "it" ? "Brindisi davanti all'arco dei Faraglioni" : "Toast under the Faraglioni arch"} />
            </figure>
          </div>
        </div>
      </section>

      {/* COSA È INCLUSO — moved DOWN, after photos. With WA CTA at end. */}
      <section className="section charter-included">
        <div className="section-inner">
          <header className="charter-section-head" data-reveal>
            <div className="eyebrow">
              {lang === "it" ? "Cosa è incluso" : "What's included"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Tutto, " : "Everything, "}
              <span className="accent">
                {lang === "it" ? "senza extra nascosti." : "no hidden extras."}
              </span>
            </h2>
          </header>

          <div className="charter-included-split" data-reveal>
            <div className="charter-included-col">
              <h4>{lang === "it" ? "Sempre incluso" : "Always included"}</h4>
              <ul>
                {includedAlways.map((item) => (
                  <li key={item.it}>
                    <Check />
                    <span>{lang === "it" ? item.it : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="charter-included-col">
              <h4>{lang === "it" ? "Su richiesta" : "On request"}</h4>
              <ul>
                {includedRequest.map((item) => (
                  <li key={item.it}>
                    <Check />
                    <span>{lang === "it" ? item.it : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="charter-included-cta" data-reveal>
            <p>
              {lang === "it"
                ? "Ogni dettaglio si decide insieme, in privato."
                : "Every detail is decided together, privately."}
            </p>
            <a href={waBook} target="_blank" rel="noopener" className="btn-primary">
              {lang === "it" ? "Parliamone su WhatsApp" : "Talk on WhatsApp"}
            </a>
          </div>
        </div>
      </section>

      {/* SCEGLI LA BARCA */}
      <section className="section section-alt charter-fleet">
        <div className="section-inner">
          <header className="charter-section-head" data-reveal>
            <div className="eyebrow">
              {lang === "it" ? "Scegli la barca" : "Choose the boat"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Tre imbarcazioni, " : "Three vessels, "}
              <span className="accent">
                {lang === "it" ? "un'unica promessa." : "one promise."}
              </span>
            </h2>
          </header>

          <div className="tour-boats-grid">
            {fleet.map((b) => {
              const c = lang === "it" ? b.it : b.en;
              return (
                <Link key={b.slug} href={path(`/fleet/${b.slug}`)} className="tour-boat-card" data-reveal="left">
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
        </div>
      </section>
    </PageShell>
  );
}
