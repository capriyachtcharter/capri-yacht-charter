import fleetData from "./fleet.json";

// Bilingual short-string helper: some spec fields carry Italian words
// ("nodi", "ospiti", "matrimoniale"...) that need an English translation
// when the site is rendered in EN. Neutral values (numbers, units like "m"
// or "hp", brand names) stay as plain string.
export type SpecText = string | { it: string; en: string };

export type Boat = {
  slug: string;
  legacyId: string;
  shortName: string;
  cover: string;
  gallery: string[];
  specs: {
    length: string;
    beam: string;
    speed: SpecText;
    cabins: SpecText;
    bathrooms: string;
    capacityDay: SpecText;
    capacityNight: SpecText;
    engines: string;
  };
  it: {
    name: string;
    model: string;
    type: string;
    tagline: string;
    description: string;
    amenities: string[];
  };
  en: {
    name: string;
    model: string;
    type: string;
    tagline: string;
    description: string;
    amenities: string[];
  };
};

export const fleet: Boat[] = fleetData as unknown as Boat[];

export const boatBySlug = Object.fromEntries(fleet.map((b) => [b.slug, b]));
export const boatByLegacyId = Object.fromEntries(fleet.map((b) => [b.legacyId, b]));
