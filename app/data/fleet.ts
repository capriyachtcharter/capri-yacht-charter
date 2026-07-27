import fleetData from "./fleet.json";

export type Boat = {
  slug: string;
  legacyId: string;
  shortName: string;
  cover: string;
  gallery: string[];
  specs: {
    length: string;
    beam: string;
    speed: string;
    cabins: string;
    bathrooms: string;
    capacityDay: string;
    capacityNight: string;
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
