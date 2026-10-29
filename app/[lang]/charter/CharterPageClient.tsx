"use client";

import Image from "next/image";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import PhotoGrid from "../../components/PhotoGrid";
import { useLang } from "../../i18n/LanguageProvider";
import { fleet } from "../../data/fleet";
import { FAREHARBOR_URL } from "../../data/booking";

// Noleggio breve — same structure as the Tour su misura page (/tailor-made):
// hero → intro → numbered steps → photo grid → what's included + CTA → choose the boat.
// Never call it "transfer" on the site: the client can't legally advertise transfers.
// Booking happens on FareHarbor; no prices shown.


// TODO(client): placeholder hero — the client is sending a photo of people (dressed)
// on board. Replace when it arrives.
const INTRO_IMAGE = "/charter/noleggio-intro.jpg";

// Boat photos for the grid (from Gabriele's upload, 2026-10-29). Picked for a short-hire
// page: boats under way, one per boat, a few recognisable places, the captain at the helm.
// None of them repeats the photos on the Tour su misura page. Cells are portrait (3:4):
// objectPosition keeps each boat inside the crop.
const GALLERY = [
  { src: "/charter/noleggio-1.jpg", pos: "center", alt: { it: "CHITON FOUR vista dall'alto, ospiti sul prendisole", en: "CHITON FOUR from above, guests on the sun deck" } },
  { src: "/charter/noleggio-2.jpg", pos: "88% center", alt: { it: "RORI in navigazione nel Golfo", en: "RORI cruising the Gulf" } },
  { src: "/charter/noleggio-3.jpg", pos: "35% center", alt: { it: "CHITON FOUR al tramonto", en: "CHITON FOUR at sunset" } },
  { src: "/charter/noleggio-4.jpg", pos: "center", alt: { it: "La flotta ai Faraglioni", en: "The fleet at the Faraglioni" } },
  { src: "/charter/noleggio-5.jpg", pos: "center", alt: { it: "TENAREZE VI lungo la costa di Sorrento", en: "TENAREZE VI along the Sorrento coast" } },
  { src: "/charter/noleggio-6.jpg", pos: "center", alt: { it: "Il capitano al timone", en: "The captain at the helm" } },
];

export default function CharterPage() {
  const { lang, path } = useLang();

  const destinations = ["Capri", lang === "it" ? "Napoli" : "Naples", "Sorrento", "Positano", "Amalfi", "Ravello", "Salerno", "Ischia"];

  // PLACEHOLDER steps — to be confirmed by the client.
  const steps = [
    {
      n: "01",
      it: { h: "Scegli barca e data", p: "Scegli la barca, il giorno e l'orario che preferisci." },
      en: { h: "Choose boat and date", p: "Pick the boat, the day and the time that suit you." },
    },
    {
      n: "02",
      it: { h: "Indica la rotta", p: "Dicci da dove parti e dove vuoi arrivare: Capri, Napoli, Sorrento, la Costiera, Ischia e non solo." },
      en: { h: "Tell us the route", p: "Tell us where you depart from and where you're headed: Capri, Naples, Sorrento, the Amalfi Coast, Ischia and more." },
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
    { it: "Bollicine e vino a bordo", en: "Sparkling and still wine on board" },
    { it: "Aperitivo o catering curato", en: "Curated aperitivo or catering" },
    { it: "Allestimento per occasioni speciali", en: "Special-occasion setup" },
  ];

  const Check = () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="3 8 6.5 11.5 13 4.5" />
    </svg>
  );

  return (
    <PageShell>
      {/* HERO — navy full-viewport, same treatment as the Tour su misura page */}
      <section className="page-hero charter-hero-navy">
        <div className="page-hero-inner">
          <div className="eyebrow">
            {lang === "it" ? "Noleggio breve" : "Charter"}
          </div>
          <h1 className="page-hero-title">
            {lang === "it" ? "Il viaggio è già" : "The journey is already"}
            <br />
            <span className="accent-italic">
              {lang === "it" ? "parte del lusso." : "part of the luxury."}
            </span>
          </h1>
          <p className="page-hero-desc">
            {lang === "it"
              ? "Noleggia un nostro yacht con capitano dedicato."
              : "Hire one of our yachts with a dedicated captain."}
          </p>
        </div>
      </section>

      {/* IL SERVIZIO — photo on the left, what the charter is on the right.
          Photo: TENAREZE VI with the crew (DSC05464, horizontal crop). */}
      <section className="section charter-hire-intro">
        <div className="section-inner">
          <div className="hire-intro">
            <div className="hire-intro-photo" data-reveal="left">
              <Image
                src={INTRO_IMAGE}
                alt={lang === "it" ? "TENAREZE VI con l'equipaggio, sullo sfondo il Vesuvio" : "TENAREZE VI with its crew, Vesuvius in the background"}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="hire-intro-body" data-reveal="right">
              <div className="eyebrow">{lang === "it" ? "Il servizio" : "The service"}</div>
              <h2 className="section-title hire-intro-title">
                {lang === "it" ? "Yacht privati con capitano, " : "Private yachts with a captain, "}
                <span className="accent">
                  {lang === "it"
                    ? "per vivere il mare e raggiungere ogni destinazione con stile."
                    : "to enjoy the sea and reach every destination in style."}
                </span>
              </h2>
              <p className="hire-intro-text">
                {lang === "it"
                  ? "Con il noleggio breve uno dei nostri yacht, con il suo capitano, è a tua disposizione per raggiungere via mare le località del Golfo di Napoli e della Costiera Amalfitana: da Capri a Positano, da Sorrento a Ischia."
                  : "With our charter service one of our yachts, with its own captain, is at your disposal to reach the towns of the Gulf of Naples and the Amalfi Coast by sea: from Capri to Positano, from Sorrento to Ischia."}
              </p>
              <p className="hire-intro-text">
                {lang === "it"
                  ? "Per qualche ora, una giornata intera o più giorni. Scegli tu barca, data e orario: al resto pensiamo noi, dall'imbarco all'arrivo, perché il lusso della vacanza inizi già dal viaggio."
                  : "For a few hours, a full day or several days. You choose the boat, the date and the time: we take care of the rest, from boarding to arrival, so the luxury of your holiday begins with the journey itself."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA — four numbered steps in a row (stacked on phones) */}
      <section className="section hire-howto">
        <div className="section-inner">
          <header className="hire-head" data-reveal>
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

          <ol className="hire-steps" data-reveal>
            {steps.map((s) => {
              const c = lang === "it" ? s.it : s.en;
              return (
                <li key={s.n} className="hire-step">
                  <span className="hire-step-num">{s.n}</span>
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
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
                : "Reach every resort in the Gulf of Naples and along the Amalfi Coast by sea, aboard a private yacht with a captain. An exclusive, efficient way to travel: comfortable and fast."}
            </p>
            {/* Departure/destination towns. Static line on desktop; on mobile it becomes an
                auto-scrolling strip (the list is rendered twice for a seamless loop). */}
            <div className="charter-hire-destinations">
              <div className="charter-hire-destinations-track">
                {[...destinations, ...destinations].map((d, i) => (
                  <span
                    key={`${d}-${i}`}
                    className={`charter-hire-dest${i === destinations.length - 1 ? " is-last" : ""}`}
                    aria-hidden={i >= destinations.length ? true : undefined}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <PhotoGrid photos={GALLERY.map((g) => ({ src: g.src, alt: g.alt[lang], pos: g.pos }))} />
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
