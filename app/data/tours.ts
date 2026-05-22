export type TourCategory = "daily" | "transfer" | "cruise";

export type TourContent = {
  title: string;
  meta: string;
  short: string;
  long: string;
  itinerary: string[];
  highlights: string[];
};

export type Tour = {
  slug: string;
  legacyId: string;
  category: TourCategory;
  hours: string;
  priceFrom: string;
  tag?: "popular" | "value" | "bespoke";
  image: string;
  boats: string[];
  it: TourContent;
  en: TourContent;
};

const included = {
  it: ["Equipaggio", "Carburante", "IVA", "Snack & soft drink a bordo"],
  en: ["Crew", "Fuel", "VAT", "Snacks & soft drinks on board"],
};

const notIncluded = {
  it: [
    "Pranzo",
    "Alcolici",
    "Ingresso alla Grotta Azzurra",
    "Extra non indicati",
  ],
  en: ["Lunch", "Alcohol", "Blue Grotto entrance", "Extras not listed"],
};

export const includedDefault = included;
export const notIncludedDefault = notIncluded;

export const tours: Tour[] = [
  {
    slug: "giro-isola",
    legacyId: "tour-island",
    category: "daily",
    hours: "4h",
    priceFrom: "€480",
    tag: "popular",
    image: "/tours/island-tour.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Giro dell'Isola di Capri",
      meta: "Mezza Giornata · 4 ore",
      short:
        "La circumnavigazione iconica. Faraglioni, Grotta Bianca, Grotta Verde, una lunga sosta in acque turchesi.",
      long: "Imbarco al porto turistico di Capri alle 09:30 o 14:00 circa. Giro completo dell'isola con visita delle grotte e soste bagno nelle calette più suggestive. Rientro previsto alle 13:30 o 18:00.",
      itinerary: [
        "Imbarco al porto turistico di Capri (09:30 o 14:00)",
        "Visita Grotta Azzurra (ingresso non incluso)",
        "Grotta del Cuore, Faro di Punta Carena",
        "Grotta Verde, Baia di Marina Piccola",
        "Faraglioni — sosta fotografica",
        "Arco Naturale, Grotta Bianca, Salto di Tiberio",
        "Soste bagno nelle calette (Cala del Rio, Marmolata, Ventroso, Matermania)",
        "Rientro previsto: 13:30 / 18:00",
      ],
      highlights: [
        "Faraglioni di Capri",
        "Grotta Azzurra",
        "3 soste bagno",
        "Snorkeling incluso",
      ],
    },
    en: {
      title: "Capri Island Tour",
      meta: "Half Day · 4 Hours",
      short:
        "The iconic circumnavigation. Faraglioni, Grotta Bianca, Grotta Verde, and a long swim in turquoise water.",
      long: "Boarding at Capri Marina around 09:30 or 14:00. Full island loop with grotto visits and swim stops in the most striking coves. Expected return 13:30 or 18:00.",
      itinerary: [
        "Boarding at Capri Marina (09:30 or 14:00)",
        "Blue Grotto visit (entrance not included)",
        "Grotta del Cuore, Punta Carena lighthouse",
        "Green Grotto, Marina Piccola Bay",
        "Faraglioni — photo stop",
        "Natural Arch, White Grotto, Tiberius's Leap",
        "Swim stops at the coves (Cala del Rio, Marmolata, Ventroso, Matermania)",
        "Expected return: 13:30 / 18:00",
      ],
      highlights: ["Capri's Faraglioni", "Blue Grotto", "3 swim stops", "Snorkeling included"],
    },
  },
  {
    slug: "grotta-azzurra",
    legacyId: "tour-blue-grotto",
    category: "daily",
    hours: "3h",
    priceFrom: "€360",
    image: "/tours/blue-grotto.jpg",
    boats: ["primatist-g50", "sarima-39"],
    it: {
      title: "Tour della Grotta Azzurra",
      meta: "Mattina · 3 ore",
      short:
        "Solo Grotta Azzurra, di prima mattina, con accesso privato sul barchino a remi.",
      long: "Un itinerario focalizzato sulla Grotta Azzurra al mattino presto, quando la luce è perfetta e l'affluenza minima. Sbarco sul barchino a remi per l'ingresso alla grotta.",
      itinerary: [
        "Imbarco al porto di Capri (early morning)",
        "Navigazione verso la Grotta Azzurra",
        "Trasbordo su barchino a remi (ingresso non incluso)",
        "Visita esterna delle grotte minori",
        "Sosta bagno in caletta tranquilla",
        "Rientro al porto di Capri",
      ],
      highlights: ["Accesso Grotta Azzurra", "Tour mattutino", "Poca affluenza", "Sosta bagno"],
    },
    en: {
      title: "Blue Grotto Tour",
      meta: "Morning · 3 Hours",
      short:
        "A focused early-morning route to the Grotta Azzurra with private rowboat access.",
      long: "An early-morning tour focused on the Blue Grotto when the light is perfect and crowds are minimal. Transfer to a rowboat for grotto entrance.",
      itinerary: [
        "Boarding at Capri port (early morning)",
        "Navigation toward the Blue Grotto",
        "Rowboat transfer (entrance not included)",
        "External visit of minor grottoes",
        "Swim stop at a quiet cove",
        "Return to Capri port",
      ],
      highlights: ["Blue Grotto access", "Early morning slot", "Minimal crowds", "Swim stop"],
    },
  },
  {
    slug: "capri-costiera-amalfitana",
    legacyId: "tour-full-day",
    category: "daily",
    hours: "8h",
    priceFrom: "€890",
    tag: "value",
    image: "/tours/full-day.jpg",
    boats: ["primatist-g65", "primatist-g50"],
    it: {
      title: "Capri & Costiera Amalfitana",
      meta: "Giornata Intera · 8 ore",
      short:
        "L'intera costa: Capri, Positano, i borghi di Amalfi. Pranzo a bordo o in una caletta nascosta.",
      long: "Imbarco al porto turistico di Capri alle 10:00. Navigazione per Amalfi con sosta bagno a Li Galli, sbarco ad Amalfi e Positano per visita e shopping. Pranzo opzionale sul mare a Nerano. Rientro alle 18:00 dopo il giro dell'isola di Capri.",
      itinerary: [
        "Imbarco al porto di Capri (10:00)",
        "Navigazione verso Amalfi — sosta bagno a Li Galli",
        "Sbarco ad Amalfi: visita e shopping",
        "Navigazione verso Positano: visita e shopping",
        "Pranzo opzionale a Nerano (non incluso)",
        "Giro dell'isola di Capri e visita grotte",
        "Sosta fotografica ai Faraglioni",
        "Rientro previsto alle 18:00",
      ],
      highlights: [
        "Amalfi + Positano",
        "Giro completo Capri",
        "Sosta a Li Galli",
        "Pranzo opzionale sul mare",
      ],
    },
    en: {
      title: "Capri & Amalfi Coast",
      meta: "Full Day · 8 Hours",
      short:
        "The complete coast: Capri, Positano, Amalfi villages. Lunch on board or in a hidden harbour.",
      long: "Boarding at Capri Marina at 10:00. Navigation toward Amalfi with a swim stop at Li Galli, landing in Amalfi and Positano for visits and shopping. Optional seaside lunch in Nerano. Return at 18:00 after the Capri island loop.",
      itinerary: [
        "Boarding at Capri port (10:00)",
        "Navigation to Amalfi — swim stop at Li Galli",
        "Land in Amalfi: visit and shopping",
        "Navigation to Positano: visit and shopping",
        "Optional lunch in Nerano (not included)",
        "Capri island loop and grotto visits",
        "Photo stop at the Faraglioni",
        "Expected return at 18:00",
      ],
      highlights: ["Amalfi + Positano", "Full Capri loop", "Li Galli stop", "Optional seaside lunch"],
    },
  },
  {
    slug: "capri-positano",
    legacyId: "tour-capri-positano",
    category: "daily",
    hours: "8h",
    priceFrom: "€750",
    image: "/tours/full-day.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Capri & Positano",
      meta: "Giornata Intera · 8 ore",
      short:
        "La giornata più richiesta: circumnavigazione di Capri al mattino, pomeriggio a Positano.",
      long: "Imbarco alle 10:00 al porto di Capri. Navigazione per Positano con sosta bagno a Li Galli, sbarco a Positano per visita e shopping opzionali. Giro dell'isola di Capri con visita delle grotte. Rientro alle 18:00.",
      itinerary: [
        "Imbarco al porto di Capri (10:00)",
        "Navigazione verso Positano — sosta bagno a Li Galli",
        "Sbarco a Positano: visita e shopping (opzionale)",
        "Pranzo opzionale a Nerano (non incluso)",
        "Giro dell'isola di Capri e visita grotte",
        "Sosta fotografica ai Faraglioni",
        "Rientro previsto alle 18:00",
      ],
      highlights: ["Positano dal mare", "Sosta a Li Galli", "Giro Capri completo", "Pranzo opzionale"],
    },
    en: {
      title: "Capri & Positano",
      meta: "Full Day · 8 Hours",
      short:
        "Our most requested day: morning Capri loop, afternoon ashore in Positano.",
      long: "Boarding at 10:00 from Capri port. Navigation to Positano with a swim stop at Li Galli, landing in Positano for optional visit and shopping. Capri island loop with grotto visits. Return at 18:00.",
      itinerary: [
        "Boarding at Capri port (10:00)",
        "Navigation to Positano — swim stop at Li Galli",
        "Land in Positano: visit and shopping (optional)",
        "Optional lunch in Nerano (not included)",
        "Capri island loop and grotto visits",
        "Photo stop at the Faraglioni",
        "Expected return at 18:00",
      ],
      highlights: ["Positano by sea", "Li Galli stop", "Full Capri loop", "Optional lunch"],
    },
  },
  {
    slug: "capri-ischia",
    legacyId: "tour-capri-ischia",
    category: "daily",
    hours: "8h",
    priceFrom: "€820",
    image: "/cruises/ischia.webp",
    boats: ["primatist-g65", "primatist-g50"],
    it: {
      title: "Capri & Ischia",
      meta: "Giornata Intera · 8 ore",
      short:
        "Due isole, due anime: Capri eleganza e Ischia natura vulcanica.",
      long: "Imbarco al porto di Capri alle 10:00. Giro dell'isola di Capri con visita delle grotte e sosta bagno, navigazione per Ischia, giro dell'isola per ammirare le bellezze dell'isola vulcanica con vista del Castello Aragonese. Eventuale sbarco a Sant'Angelo. Rientro alle 18:00.",
      itinerary: [
        "Imbarco al porto di Capri (10:00)",
        "Giro dell'isola di Capri e visita grotte",
        "Sosta bagno",
        "Navigazione verso Ischia",
        "Giro dell'isola vulcanica · Castello Aragonese",
        "Eventuale sbarco a Sant'Angelo",
        "Pranzo opzionale sul mare (non incluso)",
        "Rientro previsto alle 18:00",
      ],
      highlights: ["Due isole", "Castello Aragonese", "Sant'Angelo", "Giro Capri completo"],
    },
    en: {
      title: "Capri & Ischia",
      meta: "Full Day · 8 Hours",
      short:
        "Two islands, two souls: Capri's elegance and Ischia's volcanic nature.",
      long: "Boarding at Capri port at 10:00. Capri island loop with grotto visits and swim stop, then sail to Ischia for a full loop of the volcanic island with views of the Aragonese Castle. Optional stop in Sant'Angelo. Return at 18:00.",
      itinerary: [
        "Boarding at Capri port (10:00)",
        "Capri island loop and grotto visits",
        "Swim stop",
        "Navigation to Ischia",
        "Volcanic island loop · Aragonese Castle",
        "Optional stop in Sant'Angelo",
        "Optional seaside lunch (not included)",
        "Expected return at 18:00",
      ],
      highlights: ["Two islands", "Aragonese Castle", "Sant'Angelo", "Full Capri loop"],
    },
  },
  {
    slug: "ischia-procida",
    legacyId: "tour-ischia-procida",
    category: "daily",
    hours: "8h",
    priceFrom: "€820",
    image: "/cruises/procida.jpg",
    boats: ["primatist-g65", "primatist-g50"],
    it: {
      title: "Ischia & Procida",
      meta: "Giornata Intera · 8 ore",
      short:
        "Le due isole del Golfo meno battute — natura vulcanica e Corricella colorata.",
      long: "Imbarco al porto di Capri alle 10:00. Navigazione per Ischia, sosta bagno, giro dell'isola, eventuale sbarco a Sant'Angelo. Rotta per Procida per ammirare dal mare la Corricella e la Chiaiolella, giro dell'isola con sosta bagno. Rientro alle 18:00.",
      itinerary: [
        "Imbarco al porto di Capri (10:00)",
        "Navigazione verso Ischia · sosta bagno",
        "Giro dell'isola vulcanica · Sant'Angelo",
        "Pranzo opzionale sul mare (non incluso)",
        "Navigazione verso Procida",
        "Corricella e Chiaiolella dal mare",
        "Giro dell'isola con sosta bagno",
        "Rientro previsto alle 18:00",
      ],
      highlights: ["Procida Corricella", "Ischia vulcanica", "Due isole", "2 soste bagno"],
    },
    en: {
      title: "Ischia & Procida",
      meta: "Full Day · 8 Hours",
      short:
        "The Gulf's two quieter islands — volcanic nature and colorful Corricella.",
      long: "Boarding at Capri port at 10:00. Sail to Ischia, swim stop, island loop, optional stop in Sant'Angelo. Course to Procida to admire the iconic Corricella and Chiaiolella from the sea, island loop with swim stop. Return at 18:00.",
      itinerary: [
        "Boarding at Capri port (10:00)",
        "Sail to Ischia · swim stop",
        "Volcanic island loop · Sant'Angelo",
        "Optional seaside lunch (not included)",
        "Sail to Procida",
        "Corricella and Chiaiolella from the sea",
        "Island loop and swim stop",
        "Expected return at 18:00",
      ],
      highlights: ["Procida Corricella", "Volcanic Ischia", "Two islands", "2 swim stops"],
    },
  },
  {
    slug: "capri-sorrento",
    legacyId: "tour-capri-sorrento",
    category: "daily",
    hours: "8h",
    priceFrom: "€780",
    image: "/cruises/capri-tour.webp",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Capri & Sorrento",
      meta: "Giornata Intera · 8 ore",
      short:
        "Costiera Sorrentina dal mare con sbarco a Sorrento per shopping e visita.",
      long: "Imbarco al porto di Capri alle 10:00. Navigazione lungo la Costiera Sorrentina con vista dal mare di Massa Lubrense e dei Bagni della Regina Giovanna. Sbarco a Sorrento per visita e shopping opzionali. Giro dell'isola di Capri con visita delle grotte e soste bagno. Rientro alle 18:00.",
      itinerary: [
        "Imbarco al porto di Capri (10:00)",
        "Costiera Sorrentina · Massa Lubrense, Bagni Regina Giovanna",
        "Sbarco a Sorrento: visita e shopping (opzionale)",
        "Giro dell'isola di Capri e visita grotte",
        "Sosta fotografica ai Faraglioni",
        "Soste bagno nelle calette",
        "Rientro previsto alle 18:00",
      ],
      highlights: ["Costiera Sorrentina", "Sorrento centro", "Giro Capri", "Bagni Regina Giovanna"],
    },
    en: {
      title: "Capri & Sorrento",
      meta: "Full Day · 8 Hours",
      short:
        "The Sorrento Coast from the sea with a landing in Sorrento for visit and shopping.",
      long: "Boarding at Capri port at 10:00. Sail along the Sorrento Coast with sea-view of Massa Lubrense and the Bagni della Regina Giovanna. Landing in Sorrento for optional visit and shopping. Capri island loop with grotto visits and swim stops. Return at 18:00.",
      itinerary: [
        "Boarding at Capri port (10:00)",
        "Sorrento Coast · Massa Lubrense, Regina Giovanna Baths",
        "Land in Sorrento: visit and shopping (optional)",
        "Capri island loop and grotto visits",
        "Photo stop at the Faraglioni",
        "Swim stops at the coves",
        "Expected return at 18:00",
      ],
      highlights: ["Sorrento Coast", "Sorrento town", "Capri loop", "Regina Giovanna Baths"],
    },
  },
  {
    slug: "su-misura",
    legacyId: "tour-custom",
    category: "daily",
    hours: "Libera",
    priceFrom: "Su Richiesta",
    tag: "bespoke",
    image: "/tours/custom.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Itinerario Su Misura",
      meta: "Su Misura · Durata Libera",
      short:
        "Sorrento, Ischia, Procida — o un itinerario disegnato interamente con te lungo il Golfo.",
      long: "Costruiamo insieme la giornata perfetta: orari, tappe, soste bagno, eventuali pranzi. Il capitano resta a tua disposizione per consigli e modifiche in tempo reale.",
      itinerary: [
        "Briefing iniziale via WhatsApp o telefono",
        "Proposta itinerario personalizzato",
        "Imbarco all'orario concordato",
        "Tappe e soste scelte da te",
        "Flessibilità totale a bordo",
        "Rientro all'orario concordato",
      ],
      highlights: ["100% personalizzato", "Orari liberi", "Tappe a scelta", "Consigli del capitano"],
    },
    en: {
      title: "Bespoke Itinerary",
      meta: "Tailored · Any Length",
      short:
        "Sorrento, Ischia, Procida — or a bespoke itinerary across the Gulf and its islands.",
      long: "We build the perfect day with you: schedule, stops, swim breaks, lunches. The captain remains available for advice and real-time adjustments.",
      itinerary: [
        "Initial briefing via WhatsApp or phone",
        "Custom itinerary proposal",
        "Boarding at agreed time",
        "Stops chosen by you",
        "Full on-board flexibility",
        "Return at agreed time",
      ],
      highlights: ["100% personalized", "Free schedule", "Your stops", "Captain's advice"],
    },
  },
];

