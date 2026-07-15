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
  /** Full private-charter price for each boat that runs this tour.
   * Keyed by boat legacyId. Absence = "Su richiesta". */
  pricesByBoat?: Record<string, string>;
  tag?: "popular" | "value" | "bespoke";
  image: string;       // cover used in the /tours bento grid
  imageHome?: string;  // optional override for the home "Signature experiences" card
  boats: string[];
  it: TourContent;
  en: TourContent;
};

const included = {
  it: [
    "Equipaggio",
    "Carburante",
    "IVA",
    "Aperitivo · snack",
    "Vino (1 bottiglia ogni 2 persone)",
    "Soft drink",
    "Gonfiabili, noodles, pinne e maschere",
  ],
  en: [
    "Crew",
    "Fuel",
    "VAT",
    "Aperitivo · snacks",
    "Wine (1 bottle per 2 people)",
    "Soft drinks",
    "Inflatables, noodles, snorkelling gear",
  ],
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

// Extras "su richiesta" — same list on every tour. Moto d'acqua is exclusive
// to TENAREZE IV (Princess v65); the note is surfaced in the UI.
export const extrasDefault = {
  it: [
    { label: "Moto d'acqua (solo TENAREZE IV)", price: "800 €" },
    { label: "Sea bob (tutte le barche)", price: "600 €" },
    { label: "SUP (tutte le barche)", price: "200 €" },
    { label: "Auto porto Napoli → aeroporto", price: "120 €" },
    { label: "Auto porto Napoli → stazione", price: "60 €" },
  ],
  en: [
    { label: "Jet ski (TENAREZE IV only)", price: "€800" },
    { label: "Sea bob (all boats)", price: "€600" },
    { label: "SUP (all boats)", price: "€200" },
    { label: "Car Naples port → airport", price: "€120" },
    { label: "Car Naples port → station", price: "€60" },
  ],
};

// Pick-up dagli altri porti. Prezzi per barca (V65 / V55 / Sarima 38).
export const pickupDefault = {
  it: [
    { port: "Capri", prices: "Gratuito" },
    { port: "Positano · Amalfi · Sorrento", prices: "500 € · 300 € · 200 €" },
    { port: "Ischia · Procida", prices: "700 € · 550 € · 350 €" },
  ],
  en: [
    { port: "Capri", prices: "Free" },
    { port: "Positano · Amalfi · Sorrento", prices: "€500 · €300 · €200" },
    { port: "Ischia · Procida", prices: "€700 · €550 · €350" },
  ],
};

export const includedDefault = included;
export const notIncludedDefault = notIncluded;

export const tours: Tour[] = [
  {
    slug: "giro-isola",
    legacyId: "tour-island",
    category: "daily",
    hours: "4h",
    priceFrom: "1.200 €",
    pricesByBoat: {
      "primatist-g65": "3.000 €",
      "primatist-g50": "2.200 €",
      "sarima-39": "1.200 €",
    },
    tag: "popular",
    image: "/tours/capri-island.jpg",
    imageHome: "/tours/capri-island-home.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Capri Mezza Giornata",
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
      title: "Capri Half Day",
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
    priceFrom: "1.000 €",
    pricesByBoat: {
      "primatist-g65": "2.500 €",
      "primatist-g50": "1.800 €",
      "sarima-39": "1.000 €",
    },
    image: "/tours/grotta-azzurra.jpg",
    imageHome: "/tours/grotta-azzurra-home.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Grotta Azzurra",
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
      title: "Blue Grotto",
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
    priceFrom: "2.000 €",
    pricesByBoat: {
      "primatist-g65": "5.000 €",
      "primatist-g50": "3.600 €",
      "sarima-39": "2.000 €",
    },
    tag: "value",
    image: "/tours/capri-amalfi.jpg",
    imageHome: "/tours/full-day-home.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
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
    priceFrom: "2.000 €",
    pricesByBoat: {
      "primatist-g65": "5.000 €",
      "primatist-g50": "3.600 €",
      "sarima-39": "2.000 €",
    },
    image: "/tours/capri-positano.jpg",
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
    priceFrom: "2.000 €",
    pricesByBoat: {
      "primatist-g65": "5.000 €",
      "primatist-g50": "3.600 €",
      "sarima-39": "2.000 €",
    },
    image: "/tours/capri-ischia.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
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
    priceFrom: "2.000 €",
    pricesByBoat: {
      "primatist-g65": "5.000 €",
      "primatist-g50": "3.600 €",
      "sarima-39": "2.000 €",
    },
    image: "/tours/ischia-procida.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
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
    priceFrom: "2.000 €",
    pricesByBoat: {
      "primatist-g65": "5.000 €",
      "primatist-g50": "3.600 €",
      "sarima-39": "2.000 €",
    },
    image: "/tours/capri-sorrento.jpg",
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
    slug: "capri-full-day",
    legacyId: "tour-capri-full-day",
    category: "daily",
    hours: "7h",
    priceFrom: "1.700 €",
    pricesByBoat: {
      "primatist-g65": "4.500 €",
      "primatist-g50": "3.200 €",
      "sarima-39": "1.700 €",
    },
    image: "/tours/capri-island.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Capri Full Day",
      meta: "Giornata Intera · 7 ore",
      short:
        "La giornata completa a Capri: giro dell'isola, tutte le grotte, soste bagno estese.",
      long: "Imbarco al porto turistico di Capri alle 09:30. Giro completo dell'isola con visita di tutte le grotte principali, soste bagno estese nelle calette più belle e pranzo a bordo o in ristorante convenzionato. Rientro previsto alle 16:30.",
      itinerary: [
        "Imbarco al porto turistico di Capri (09:30)",
        "Grotta Azzurra (ingresso non incluso)",
        "Grotta Verde, Faro di Punta Carena",
        "Baia di Marina Piccola · sosta bagno",
        "Faraglioni · sosta fotografica",
        "Grotta Bianca, Arco Naturale, Salto di Tiberio",
        "Pranzo a bordo o in caletta",
        "Grotta del Cuore, Cala del Rio · sosta bagno",
        "Rientro previsto: 16:30",
      ],
      highlights: [
        "Tutta l'isola in un giorno",
        "3-4 soste bagno estese",
        "Grotte principali di Capri",
        "Pranzo a bordo",
      ],
    },
    en: {
      title: "Capri Full Day",
      meta: "Full Day · 7 Hours",
      short:
        "The full day at Capri: island loop, all the main grottoes, extended swim stops.",
      long: "Boarding at Capri Marina at 09:30. Full island loop with visits to all the main grottoes, extended swim stops in the most beautiful coves and lunch on board or at a partner restaurant. Expected return at 16:30.",
      itinerary: [
        "Boarding at Capri Marina (09:30)",
        "Blue Grotto (entrance not included)",
        "Green Grotto, Punta Carena Lighthouse",
        "Marina Piccola Bay · swim stop",
        "Faraglioni · photo stop",
        "White Grotto, Natural Arch, Tiberius's Leap",
        "Lunch on board or in a cove",
        "Heart Grotto, Cala del Rio · swim stop",
        "Expected return: 16:30",
      ],
      highlights: [
        "The whole island in a day",
        "3-4 extended swim stops",
        "Capri's main grottoes",
        "Lunch on board",
      ],
    },
  },
  {
    slug: "capri-positano-mezza-giornata",
    legacyId: "tour-capri-positano-half",
    category: "daily",
    hours: "4h",
    priceFrom: "1.200 €",
    pricesByBoat: {
      "primatist-g65": "3.000 €",
      "primatist-g50": "2.200 €",
      "sarima-39": "1.200 €",
    },
    image: "/tours/capri-positano.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Capri & Positano Mezza Giornata",
      meta: "Mezza Giornata · 4 ore",
      short:
        "Positano dal mare e sosta bagno a Li Galli in mezza giornata privata.",
      long: "Imbarco al porto di Capri alle 14:00. Navigazione verso Positano con sosta fotografica ai Faraglioni e bagno all'isolotto di Li Galli. Vista dal mare della Costiera Amalfitana più iconica. Rientro alle 18:00.",
      itinerary: [
        "Imbarco al porto di Capri (14:00)",
        "Sosta fotografica ai Faraglioni",
        "Navigazione verso Positano",
        "Vista dal mare di Positano",
        "Sosta bagno a Li Galli",
        "Rientro previsto alle 18:00",
      ],
      highlights: [
        "Positano dal mare",
        "Faraglioni",
        "Sosta bagno a Li Galli",
        "Mezza giornata privata",
      ],
    },
    en: {
      title: "Capri & Positano Half Day",
      meta: "Half Day · 4 Hours",
      short:
        "Positano from the sea and a swim stop at Li Galli in a private half day.",
      long: "Boarding at Capri at 14:00. Sail to Positano with a photo stop at the Faraglioni and a swim at Li Galli islet. Sea view of the most iconic stretch of the Amalfi Coast. Return at 18:00.",
      itinerary: [
        "Boarding at Capri port (14:00)",
        "Photo stop at the Faraglioni",
        "Sail toward Positano",
        "Positano from the sea",
        "Swim stop at Li Galli",
        "Expected return at 18:00",
      ],
      highlights: [
        "Positano from the sea",
        "Faraglioni",
        "Li Galli swim stop",
        "Private half day",
      ],
    },
  },
  {
    slug: "penisola-costiera-amalfitana",
    legacyId: "tour-penisola-amalfitana",
    category: "daily",
    hours: "8h",
    priceFrom: "2.000 €",
    pricesByBoat: {
      "primatist-g65": "5.000 €",
      "primatist-g50": "3.600 €",
      "sarima-39": "2.000 €",
    },
    image: "/tours/capri-amalfi.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Penisola & Costiera Amalfitana",
      meta: "Giornata Intera · 8 ore",
      short:
        "Punta Campanella e la Costiera Amalfitana in un unico tour: Nerano, Li Galli, Positano, Amalfi.",
      long: "Partenza dal porto scelto alle 10:00. Punta Campanella e Costiera Amalfitana con vista dal mare di Nerano, Li Galli, Positano, Praiano, Fiordo di Furore, Conca dei Marini, Amalfi. Sbarco a Positano e Amalfi per visita e shopping (opzionale). Pranzo in ristorante sul mare (non incluso). Rientro alle 18:00.",
      itinerary: [
        "Partenza dal porto selezionato (10:00)",
        "Punta Campanella · Nerano · Li Galli",
        "Positano dal mare · sbarco opzionale",
        "Praiano · Fiordo di Furore",
        "Conca dei Marini · Grotta dello Smeraldo",
        "Amalfi · sbarco per shopping/pranzo",
        "Sosta bagno tra le calette",
        "Rientro previsto alle 18:00",
      ],
      highlights: [
        "Punta Campanella",
        "Li Galli",
        "Fiordo di Furore",
        "Amalfi centro",
      ],
    },
    en: {
      title: "Peninsula & Amalfi Coast",
      meta: "Full Day · 8 Hours",
      short:
        "Punta Campanella and the Amalfi Coast in one tour: Nerano, Li Galli, Positano, Amalfi.",
      long: "Departure from the selected port at 10:00. Punta Campanella and Amalfi Coast with sea views of Nerano, Li Galli, Positano, Praiano, Furore Fjord, Conca dei Marini, Amalfi. Land in Positano and Amalfi for optional visit and shopping. Lunch at a seaside restaurant (not included). Return at 18:00.",
      itinerary: [
        "Departure from selected port (10:00)",
        "Punta Campanella · Nerano · Li Galli",
        "Positano from the sea · optional landing",
        "Praiano · Furore Fjord",
        "Conca dei Marini · Emerald Grotto",
        "Amalfi · landing for shopping/lunch",
        "Swim stop in the coves",
        "Expected return at 18:00",
      ],
      highlights: [
        "Punta Campanella",
        "Li Galli",
        "Furore Fjord",
        "Amalfi town",
      ],
    },
  },
  {
    slug: "ischia-full-day",
    legacyId: "tour-ischia",
    category: "daily",
    hours: "8h",
    priceFrom: "2.000 €",
    pricesByBoat: {
      "primatist-g65": "5.000 €",
      "primatist-g50": "3.600 €",
      "sarima-39": "2.000 €",
    },
    image: "/tours/ischia-procida.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Ischia Full Day",
      meta: "Giornata Intera · 8 ore",
      short:
        "Giornata dedicata all'isola vulcanica: giro completo, Castello Aragonese, Sant'Angelo.",
      long: "Imbarco al porto di Capri alle 09:30. Navigazione verso Ischia, giro completo dell'isola con vista del Castello Aragonese, delle terme naturali e delle baie più suggestive. Sosta a Sant'Angelo per pranzo opzionale. Rientro alle 18:00.",
      itinerary: [
        "Imbarco al porto di Capri (09:30)",
        "Navigazione verso Ischia",
        "Giro dell'isola · Castello Aragonese",
        "Punta della Signora · sosta bagno",
        "Terme naturali · bagno alle Sorgenti",
        "Sbarco a Sant'Angelo · pranzo opzionale",
        "Baia di San Montano · sosta bagno",
        "Rientro previsto alle 18:00",
      ],
      highlights: [
        "Isola vulcanica",
        "Castello Aragonese",
        "Sant'Angelo",
        "Terme naturali",
      ],
    },
    en: {
      title: "Ischia Full Day",
      meta: "Full Day · 8 Hours",
      short:
        "A full day dedicated to the volcanic island: full loop, Aragonese Castle, Sant'Angelo.",
      long: "Boarding at Capri port at 09:30. Sail to Ischia for a full island loop with views of the Aragonese Castle, natural thermal springs and the most striking bays. Stop in Sant'Angelo for optional lunch. Return at 18:00.",
      itinerary: [
        "Boarding at Capri port (09:30)",
        "Sail to Ischia",
        "Island loop · Aragonese Castle",
        "Punta della Signora · swim stop",
        "Natural thermal springs · swim at Le Sorgenti",
        "Land in Sant'Angelo · optional lunch",
        "San Montano Bay · swim stop",
        "Expected return at 18:00",
      ],
      highlights: [
        "Volcanic island",
        "Aragonese Castle",
        "Sant'Angelo",
        "Thermal springs",
      ],
    },
  },
  {
    slug: "su-misura",
    legacyId: "tour-custom",
    category: "daily",
    hours: "Libera",
    priceFrom: "Su Richiesta",
    tag: "bespoke",
    image: "/tours/bespoke-fleet.jpg",
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

// Per-tour CSS object-position for the cover crop. Shared by the home
// "Signature experiences" cards and the /tours bento so both crop the same.
export const tourImagePosition: Record<string, string> = {
  "tour-island": "center 70%",            // Faraglioni-through-pines: drop down a bit, show more sea below
  "tour-capri-full-day": "center 70%",    // reuse of Capri-island image, same crop
  "tour-capri-ischia": "center top",      // show the castle (upper part)
  "tour-ischia": "center top",            // reuse Ischia-Procida shot, top-focused
  "tour-ischia-procida": "center bottom", // Corricella: the colorful marina/waterfront (prettiest part)
  "tour-full-day": "center bottom",       // Amalfi: show the town/waterfront
  "tour-penisola-amalfitana": "center bottom", // reuse Amalfi shot
  "tour-blue-grotto": "center bottom",    // grotto: show the boat + water
  "tour-capri-positano-half": "center",   // reuse Positano shot, default center
  "tour-custom": "center 78%",            // bespoke: keep the three yachts in frame
};
