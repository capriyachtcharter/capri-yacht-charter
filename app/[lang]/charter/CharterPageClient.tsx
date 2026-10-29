"use client";

import Link from "next/link";
import PageShell from "../../components/PageShell";
import BoatCarousel from "../../components/BoatCarousel";
import { useLang } from "../../i18n/LanguageProvider";
import { fleet } from "../../data/fleet";

// TODO(client): FareHarbor booking link not provided yet — swap in the real URL.
const FAREHARBOR_URL = "#";

// TODO(client): placeholder hero — the client is sending a photo of people (dressed)
// on board. Replace when it arrives.
const HERO_IMAGE = "/tours/capri-amalfi.jpg";

export default function CharterPage() {
  const { lang, path } = useLang();

  // Short-term hire ("noleggio breve"). Never call it "transfer" on the site: the client
  // can't legally advertise transfers. Booking happens on FareHarbor; no prices shown.
  const destinations = ["Capri", "Napoli", "Sorrento", "Positano", "Amalfi", "Ravello", "Salerno", "Ischia"];

  const howItWorks = [
    {
      it: "Scegli la barca, la data e l'orario.",
      en: "Pick the boat, the date and the time.",
    },
    {
      it: "Indica da dove parti e dove vuoi arrivare.",
      en: "Tell us where you depart from and where you want to go.",
    },
    {
      it: "Prenoti e paghi online in pochi passaggi.",
      en: "Book and pay online in a few steps.",
    },
    {
      it: "Il capitano ti aspetta al molo all'orario concordato.",
      en: "Your captain meets you at the pier at the agreed time.",
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
      {/* HERO — photo + navy veil, copy from the 01/10 charter header */}
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

      {/* IL SERVIZIO — intro + destinations */}
      <section className="section charter-hire-intro">
        <div className="section-inner">
          <header className="charter-section-head" data-reveal>
            <div className="eyebrow">
              {lang === "it" ? "Il servizio" : "The service"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Ovunque nel Golfo, " : "Anywhere in the Gulf, "}
              <span className="accent">
                {lang === "it" ? "in totale libertà." : "in complete freedom."}
              </span>
            </h2>
            <p className="section-desc">
              {lang === "it"
                ? "Raggiungi in barca tutte le località del Golfo di Napoli e della Costiera Amalfitana, a bordo di uno yacht privato con capitano. Un modo esclusivo ed efficiente per spostarti, comodo e veloce."
                : "Reach every resort in the Gulf of Naples and along the Amalfi Coast by sea, aboard a private yacht with captain. An exclusive, efficient way to travel, comfortable and fast."}
            </p>
          </header>

          <p className="charter-hire-destinations" data-reveal>
            {destinations.map((d, i) => (
              <span key={d}>
                {i > 0 && <span className="charter-hire-destinations-sep" aria-hidden>·</span>}
                {d}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* COME FUNZIONA — same diamond list as the tour itinerary */}
      <section className="section section-alt charter-hire-how">
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

          <ul className="tour-itinerary charter-hire-steps" data-reveal>
            {howItWorks.map((item) => (
              <li key={item.it}>
                <span className="tour-itinerary-bullet" aria-hidden>
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
                    <polygon points="6,0 12,6 6,12 0,6" fill="currentColor" fillOpacity="0.9" />
                  </svg>
                </span>
                <span>{lang === "it" ? item.it : item.en}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COSA È INCLUSO — same 2-col list as the tailor-made page, then the booking CTA */}
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

      {/* GALLERY — boats only */}
      <section className="section section-alt charter-boat-gallery">
        <div className="section-inner">
          <header className="charter-section-head" data-reveal>
            <div className="eyebrow">
              {lang === "it" ? "Le nostre barche" : "Our boats"}
            </div>
            <h2 className="section-title">
              {lang === "it" ? "Tre imbarcazioni, " : "Three vessels, "}
              <span className="accent">
                {lang === "it" ? "un'unica promessa." : "one promise."}
              </span>
            </h2>
          </header>

          <div className="charter-boat-cards">
            {fleet.map((b) => {
              const c = lang === "it" ? b.it : b.en;
              return (
                <Link key={b.slug} href={path(`/fleet/${b.slug}`)} className="charter-boat-card" data-reveal>
                  <div className="charter-boat-card-img">
                    <BoatCarousel images={b.gallery} alt={c.name} />
                  </div>
                  <div className="charter-boat-card-body">
                    <h3>{c.name}</h3>
                    <div className="charter-boat-card-specs">
                      {b.specs.length} · {typeof b.specs.capacityDay === "string" ? b.specs.capacityDay : b.specs.capacityDay[lang]}
                    </div>
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
