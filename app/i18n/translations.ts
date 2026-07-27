import contentOverrides from "../data/content.json";

export type Lang = "it" | "en";

/**
 * `base` is the typed anchor + safe fallback. The LIVE, client-editable copy lives in
 * app/data/content.json (edited via the /admin chat) and is merged over `base` below —
 * so published edits show on the site while the strict types and a working fallback
 * (if content.json is ever missing/malformed) stay intact.
 */
const base = {
  it: {
    nav: {
      home: "Home",
      experiences: "Tour",
      fleet: "Flotta",
      charter: "Noleggio",
      story: "Storia",
      contact: "Contatti",
      whatsapp: "Contattaci",
      concierge: "Contattaci",
      whatsappLong: "Contattaci su WhatsApp",
    },
    hero: {
      pill: "In mare dal 2002",
      titleLine1: "Il mare di Capri,",
      titleAccent: "come dovrebbe essere.",
      ctaPrimary: "Scopri i Tour",
      ctaSecondary: "Contattaci",
      scroll: "Scorri",
    },
    tours: {
      eyebrow: "Tour ed Escursioni",
      title: "Le Esperienze",
      titleAccent: "in mare",
      desc: "Quattro itinerari curati nel dettaglio, ognuno interamente privato. Dalla circumnavigazione iconica di Capri alle isole del Golfo — scegli la giornata che hai in mente, o disegna la tua.",
      from: "A partire da",
      book: "Prenota Ora",
      inquire: "Richiedi Preventivo",
      tags: { popular: "Più Richiesto", value: "Più Completo", bespoke: "Su Misura" },
      list: [
        {
          id: "tour-capri-full-day",
          tag: "popular" as const,
          meta: "Giornata Intera · 7 ore",
          title: "Giro di Capri",
          desc: "La giornata completa a Capri: giro dell'isola, tutte le grotte, soste bagno estese.",
          price: "1.700 €",
        },
        {
          id: "tour-full-day",
          tag: null,
          meta: "Giornata Intera · 8 ore",
          title: "Capri & Costiera",
          desc: "Capri, Positano, i borghi di Amalfi. Pranzo a bordo o in una caletta nascosta.",
          price: "2.000 €",
        },
        {
          id: "tour-capri-sorrento",
          tag: null,
          meta: "Giornata Intera · 8 ore",
          title: "Capri & Penisola",
          desc: "Capri e la penisola sorrentina: Bagni della Regina Giovanna, Sorrento, giro dell'isola.",
          price: "2.000 €",
        },
        {
          id: "tour-penisola-amalfitana",
          tag: "value" as const,
          meta: "Giornata Intera · 8 ore",
          title: "Costiera Amalfitana Full Day",
          desc: "Punta Campanella, Li Galli, Positano, Praiano, Fiordo di Furore, Amalfi — la costiera dal mare.",
          price: "2.000 €",
        },
      ],
    },
    beyond: {
      eyebrow: "Oltre i Tour",
      title: "Più che una",
      titleAccent: "circumnavigazione.",
      transferTitle: "Pick-up",
      transferDesc: "Puoi scegliere, laddove previsto, un pick&drop diverso dal nostro porto di partenza, che è Capri. Quando scegli il tuo tour verifica i moli disponibili per il P&D personalizzato.",
      transferCta: "Scopri il noleggio",
      skipperTitle: "Noleggio con Skipper",
      skipperDesc: "La barca è tutta tua, i nostri tour sono privati. Il nostro equipaggio sarà a tua completa disposizione per tutta la durata del tour.",
      skipperCta: "Richiedi un Preventivo",
    },
    fleet: {
      eyebrow: "La Flotta",
      title: "Tre imbarcazioni,",
      titleAccent: "una sola promessa.",
      desc: "Yacht eleganti e raffinati, mantenuti privatamente, dotati di ogni comfort. A bordo capitani che navigano queste acque dall'infanzia ed equipaggi formati nell'ospitalità di alto livello.",
      explore: "Esplora la Galleria",
      lengthLabel: "m",
      capacityPrefix: "Fino a",
      guests: "ospiti",
      boats: [
        {
          id: "primatist-g65",
          name: "TENAREZE IV",
          model: "Princess v65",
          type: "Yacht di Lusso",
          length: "21 m",
          capacity: "Fino a 12 ospiti · 3 cabine",
          desc: "L'ammiraglia. Hard-top apribile, doppio solarium, plancetta poppiera, dinette e cabina armatoriale. Pensato per le giornate intere e le crociere multi-day verso Amalfi e oltre.",
        },
        {
          id: "primatist-g50",
          name: "CHITON",
          model: "Princess v55",
          type: "Sport Cruiser",
          length: "17 m",
          capacity: "Fino a 12 ospiti · 3 cabine",
          desc: "Open bridge dinamico, divano a L con tavolo, barbecue elettrico e angolo bar. 30 nodi di velocità — il giusto compromesso tra prestazioni e comfort sociale.",
        },
        {
          id: "sarima-39",
          name: "RORI",
          model: "Sarima 38",
          type: "Open Cruiser",
          length: "11 m",
          capacity: "Fino a 6 ospiti · cabina master",
          desc: "Linea sportiva, ampio solarium poppiero, fino a 35 nodi. Agile fra le calette e le grotte che le barche più grandi non raggiungono.",
        },
      ],
    },
    manifesto: {
      eyebrow: "La Promessa",
      titleLine1: "La barca è",
      titleAccent: "tua.",
      titleLine2: "La giornata è tua.",
      prose: "Tre imbarcazioni, due generazioni, oltre vent'anni sullo stesso tratto di mare. La famiglia Grassano accompagna i propri ospiti lungo la costa tirrenica dal 2002 — una giornata privata alla volta.",
      signatureName: "Francesco & Enrico Grassano",
      signatureRole: "Fondatori & Capitani",
      items: [
        {
          n: "01",
          title: "Interamente Privato",
          text: "Solo il vostro gruppo, sempre. Nessun ponte condiviso, nessun compromesso.",
        },
        {
          n: "02",
          title: "Itinerari Curati",
          text: "Pacchetti pensati con cura o giornate su misura — il timone è in mani esperte, le scelte restano vostre.",
        },
        {
          n: "03",
          title: "Comfort di Bordo",
          text: "Prosecco in ghiaccio, attrezzatura snorkeling, impianto audio, asciugamani freschi. A tutto il resto pensiamo noi.",
        },
      ],
    },
    reviews: {
      eyebrow: "Testimonianze",
      title: "La fiducia di",
      titleAccent: "migliaia di ospiti.",
      stats: [
        { value: "4.9", label: "Voto Ospiti", icon: "star" as const },
        { value: "10K+", label: "Ospiti a Bordo" },
        { value: "22", label: "Anni in Mare" },
      ],
      items: [
        {
          text: "Una giornata indimenticabile sull'acqua. La barca era impeccabile, il capitano incredibilmente preparato, l'esperienza nel complesso esclusiva. Vale ogni centesimo.",
          author: "Sarah M.",
          location: "Londra, UK",
          source: "TripAdvisor",
        },
        {
          text: "Abbiamo noleggiato barche in tutto il Mediterraneo, ma Capri Yacht Charter è di un altro livello. Professionali, eleganti, conoscono ogni caletta nascosta intorno all'isola.",
          author: "James & Emma K.",
          location: "New York, USA",
          source: "Google Reviews",
        },
        {
          text: "Il momento più bello della nostra luna di miele. Nuotare nella Grotta Azzurra, prosecco in coperta, tramonto dietro i Faraglioni. Pura magia. Grazie per averla resa perfetta.",
          author: "Marco & Lucia",
          location: "Milano, Italia",
          source: "TripAdvisor",
        },
      ],
    },
    footer: {
      cta: {
        title: "Pronti a",
        titleAccent: "salpare?",
        text: "Disponibili tutti i giorni — telefono, WhatsApp\no email, scegli tu come organizzare la tua giornata.",
        primary: "Vedi tutti i Tour",
        secondary: "Contattaci",
      },
      cols: {
        experiencesTitle: "Esperienze",
        fleetTitle: "La Flotta",
        contactTitle: "Contatti",
        hoursTitle: "Stagione & Orari",
        season: "Aprile — Ottobre, tutti i giorni",
        timetable: "Lun-Dom · 8.00 — 20.00",
        booking: "Si consiglia prenotazione 48h prima",
        services: {
          tours: "Tour organizzati",
          custom: "Tour su misura",
          cruises: "Mini crociere",
          charter: "Noleggio con skipper",
        },
      },
      bottom: "© 2026 Capri Yacht Charter · Sun & Sea S.r.l. · P.IVA IT07755820631",
      legal: { privacy: "Privacy", terms: "Termini", cookie: "Cookie" },
    },
    map: {
      eyebrow: "Su Misura",
      title: "Capri,",
      titleAccent: "a modo tuo.",
      desc: "Sfiora un punto della mappa per scoprire il luogo — oppure disegniamo insieme un itinerario tutto tuo.",
      cta: "Personalizza il Tuo Tour",
    },
    miniCruises: {
      eyebrow: "Mini Crociere",
      title: "Quando un giorno",
      titleAccent: "non basta.",
      desc: "Itinerari di più giorni vissuti a bordo. Capri, Ischia, Procida, la Costiera Amalfitana, fino a Ponza e Ventotene — cabine private, equipaggio dedicato, soste scelte da voi.",
      bullet1: "Da 2 a 7 giorni · cabine private",
      bullet2: "Chef a bordo · itinerario su misura",
      bullet3: "Tender, attrezzatura snorkeling e SUP inclusi",
      cta: "Prenota la tua crociera",
    },
  },
  en: {
    nav: {
      home: "Home",
      experiences: "Tours",
      fleet: "Fleet",
      charter: "Charter",
      story: "Story",
      contact: "Contact",
      whatsapp: "Concierge",
      concierge: "Contact our Concierge",
      whatsappLong: "Chat with us on WhatsApp",
    },
    hero: {
      pill: "On Sea Since 2002",
      titleLine1: "Your Private",
      titleAccent: "Sea Experience",
      ctaPrimary: "Discover Tours",
      ctaSecondary: "Contact Us",
      scroll: "Scroll",
    },
    tours: {
      eyebrow: "Curated Experiences",
      title: "Private Tours",
      titleAccent: "in Capri",
      desc: "Three signature experiences, each entirely private — pick a route or build your own.",
      from: "From",
      book: "Book Now",
      inquire: "Request Quote",
      tags: { popular: "Most Popular", value: "Best Value", bespoke: "Bespoke" },
      list: [
        {
          id: "tour-capri-full-day",
          tag: "popular" as const,
          meta: "Full Day · 7 Hours",
          title: "Capri Full Day",
          desc: "The complete day around Capri: full island tour, every main grotto, extended swim stops.",
          price: "€1,700",
        },
        {
          id: "tour-full-day",
          tag: null,
          meta: "Full Day · 8 Hours",
          title: "Capri & Amalfi Coast",
          desc: "Capri, Positano, Amalfi villages. Lunch on board or in a hidden cove.",
          price: "€2,000",
        },
        {
          id: "tour-capri-sorrento",
          tag: null,
          meta: "Full Day · 8 Hours",
          title: "Capri & Peninsula",
          desc: "Capri and the Sorrento peninsula: Regina Giovanna baths, Sorrento, full island tour.",
          price: "€2,000",
        },
        {
          id: "tour-penisola-amalfitana",
          tag: "value" as const,
          meta: "Full Day · 8 Hours",
          title: "Amalfi Coast Full Day",
          desc: "Punta Campanella, Li Galli, Positano, Praiano, Furore Fjord, Amalfi — the coast from the sea.",
          price: "€2,000",
        },
      ],
    },
    beyond: {
      eyebrow: "Beyond Tours",
      title: "More than a",
      titleAccent: "circumnavigation.",
      transferTitle: "Pick-up",
      transferDesc: "Where offered, you can choose a pick-up/drop-off different from our home port, Capri. When you pick your tour, check the available marinas for a custom P&D.",
      transferCta: "Discover the charter",
      skipperTitle: "Skipper Charter",
      skipperDesc: "The boat is all yours — our tours are private. Our crew is at your full service for the whole tour.",
      skipperCta: "Inquire",
    },
    fleet: {
      eyebrow: "The Fleet",
      title: "Three vessels,",
      titleAccent: "one promise.",
      desc: "Each boat is privately maintained, regularly serviced, and crewed by a captain who's known these waters since childhood. Professional crew and every comfort on board.",
      explore: "Explore the Gallery",
      lengthLabel: "m",
      capacityPrefix: "Up to",
      guests: "guests",
      boats: [
        {
          id: "primatist-g65",
          name: "TENAREZE IV",
          model: "Princess v65",
          type: "Luxury Yacht",
          length: "21 m",
          capacity: "Up to 12 guests · 3 cabins",
          desc: "The flagship. Retractable hardtop, dual solariums, stern swim platform, dinette and master cabin. Built for full-day charters and multi-day cruises down to Amalfi and beyond.",
        },
        {
          id: "primatist-g50",
          name: "CHITON",
          model: "Princess v55",
          type: "Sport Cruiser",
          length: "17 m",
          capacity: "Up to 12 guests · 3 cabins",
          desc: "Dynamic open bridge, L-shaped seating with solid table, electric BBQ and bar corner. Top speed 30 knots — the right balance of performance and social comfort.",
        },
        {
          id: "sarima-39",
          name: "RORI",
          model: "Sarima 38",
          type: "Open Cruiser",
          length: "11 m",
          capacity: "Up to 6 guests · master cabin",
          desc: "Sporty profile, wide rear solarium, top speed 35 knots. Nimble enough for the smaller coves and grottoes the larger boats can't reach.",
        },
      ],
    },
    manifesto: {
      eyebrow: "The Promise",
      titleLine1: "The boat is",
      titleAccent: "yours.",
      titleLine2: "The day is yours.",
      prose: "Three vessels, two generations, twenty years on the same stretch of sea. The Grassano family has been showing visitors the Tyrrhenian coast since 2002 — one private day at a time.",
      signatureName: "Francesco & Enrico Grassano",
      signatureRole: "Founders & Captains",
      items: [
        {
          n: "01",
          title: "Entirely Private",
          text: "Your group only. Always. No strangers, no shared decks.",
        },
        {
          n: "02",
          title: "Curated Routes",
          text: "Predefined itineraries or fully custom — always with a professional skipper at the helm.",
        },
        {
          n: "03",
          title: "Premium Comfort",
          text: "Prosecco on ice, snorkeling kit, sound system, fresh towels. Everything taken care of.",
        },
      ],
    },
    reviews: {
      eyebrow: "Testimonials",
      title: "Trusted by",
      titleAccent: "Thousands",
      stats: [
        { value: "4.9", label: "Guest Rating", icon: "star" as const },
        { value: "10K+", label: "Guests Aboard" },
        { value: "22", label: "Years at Sea" },
      ],
      items: [
        {
          text: "An unforgettable day on the water. The boat was immaculate, the captain incredibly knowledgeable, and the entire experience felt truly exclusive. Worth every cent.",
          author: "Sarah M.",
          location: "London, UK",
          source: "TripAdvisor",
        },
        {
          text: "We've chartered boats all over the Mediterranean, but Capri Yacht Charter stands out. Professional, elegant, and they know every hidden cove around the island.",
          author: "James & Emma K.",
          location: "New York, USA",
          source: "Google Reviews",
        },
        {
          text: "The highlight of our honeymoon. Swimming in the Blue Grotto, prosecco on deck, sunset behind the Faraglioni. Pure magic. Thank you for making it perfect.",
          author: "Marco & Lucia",
          location: "Milano, Italia",
          source: "TripAdvisor",
        },
      ],
    },
    footer: {
      cta: {
        title: "Ready to",
        titleAccent: "Explore?",
        text: "Discover our private tours and book your experience\non the Mediterranean.",
        primary: "View All Tours",
        secondary: "Contact Us",
      },
      cols: {
        experiencesTitle: "Experiences",
        fleetTitle: "The Fleet",
        contactTitle: "Contact",
        hoursTitle: "Hours & Season",
        season: "Apr — Oct, daily",
        timetable: "Mon-Sun · 8:00 — 20:00",
        booking: "Booking 48h in advance",
        services: {
          tours: "Curated tours",
          custom: "Bespoke tours",
          cruises: "Mini cruises",
          charter: "Skipper charter",
        },
      },
      bottom: "© 2026 Capri Yacht Charter · Sun & Sea S.r.l. · VAT IT07755820631",
      legal: { privacy: "Privacy", terms: "Terms", cookie: "Cookie" },
    },
    map: {
      eyebrow: "Bespoke",
      title: "Discover Capri",
      titleAccent: "in your way.",
      desc: "Click any spot on the map to see the place — or design a route entirely your own.",
      cta: "Personalize Your Tour",
    },
    miniCruises: {
      eyebrow: "Mini Cruises",
      title: "Beyond the",
      titleAccent: "Day Tour.",
      desc: "Multi-day cruises aboard — Capri, Ischia, Procida, the Amalfi Coast, all the way to Ponza and Ventotene. Private cabins, dedicated crew, stops chosen by you.",
      bullet1: "2–7 days · Private cabins",
      bullet2: "Onboard chef · Tailored itinerary",
      bullet3: "Tender & snorkel gear included",
      cta: "Book your cruise",
    },
  },
} as const;

