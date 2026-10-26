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

  // How the short-term hire / transfer works. DRAFT copy — to be confirmed by the client.
  const howItWorks = [
    {
      it: "Scegli la barca e indicaci data, porto di partenza e destinazione.",
      en: "Pick the boat and tell us the date, departure port and destination.",
    },
    {
      it: "Prenoti e paghi online in pochi passaggi.",
      en: "Book and pay online in a few steps.",
    },
    {
      it: "Il capitano ti aspetta al molo all'orario concordato, bagagli compresi.",
      en: "Your captain meets you at the pier at the agreed time, luggage included.",
    },
    {
      it: "Navighi in privato fino a destinazione: nessuna attesa, nessuna folla.",
      en: "Sail privately to your destination: no waiting, no crowds.",
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

      {/* COME FUNZIONA — short bullet list + FareHarbor CTA */}
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
