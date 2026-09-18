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

// Prezzo FISSO — voci sempre incluse nel prezzo del tour.
const fixed = {
  it: [
    "Equipaggio",
    "IVA",
    "Aperitivo · snack",
    "1 bottiglia di vino",
    "1 bottiglia di prosecco",
    "Soft drink",
    "Gonfiabili, noodles, pinne e maschere",
  ],
  en: [
    "Crew",
    "VAT",
    "Aperitivo · snacks",
    "1 bottle of wine",
    "1 bottle of prosecco",
    "Soft drinks",
    "Inflatables, noodles, snorkelling gear",
  ],
};

// VARIABILE — voci opzionali o il cui costo varia (carburante consumato,
// pranzo, alcolici, ingressi, extra).
const variable = {
  it: [
    "Carburante",
    "Pranzo",
    "Alcolici",
    "Ingresso alla Grotta Azzurra",
    "Extra non indicati",
  ],
  en: ["Fuel", "Lunch", "Alcohol", "Blue Grotto entrance", "Extras not listed"],
};

// Extras "su richiesta" — same list on every tour. Moto d'acqua is exclusive
// to TENAREZE VI (Princess v65); the note is surfaced in the UI.
export const extrasDefault = {
  it: [
    { label: "Moto d'acqua (solo TENAREZE VI)", price: "800 €" },
    { label: "Sea bob (tutte le barche)", price: "600 €" },
    { label: "SUP (tutte le barche)", price: "200 €" },
    { label: "Auto porto Napoli → aeroporto", price: "120 €" },
    { label: "Auto porto Napoli → stazione", price: "60 €" },
  ],
  en: [
    { label: "Jet ski (TENAREZE VI only)", price: "€800" },
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

export const fixedDefault = fixed;
export const variableDefault = variable;
// Backwards-compat aliases (old code used these names)
export const includedDefault = fixed;
export const notIncludedDefault = variable;

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
        "Soste bagno nelle calette (Cala del Rio, Cala Marmolata, Cala Ventroso, Cala di Matermania)",
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
        "Swim stops at the coves (Cala del Rio, Cala Marmolata, Cala Ventroso, Cala di Matermania)",
        "Expected return: 13:30 / 18:00",
      ],
      highlights: ["Capri's Faraglioni", "Blue Grotto", "3 swim stops", "Snorkeling included"],
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
      long: "Partenza dal porto scelto alle 10:00 (Capri o Sorrento). Navigazione per Amalfi con sosta bagno a Li Galli, sbarco a Positano, Amalfi o Sorrento per visita e shopping. Pranzo opzionale in ristorante sul mare (non incluso). Rientro alle 18:00 dopo il giro dell'isola di Capri.",
      itinerary: [
        "Partenza dal porto scelto (10:00)",
        "Navigazione verso Amalfi — sosta bagno a Li Galli",
        "Sbarco a Positano, Amalfi o Sorrento per visita e shopping",
        "Pranzo opzionale in ristorante sul mare (non incluso)",
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
      long: "Departure from the chosen port at 10:00 (Capri or Sorrento). Navigation toward Amalfi with a swim stop at Li Galli, landing in Positano, Amalfi or Sorrento for visits and shopping. Optional lunch at a seaside restaurant (not included). Return at 18:00 after the Capri island loop.",
      itinerary: [
        "Departure from chosen port (10:00)",
        "Navigation to Amalfi — swim stop at Li Galli",
        "Landing in Positano, Amalfi or Sorrento for visit and shopping",
        "Optional lunch at a seaside restaurant (not included)",
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
        "Pranzo opzionale in ristorante sul mare (non incluso)",
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
        "Optional lunch at a seaside restaurant (not included)",
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
      long: "Imbarco al porto di Capri alle 10:00. Giro dell'isola di Capri con visita delle grotte e sosta bagno, navigazione per Ischia, giro dell'isola per ammirare le bellezze dell'isola vulcanica con vista del Castello Aragonese. Eventuale sbarco a Sant'Angelo. Possibilità di sosta per pranzo a Ischia nella suggestiva baia di Cartaromana. Rientro alle 18:00.",
      itinerary: [
        "Imbarco al porto di Capri (10:00)",
        "Giro dell'isola di Capri e visita grotte",
        "Sosta bagno",
        "Navigazione verso Ischia",
        "Giro dell'isola vulcanica · Castello Aragonese",
        "Eventuale sbarco a Sant'Angelo",
        "Pranzo opzionale in ristorante sul mare (non incluso)",
        "Rientro previsto alle 18:00",
      ],
      highlights: ["Due isole", "Castello Aragonese", "Sant'Angelo", "Giro Capri completo"],
    },
    en: {
      title: "Capri & Ischia",
      meta: "Full Day · 8 Hours",
      short:
        "Two islands, two souls: Capri's elegance and Ischia's volcanic nature.",
      long: "Boarding at Capri port at 10:00. Capri island loop with grotto visits and swim stop, then sail to Ischia for a full loop of the volcanic island with views of the Aragonese Castle. Optional stop in Sant'Angelo. Optional lunch stop at Ischia in the scenic Cartaromana Bay. Return at 18:00.",
      itinerary: [
        "Boarding at Capri port (10:00)",
        "Capri island loop and grotto visits",
        "Swim stop",
        "Navigation to Ischia",
        "Volcanic island loop · Aragonese Castle",
        "Optional stop in Sant'Angelo",
        "Optional lunch at a seaside restaurant (not included)",
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
        "Pranzo opzionale in ristorante sul mare (non incluso)",
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
        "Optional lunch at a seaside restaurant (not included)",
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
        "Pranzo opzionale in ristorante sul mare a Marina Piccola (non incluso)",
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
        "Optional lunch at a seaside restaurant in Marina Piccola (not included)",
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
    tag: "popular",
    image: "/tours/capri-island.jpg",
    boats: ["primatist-g65", "primatist-g50", "sarima-39"],
    it: {
      title: "Capri Full Day",
      meta: "Giornata Intera · 7 ore",
      short:
        "Scopri Capri dal mare: giro dell'isola, tutte le grotte, soste bagno nelle cale più belle.",
      long: "Scopri Capri dal mare con un esclusivo tour privato in barca, tra grotte spettacolari, acque cristalline e panorami iconici. L'imbarco è previsto alle ore 10:00 circa dal porto turistico di Capri. Durante il giro completo dell'isola potrai ammirare la Grotta Azzurra (ingresso non incluso), la Grotta del Cuore, il Faro di Punta Carena, la Grotta Verde, Marina Piccola, i Faraglioni, l'Arco Naturale, la Grotta Bianca, il Salto di Tiberio e lo Scugnizzo. Sono previste soste per il bagno nelle più belle cale dell'isola, tra cui Cala del Rio, Cala Marmolata, Cala Ventroso e Cala di Matermania, oltre a una sosta fotografica ai celebri Faraglioni. Su richiesta, sarà possibile fermarsi per il pranzo presso un ristorante sul mare (non incluso). Rientro al porto previsto intorno alle ore 17:00 circa.",
      itinerary: [
        "Imbarco al porto turistico di Capri (10:00 circa)",
        "Grotta Azzurra (ingresso non incluso)",
        "Grotta del Cuore · Faro di Punta Carena · Grotta Verde",
        "Marina Piccola",
        "Faraglioni · sosta fotografica",
        "Arco Naturale · Grotta Bianca · Salto di Tiberio · lo Scugnizzo",
        "Soste bagno (Cala del Rio, Cala Marmolata, Cala Ventroso, Cala di Matermania)",
        "Pranzo opzionale in ristorante sul mare (non incluso)",
        "Rientro previsto: 17:00 circa",
      ],
      highlights: [
        "Tour privato, solo per il tuo gruppo",
        "Tutte le grotte principali di Capri",
        "Soste bagno nelle cale più belle",
        "Sosta fotografica ai Faraglioni",
      ],
    },
    en: {
      title: "Capri Full Day",
      meta: "Full Day · 7 Hours",
      short:
        "Discover Capri from the sea: full island loop, every main grotto, swim stops in the most beautiful coves.",
      long: "Discover Capri from the sea on an exclusive private tour, among spectacular grottoes, crystal-clear waters and iconic views. Boarding around 10:00 at Capri Marina. During the full island loop you'll take in the Blue Grotto (entrance not included), the Heart Grotto, the Punta Carena Lighthouse, the Green Grotto, Marina Piccola, the Faraglioni, the Natural Arch, the White Grotto, Tiberius's Leap and lo Scugnizzo. Swim stops in the most beautiful coves: Cala del Rio, Cala Marmolata, Cala Ventroso and Cala di Matermania, plus a photo stop at the iconic Faraglioni. On request, lunch stop at a seaside restaurant (not included). Expected return to port around 17:00.",
      itinerary: [
        "Boarding at Capri Marina (around 10:00)",
        "Blue Grotto (entrance not included)",
        "Heart Grotto · Punta Carena Lighthouse · Green Grotto",
        "Marina Piccola",
        "Faraglioni · photo stop",
        "Natural Arch · White Grotto · Tiberius's Leap · lo Scugnizzo",
        "Swim stops (Cala del Rio, Cala Marmolata, Cala Ventroso, Cala di Matermania)",
        "Optional lunch at a seaside restaurant (not included)",
        "Expected return: around 17:00",
      ],
      highlights: [
        "Private tour, your group only",
        "All the main Capri grottoes",
        "Swim stops in the most beautiful coves",
        "Photo stop at the Faraglioni",
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
      long: "Partenza dal porto di Sorrento alle 10:00. Punta Campanella e Costiera Amalfitana con vista dal mare di Nerano, Li Galli, Positano, Praiano, Fiordo di Furore, Conca dei Marini, Amalfi. Sbarco a Positano, Amalfi o Sorrento per visita e shopping (opzionale). Pranzo in ristorante sul mare (non incluso). Rientro alle 18:00.",
      itinerary: [
        "Partenza dal porto di Sorrento (10:00)",
        "Punta Campanella · Nerano · Li Galli",
        "Positano dal mare · sbarco opzionale",
        "Praiano · Fiordo di Furore",
        "Conca dei Marini · Grotta dello Smeraldo",
        "Sbarco per possibile sosta shopping ad Amalfi o Sorrento",
        "Pranzo opzionale in ristorante sul mare (non incluso)",
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
      long: "Departure from Sorrento at 10:00. Punta Campanella and Amalfi Coast with sea views of Nerano, Li Galli, Positano, Praiano, Furore Fjord, Conca dei Marini, Amalfi. Land in Positano, Amalfi or Sorrento for optional visit and shopping. Lunch at a seaside restaurant (not included). Return at 18:00.",
      itinerary: [
        "Departure from Sorrento (10:00)",
        "Punta Campanella · Nerano · Li Galli",
        "Positano from the sea · optional landing",
        "Praiano · Furore Fjord",
        "Conca dei Marini · Emerald Grotto",
        "Optional landing for shopping in Amalfi or Sorrento",
        "Optional lunch at a seaside restaurant (not included)",
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
      long: "Imbarco al porto di Capri alle 10:00. Navigazione verso Ischia, giro completo dell'isola con vista del Castello Aragonese, delle baie più suggestive e delle acque termali della Baia di Sorgeto. Sosta a Sant'Angelo, sbarco per shopping e possibilità di pranzo in ristorante sul mare. Rientro alle 18:00.",
      itinerary: [
        "Imbarco al porto di Capri (10:00)",
        "Navigazione verso Ischia",
        "Spiaggia dei Maronti · possibile sosta bagno",
        "Sant'Angelo · possibile sosta shopping",
        "Baia di Sorgeto",
        "Giro dell'isola",
        "Spiaggia di San Montano · possibile sosta bagno",
        "Castello Aragonese",
        "Baia di Cartaromana · possibile sosta bagno",
        "Pranzo opzionale in ristorante sul mare (non incluso)",
        "Baia di San Pancrazio · possibile sosta bagno",
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
      long: "Boarding at Capri port at 10:00. Sail to Ischia for a full island loop with views of the Aragonese Castle, the most striking bays and the thermal waters of Sorgeto Bay. Stop in Sant'Angelo, land for shopping and optional lunch at a seaside restaurant. Return at 18:00.",
      itinerary: [
        "Boarding at Capri port (10:00)",
        "Sail to Ischia",
        "Maronti Beach · optional swim stop",
        "Sant'Angelo · optional shopping stop",
        "Sorgeto Bay",
        "Island loop",
        "San Montano Beach · optional swim stop",
        "Aragonese Castle",
        "Cartaromana Bay · optional swim stop",
        "Optional lunch at a seaside restaurant (not included)",
        "San Pancrazio Bay · optional swim stop",
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
  "tour-capri-positano-half": "center",   // reuse Positano shot, default center
  "tour-custom": "center 78%",            // bespoke: keep the three yachts in frame
};