/** Deep-merge content.json's copy over `base` (objects recurse; arrays replaced whole). */
function mergeCopy<T>(target: T, src: unknown): T {
  if (src == null) return target;
  if (Array.isArray(src) || typeof src !== "object" || typeof target !== "object" || target == null) {
    return src as T;
  }
  const out: Record<string, unknown> = { ...(target as Record<string, unknown>) };
  for (const [k, v] of Object.entries(src as Record<string, unknown>)) {
    out[k] = mergeCopy((target as Record<string, unknown>)[k], v);
  }
  return out as T;
}

const bundledHome = (contentOverrides as Array<{ id: string; it?: unknown; en?: unknown }>).find(
  (e) => e.id === "home",
);

export type Translations = typeof base.it;

/**
 * Resolve the it/en copy by merging an override (the LIVE content.json fetched at
 * request time) over `base`. With no override it uses the build-time bundled copy —
 * so both static fallback and live serving go through the same merge.
 */
export function resolveTranslations(override?: { it?: unknown; en?: unknown }): {
  it: Translations;
  en: Translations;
} {
  const src = override ?? bundledHome;
  // it/en share a shape but `as const` gives them divergent string literals (eg
  // "Tour" vs "Tours"), so route through unknown — consumers still get Translations.
  return {
    it: mergeCopy(base.it, src?.it),
    en: mergeCopy(base.en, src?.en),
  } as unknown as { it: Translations; en: Translations };
}

export const translations = resolveTranslations();
