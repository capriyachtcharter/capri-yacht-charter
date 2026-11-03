"use client";

import Image from "next/image";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import PhotoGrid from "../../components/PhotoGrid";
import { cmsField, useLang } from "../../i18n/LanguageProvider";
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
  const { lang, path, t, f, boatByLegacyId } = useLang();
  const p = t.pages.charter;
  // Live boats (published edits show without a rebuild), in fleet order.
  const fleet = Object.values(boatByLegacyId);

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
          <div className="eyebrow" {...f("pages.charter.eyebrow")}>
            {p.eyebrow}
          </div>
          <h1 className="page-hero-title">
            <span {...f("pages.charter.title")}>{p.title}</span>
            <br />
            <span className="accent-italic" {...f("pages.charter.titleAccent")}>
              {p.titleAccent}
            </span>
          </h1>
          <p className="page-hero-desc" {...f("pages.charter.desc", "multiline")}>
            {p.desc}
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
              <div className="eyebrow" {...f("pages.charter.serviceEyebrow")}>{p.serviceEyebrow}</div>
              <h2 className="section-title hire-intro-title">
                <span {...f("pages.charter.serviceTitle")}>{p.serviceTitle}</span>{" "}
                <span className="accent" {...f("pages.charter.serviceTitleAccent")}>{p.serviceTitleAccent}</span>
              </h2>
              <p className="hire-intro-text" {...f("pages.charter.serviceText1", "multiline")}>
                {p.serviceText1}
              </p>
              <p className="hire-intro-text" {...f("pages.charter.serviceText2", "multiline")}>
                {p.serviceText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA — same zig-zag timeline as the Tour su misura page */}
      <section className="section charter-howto">
        <div className="section-inner">
          <header className="charter-section-head" data-reveal>
            <div className="eyebrow" {...f("pages.charter.howEyebrow")}>
              {p.howEyebrow}
            </div>
            <h2 className="section-title">
              <span {...f("pages.charter.howTitle")}>{p.howTitle}</span>{" "}
              <span className="accent" {...f("pages.charter.howTitleAccent")}>
                {p.howTitleAccent}
              </span>
            </h2>
          </header>

          <ol className="charter-timeline">
            {steps.map((s, i) => {
              const c = p.steps[i] ?? (lang === "it" ? s.it : s.en);
              return (
                <li
                  key={s.n}
                  className={`charter-timeline-row${i % 2 === 1 ? " is-reverse" : ""}`}
                  data-reveal={i % 2 === 1 ? "left" : ""}
                >
                  <div className="charter-timeline-num"><span>{s.n}</span></div>
                  <div className="charter-timeline-card">
                    <h3 {...f(`pages.charter.steps.${i}.h`)}>{c.h}</h3>
                    <p {...f(`pages.charter.steps.${i}.p`, "multiline")}>{c.p}</p>
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
            <div className="eyebrow" {...f("pages.charter.gulfEyebrow")}>
              {p.gulfEyebrow}
            </div>
            <h2 className="section-title">
              <span {...f("pages.charter.gulfTitle")}>{p.gulfTitle}</span>{" "}
              <span className="accent" {...f("pages.charter.gulfTitleAccent")}>
                {p.gulfTitleAccent}
              </span>
            </h2>
            <p className="section-desc" {...f("pages.charter.gulfDesc", "multiline")}>
              {p.gulfDesc}
            </p>
          </div>

          {/* Departure/destination towns: one strip as wide as the photo grid below, scrolling
              left → right in a continuous loop (list repeated so the loop never shows a gap). */}
          <div className="charter-hire-destinations" data-reveal>
            <div className="charter-hire-destinations-track">
              {Array.from({ length: 6 }, () => destinations).flat().map((d, i) => (
                <span
                  key={`${d}-${i}`}
                  className="charter-hire-dest"
                  aria-hidden={i >= destinations.length ? true : undefined}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <PhotoGrid photos={GALLERY.map((g) => ({ src: g.src, alt: g.alt[lang], pos: g.pos }))} />
        </div>
      </section>

      {/* COSA È INCLUSO — same 2-col list as the Tour su misura page, then the booking CTA */}
      <section className="section charter-included">
        <div className="section-inner">
          <header className="charter-section-head" data-reveal>
            <div className="eyebrow" {...f("pages.charter.includedEyebrow")}>
              {p.includedEyebrow}
            </div>
            <h2 className="section-title">
              <span {...f("pages.charter.includedTitle")}>{p.includedTitle}</span>{" "}
              <span className="accent" {...f("pages.charter.includedTitleAccent")}>
                {p.includedTitleAccent}
              </span>
            </h2>
          </header>

          <div className="charter-included-split" data-reveal>
            <div className="charter-included-col">
              <h4 {...f("pages.charter.alwaysTitle")}>{p.alwaysTitle}</h4>
              <ul>
                {p.always.map((item, i) => (
                  <li key={includedAlways[i]?.it ?? item}>
                    <Check />
                    <span {...f(`pages.charter.always.${i}`)}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="charter-included-col">
              <h4 {...f("pages.charter.requestTitle")}>{p.requestTitle}</h4>
              <ul>
                {p.request.map((item, i) => (
                  <li key={includedRequest[i]?.it ?? item}>
                    <Check />
                    <span {...f(`pages.charter.request.${i}`)}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="charter-included-cta" data-reveal>
            <p {...f("pages.charter.ctaText", "multiline")}>
              {p.ctaText}
            </p>
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener" className="btn-primary" {...f("pages.charter.book")}>
              {p.book}
            </a>
          </div>
        </div>
      </section>

      {/* SCEGLI LA BARCA — same cards as the Tour su misura page */}
      <section className="section section-alt charter-fleet">
        <div className="section-inner">
          <header className="charter-section-head" data-reveal>
            <div className="eyebrow" {...f("pages.charter.fleetEyebrow")}>
              {p.fleetEyebrow}
            </div>
            <h2 className="section-title">
              <span {...f("pages.charter.fleetTitle")}>{p.fleetTitle}</span>{" "}
              <span className="accent" {...f("pages.charter.fleetTitleAccent")}>
                {p.fleetTitleAccent}
              </span>
            </h2>
          </header>

          <div className="tour-boats-grid">
            {fleet.map((b) => {
              const c = lang === "it" ? b.it : b.en;
              const boat = `fleet:${b.slug}`;
              return (
                <Link key={b.slug} href={path(`/fleet/${b.slug}`)} className="tour-boat-card" data-reveal="left">
                  <div className="tour-boat-img" {...cmsField(boat, "cover", "image")}>
                    <img src={b.cover} alt={c.name} />
                  </div>
                  <div className="tour-boat-body">
                    <h3 {...cmsField(boat, `${lang}.name`)}>{c.name}</h3>
                    <div className="tour-boat-model" {...cmsField(boat, `${lang}.model`)}>{c.model}</div>
                    <div className="tour-boat-specs">
                      {b.specs.length} · {typeof b.specs.capacityDay === "string" ? b.specs.capacityDay : b.specs.capacityDay[lang]}
                    </div>
                    <span className="tour-boat-cta">
                      <span {...f("fleet.discover")}>{t.fleet.discover}</span>
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
