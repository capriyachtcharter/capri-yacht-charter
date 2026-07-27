/**
 * Editable-content schema — the "fence".
 *
 * This is the single source of truth for WHAT a client is allowed to change via the
 * admin UI or the AI chat. Any field path not listed here is off-limits: the AI can
 * only ever touch these, so it can rewrite a tagline or swap an image but can never
 * change identity keys (slug/legacyId), structure, or layout.
 *
 * Backend-agnostic: today it guards edits to app/data/*.json (git store); the same
 * schema will drive a Payload adapter later without changing the engine.
 */

export type FieldKind = "text" | "multiline" | "image" | "list" | "imageList";

export type EditableField = {
  /** Dot-path into an entry, e.g. "it.tagline", "specs.length", "gallery". */
  path: string;
  kind: FieldKind;
  /** Human label shown to the client / given to the AI to disambiguate intent. */
  label: { it: string; en: string };
};

export type Collection = {
  key: string;
  /** JSON file (relative to repo root) holding the array of entries. */
  file: string;
  /** Property used as the stable id when addressing an entry. */
  idField: string;
  label: { it: string; en: string };
  fields: EditableField[];
};

const boatFields: EditableField[] = [
  { path: "shortName", kind: "text", label: { it: "Nome breve", en: "Short name" } },
  { path: "cover", kind: "image", label: { it: "Foto di copertina", en: "Cover photo" } },
  { path: "gallery", kind: "imageList", label: { it: "Galleria foto", en: "Photo gallery" } },
  { path: "specs.length", kind: "text", label: { it: "Lunghezza", en: "Length" } },
  { path: "specs.beam", kind: "text", label: { it: "Larghezza", en: "Beam" } },
  { path: "specs.speed", kind: "text", label: { it: "Velocità", en: "Speed" } },
  { path: "specs.cabins", kind: "text", label: { it: "Cabine", en: "Cabins" } },
  { path: "specs.bathrooms", kind: "text", label: { it: "Bagni", en: "Bathrooms" } },
  { path: "specs.capacityDay", kind: "text", label: { it: "Capienza giorno", en: "Day capacity" } },
  { path: "specs.capacityNight", kind: "text", label: { it: "Capienza notte", en: "Night capacity" } },
  { path: "specs.engines", kind: "text", label: { it: "Motori", en: "Engines" } },
  { path: "it.name", kind: "text", label: { it: "Nome (IT)", en: "Name (IT)" } },
  { path: "it.model", kind: "text", label: { it: "Modello (IT)", en: "Model (IT)" } },
  { path: "it.type", kind: "text", label: { it: "Tipo (IT)", en: "Type (IT)" } },
  { path: "it.tagline", kind: "text", label: { it: "Slogan (IT)", en: "Tagline (IT)" } },
  { path: "it.description", kind: "multiline", label: { it: "Descrizione (IT)", en: "Description (IT)" } },
  { path: "it.amenities", kind: "list", label: { it: "Dotazioni (IT)", en: "Amenities (IT)" } },
  { path: "en.name", kind: "text", label: { it: "Nome (EN)", en: "Name (EN)" } },
  { path: "en.model", kind: "text", label: { it: "Modello (EN)", en: "Model (EN)" } },
  { path: "en.type", kind: "text", label: { it: "Tipo (EN)", en: "Type (EN)" } },
  { path: "en.tagline", kind: "text", label: { it: "Slogan (EN)", en: "Tagline (EN)" } },
  { path: "en.description", kind: "multiline", label: { it: "Descrizione (EN)", en: "Description (EN)" } },
  { path: "en.amenities", kind: "list", label: { it: "Dotazioni (EN)", en: "Amenities (EN)" } },
];

const tourFields: EditableField[] = [
  { path: "hours", kind: "text", label: { it: "Durata", en: "Duration" } },
  { path: "priceFrom", kind: "text", label: { it: "Prezzo a partire da", en: "Price from" } },
  { path: "image", kind: "image", label: { it: "Foto di copertina", en: "Cover photo" } },
  { path: "imageHome", kind: "image", label: { it: "Foto in home", en: "Home photo" } },
  { path: "it.title", kind: "text", label: { it: "Titolo (IT)", en: "Title (IT)" } },
  { path: "it.meta", kind: "text", label: { it: "Sottotitolo (IT)", en: "Meta (IT)" } },
  { path: "it.short", kind: "multiline", label: { it: "Descrizione breve (IT)", en: "Short description (IT)" } },
  { path: "it.long", kind: "multiline", label: { it: "Descrizione lunga (IT)", en: "Long description (IT)" } },
  { path: "it.itinerary", kind: "list", label: { it: "Itinerario (IT)", en: "Itinerary (IT)" } },
  { path: "it.highlights", kind: "list", label: { it: "Punti forti (IT)", en: "Highlights (IT)" } },
  { path: "en.title", kind: "text", label: { it: "Titolo (EN)", en: "Title (EN)" } },
  { path: "en.meta", kind: "text", label: { it: "Sottotitolo (EN)", en: "Meta (EN)" } },
  { path: "en.short", kind: "multiline", label: { it: "Descrizione breve (EN)", en: "Short description (EN)" } },
  { path: "en.long", kind: "multiline", label: { it: "Descrizione lunga (EN)", en: "Long description (EN)" } },
  { path: "en.itinerary", kind: "list", label: { it: "Itinerario (EN)", en: "Itinerary (EN)" } },
  { path: "en.highlights", kind: "list", label: { it: "Punti forti (EN)", en: "Highlights (EN)" } },
];

export const collections: Collection[] = [
  {
    key: "fleet",
    file: "app/data/fleet.json",
    idField: "slug",
    label: { it: "Flotta (barche)", en: "Fleet (boats)" },
    fields: boatFields,
  },
  {
    key: "tours",
    file: "app/data/tours.json",
    idField: "slug",
    label: { it: "Tour ed esperienze", en: "Tours & experiences" },
    fields: tourFields,
  },
];

export const collectionByKey = Object.fromEntries(collections.map((c) => [c.key, c]));

export function fieldByPath(collectionKey: string, path: string): EditableField | undefined {
  return collectionByKey[collectionKey]?.fields.find((f) => f.path === path);
}
