"use client";

import Link from "next/link";
import PageShell from "../../components/PageShell";
import BoatCarousel from "../../components/BoatCarousel";
import { useLang } from "../../i18n/LanguageProvider";
import { fleet } from "../../data/fleet";

// TODO(client): FareHarbor booking link not provided yet — swap in the real URL.
const FAREHARBOR_URL = "#";

// TODO(client): placeholder hero — the brief asks for people (dressed) on board,
// conveying a transfer. Replace with the client's photo when it arrives.
const HERO_IMAGE = "/tours/capri-amalfi.jpg";

export default function CharterPage() {
  const { lang, path } = useLang();

  // Content adapted from the old site's Transfers page (capriyachtcharter.com/transfers)
  // — to be confirmed by the client.
  const destinations = ["Capri", "Napoli", "Sorrento", "Positano", "Amalfi", "Ravello", "Salerno", "Ischia", "Roma"];

  const modes = [
    {
      it: {
        h: "Solo barca",
        p: "Da porto a porto, a bordo di uno yacht privato con capitano. Il modo più rapido ed esclusivo per spostarsi tra le isole e la costa, anche di notte.",
      },
      en: {
        h: "Boat only",
        p: "Port to port, aboard a private yacht with captain. The fastest, most exclusive way to move between the islands and the coast, overnight too.",
      },
    },
    {
      it: {
        h: "Barca + auto · Top Service",
        p: "Dall'hotel all'aeroporto, o viceversa, senza pensieri: transfer in barca più auto privata, con assistenza e facchinaggio inclusi.",
      },
      en: {
        h: "Boat + car · Top Service",
        p: "From your hotel to the airport, or the other way round, worry-free: boat transfer plus private car, with assistance and porterage included.",
      },
    },
  ];

  const howItWorks = [
    {
      it: "Indicaci partenza e destinazione, data e orario.",
      en: "Tell us departure and destination, date and time.",
    },
    {
      it: "Dicci quante persone siete e quanti bagagli avete.",
      en: "Let us know how many guests and how much luggage.",
    },
    {
      it: "Per il Top Service, aggiungi il tuo hotel e il numero di volo o treno.",
      en: "For the Top Service, add your hotel and flight or train number.",
    },
    {
      it: "Prenoti e il capitano ti aspetta al molo all'orario concordato.",
      en: "Book, and your captain meets you at the pier at the agreed time.",
    },
  ];

  return (
    <PageShell>
      {/* HERO — photo + navy veil, copy from the 01/10 charter header */}
      <section
        className="page-hero charter-hero-navy charter-hero-photo"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="page-hero-inner">
          <div className="eyebrow">
            {lang === "it" ? "Noleggio & transfer" : "Hire & transfer"}
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
                ? "Transfer in barca, anche notturni, verso tutte le località turistiche del Golfo di Napoli e della Costiera Amalfitana. Un modo esclusivo ed efficiente per spostarti, comodo e veloce."
                : "Boat transfers, overnight too, to every resort in the Gulf of Naples and along the Amalfi Coast. An exclusive, efficient way to travel, comfortable and fast."}
            </p>
          </header>

          <ul className="charter-hire-destinations" data-reveal>
            {destinations.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* DUE MODALITÀ — boat only / boat + car */}
      <section className="section section-alt charter-hire-modes">
        <div className="section-inner">
          <div className="charter-hire-modes-grid">
            {modes.map((m) => {
              const c = lang === "it" ? m.it : m.en;
              return (
                <article key={m.it.h} className="charter-hire-mode" data-reveal>
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COME FUNZIONA — steps + FareHarbor CTA */}
      <section className="section charter-hire-how">
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

          <ul className="charter-hire-list" data-reveal>
            {howItWorks.map((item) => (
              <li key={item.it}>
                <span className="charter-hire-bullet" aria-hidden />
                <span>{lang === "it" ? item.it : item.en}</span>
              </li>
            ))}
          </ul>

          <div className="charter-included-cta" data-reveal>
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
