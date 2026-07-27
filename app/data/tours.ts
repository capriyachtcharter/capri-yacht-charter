import toursData from "./tours.json";

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

export const tours: Tour[] = toursData as unknown as Tour[];

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
