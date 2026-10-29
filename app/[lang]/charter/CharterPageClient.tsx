"use client";

import Link from "next/link";
import PageShell from "../../components/PageShell";
import { useLang } from "../../i18n/LanguageProvider";
import { fleet } from "../../data/fleet";

// Noleggio breve — same structure as the Tour su misura page (/tailor-made):
// hero → numbered steps → photo grid → what's included + CTA → choose the boat.
// Never call it "transfer" on the site: the client can't legally advertise transfers.
// Booking happens on FareHarbor; no prices shown.

// TODO(client): FareHarbor booking link not provided yet — swap in the real URL.
const FAREHARBOR_URL = "#";

// TODO(client): placeholder hero — the client is sending a photo of people (dressed)
// on board. Replace when it arrives.
const HERO_IMAGE = "/tours/capri-amalfi.jpg";

// Boat photos for the grid (sent by Gabriele, 2026-10-29).
// Cells are portrait (3:4): objectPosition keeps each boat inside the crop.
const GALLERY = [
  { src: "/charter/noleggio-1.jpg", pos: "60% center" },
  { src: "/charter/noleggio-2.jpg", pos: "center" },
  { src: "/charter/noleggio-3.jpg", pos: "78% center" },
  { src: "/charter/noleggio-4.jpg", pos: "30% center" },
  { src: "/charter/noleggio-5.jpg", pos: "center" },
  { src: "/charter/noleggio-6.jpg", pos: "center" },
];

export default function CharterPage() {
  const { lang, path } = useLang();

  const destinations = ["Capri", "Napoli", "Sorrento", "Positano", "Amalfi", "Ravello", "Salerno", "Ischia"];

  // PLACEHOLDER steps — to be confirmed by the client.
  const steps = [
    {
      n: "01",
      it: { h: "Scegli barca e data", p: "Scegli la barca, il giorno e l'orario che preferisci." },
      en: { h: "Pick boat and date", p: "Choose the boat, the day and the time that suit you." },
    },
    {
      n: "02",
      it: { h: "Indica la rotta", p: "Dicci da dove parti e dove vuoi arrivare: Capri, Napoli, Sorrento, la Costiera, Ischia e non solo." },
      en: { h: "Tell us the route", p: "Tell us where you depart from and where you're headed: Capri, Naples, Sorrento, the Coast, Ischia and more." },
    },
    {
      n: "03",
      it: { h: "Prenota online", p: "Prenoti e paghi online in pochi passaggi, senza attese." },
      en: { h: "Book online", p: "Book and pay online in a few steps, no waiting." },
    },
    {
      n: "04",
      it: { h: "Salpate", p: "Il capitano ti aspetta al molo all'orario concordato. Tu pensi solo al viaggio." },
      en: { h: "Set sail", p: "Your captain meets you at the pier at the agreed time. You just enjoy the journey." },
    },
  ];

  // PLACEHOLDER — merged from the current site's "always included" list and the old
  // site's charter services. To be confirmed by the client.
  const includedAlways = [
    { it: "Capitano dedicato", en: "Dedicated captain" },
    { it: "Carburante e ormeggi", en: "Fuel and mooring" },
    { it: "IVA inclusa", en: "VAT included" },
    { it: "Soft drink e piccoli snack", en: "Soft drinks and small snacks" },
    { it: "Teli mare a bordo", en: "Beach towels on board" },
  ];

  const includedRequest = [
    { it: "Bollicine e vino a bordo", en: "Sparkling wine and wine on board" },
    { it: "Aperitivo o catering curato", en: "Curated aperitivo or catering" },
    { it: "Allestimento per occasioni speciali", en: "Special-occasion setup" },
  ];

  const Check = () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="3 8.5 6.5 12 13 5" />
    </svg>
  );

  return (
    <PageShell>
      {/* HERO — photo + navy veil */}
      <section
        className="page-hero charter-hero-navy charter-hero-photo"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="page-hero-inner">
          <div className="eyebrow">
            {lang === "it" ? "Noleggio breve" : "Short-term hire"}
          </div>
          <h1 className="page-hero-title">
            {lang === "it" ? "Il viaggio è già parte del lusso." : "The journey is already part of the luxury."}
            <br />
            <span className="accent-italic">
              {lang === "it"
                ? "Yacht privati con capitano, per vivere il mare e raggiungere ogni destinazione con stile."
                : "Private yachts with captain, to live the sea and reach every destination in style."}
            </span>
          </h1>
          <p className="page-hero-desc">
            {lang === "it"
              ? "Noleggia un nostro yacht con capitano dedicato per una giornata intera, più giorni o per raggiungere la tua prossima destinazione via mare. Nessun itinerario imposto, nessun orario fisso: disegniamo ogni momento insieme, perché il lusso della vacanza inizi già dal viaggio."
              : "Hire one of our yachts with a dedicated captain for a full day, multi-day or to reach your next destination by sea. No fixed itinerary, no rigid schedule: we design every moment together, so the luxury of your holiday begins from the journey itself."}
          </p>
        </div>
      </section>

      {/* COME FUNZIONA — same zig-zag timeline as the Tour su misura page */}
      <section className="section charter-howto">
        <div className="section-inner">
          <header className="charter-section-head" data-reveal>
            <div className="eyebrow">
              {lang === "it" ? "Come funziona" : "How it works"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Dal molo a destinazione, " : "From pier to destination, "}
              <span className="accent">
                {lang === "it" ? "senza pensieri." : "worry-free."}
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

      {/* LE BARCHE — same photo grid as "A bordo" on the Tour su misura page */}
      <section className="section section-alt charter-luxury" data-reveal>
        <div className="section-inner">
          <div className="charter-luxury-head">
            <div className="eyebrow">
              {lang === "it" ? "Ovunque nel Golfo" : "Anywhere in the Gulf"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Raggiungi ogni destinazione, " : "Reach every destination, "}
              <span className="accent">
                {lang === "it" ? "in totale libertà." : "in complete freedom."}
              </span>
            </h2>
            <p className="section-desc">
              {lang === "it"
                ? "Raggiungi in barca tutte le località del Golfo di Napoli e della Costiera Amalfitana, a bordo di uno yacht privato con capitano. Un modo esclusivo ed efficiente per spostarti, comodo e veloce."
                : "Reach every resort in the Gulf of Naples and along the Amalfi Coast by sea, aboard a private yacht with captain. An exclusive, efficient way to travel, comfortable and fast."}
            </p>
            <p className="charter-hire-destinations">
              {destinations.map((d, i) => (
                <span key={d}>
                  {i > 0 && <span className="charter-hire-destinations-sep" aria-hidden>·</span>}
                  {d}
                </span>
              ))}
            </p>
          </div>

          <div className="charter-luxury-grid">
            {GALLERY.map((g) => (
              <figure key={g.src} className="charter-luxury-cell">
                <img src={g.src} alt={lang === "it" ? "Yacht Capri Yacht Charter" : "Capri Yacht Charter yacht"} style={{ objectPosition: g.pos }} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* COSA È INCLUSO — same 2-col list as the Tour su misura page, then the booking CTA */}
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
                ? "Scegli barca, data e orario: al resto pensiamo noi."
                : "Pick the boat, date and time: we take care of the rest."}
            </p>
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener" className="btn-primary">
              {lang === "it" ? "Prenota ora" : "Book now"}
            </a>
          </div>
        </div>
      </section>

      {/* SCEGLI LA BARCA — same cards as the Tour su misura page */}
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
                      {b.specs.length} · {typeof b.specs.capacityDay === "string" ? b.specs.capacityDay : b.specs.capacityDay[lang]}
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