export const toursBySlug = Object.fromEntries(tours.map((t) => [t.slug, t]));
export const toursByLegacyId = Object.fromEntries(tours.map((t) => [t.legacyId, t]));

export const transferRoutes = [
  { from: "Capri", to: "Napoli", duration: "45'", v65: 3600, v55: 2350, s38: 1350 },
  { from: "Capri", to: "Sorrento", duration: "25'", v65: 2000, v55: 1300, s38: 900 },
  { from: "Capri", to: "Positano", duration: "30'", v65: 2600, v55: 1700, s38: 1100 },
  { from: "Capri", to: "Amalfi", duration: "45'", v65: 3600, v55: 2350, s38: 1350 },
  { from: "Capri", to: "Salerno", duration: "70'", v65: 5000, v55: 3250, s38: 1900 },
  { from: "Capri", to: "Ischia", duration: "50'", v65: 4000, v55: 2600, s38: 1500 },
  { from: "Capri", to: "Procida", duration: "50'", v65: 4000, v55: 2600, s38: 1500 },
  { from: "Capri", to: "Nerano", duration: "15'", v65: 1350, v55: 950, s38: 600 },
  { from: "Capri", to: "Castellammare", duration: "40'", v65: 3600, v55: 2350, s38: 1350 },
  { from: "Capri", to: "Praiano", duration: "35'", v65: 3100, v55: 2000, s38: 1200 },
];
