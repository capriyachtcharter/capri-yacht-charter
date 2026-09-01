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

export const fleet: Boat[] = [
  {
    slug: "libeccio",
    legacyId: "primatist-g65",
    shortName: "TENAREZE VI",
    cover: "/fleet/libeccio/libeccio-esterno-1.jpg",
    gallery: [
      "/fleet/libeccio/libeccio-esterno-1.jpg", // cover · clean side profile at anchor
      "/fleet/libeccio/libeccio-esterno-2.jpg", // exterior · 3/4 action past the coast
      "/fleet/libeccio/libeccio-esterno-3.jpg", // exterior · bow-on action with the villa
      "/fleet/libeccio/libeccio-interno-1.jpg", // interior · main saloon
      "/fleet/libeccio/libeccio-interno-2.jpg", // interior · saloon / bar
      "/fleet/libeccio/libeccio-interno-3.jpg", // interior · master cabin
      "/fleet/libeccio/libeccio-interno-4.jpg", // interior · guest twin cabin
    ],
    specs: {
      length: "21 m",
      beam: "5,1 m",
      speed: "30 nodi",
      cabins: "2 matrimoniali + 1 doppia",
      bathrooms: "3",
      capacityDay: "12 ospiti",
      capacityNight: "6 ospiti",
      engines: "2× MAN 1000 hp",
    },
    it: {
      name: "TENAREZE VI",
      model: "Princess v65",
      type: "Yacht di Lusso",
      tagline: "L'ammiraglia. Per giornate intere e crociere multi-day.",
      description:
        "Doppio solarium, plancetta poppiera, dinette interna e cabina armatoriale. Pensato per le giornate intere e le mini crociere verso Amalfi, Ischia e oltre. Il massimo del comfort senza rinunciare alle prestazioni.",
      amenities: [
        "Doppio solarium prua e poppa",
        "2 cabine matrimoniali + 1 doppia",
        "Cucina attrezzata · barbecue",
        "Impianto audio Bose",
        "Wi-Fi a bordo",
        "Snorkeling",
        "SUP e Sea Bob (su richiesta)",
        "Moto d'acqua a bordo (esclusiva TENAREZE VI)",
        "Tender al seguito",
      ],
    },
    en: {
      name: "TENAREZE VI",
      model: "Princess v65",
      type: "Luxury Yacht",
      tagline: "The flagship. Full-day charters and multi-day cruises.",
      description:
        "Bow and stern solariums, stern swim platform, interior dinette and master cabin. Built for full-day charters and mini cruises down to Amalfi, Ischia and beyond. Maximum comfort, real performance.",
      amenities: [
        "Bow + stern solariums",
        "2 master cabins + 1 twin cabin",
        "Full galley · BBQ",
        "Bose audio system",
        "On-board Wi-Fi",
        "Snorkeling gear",
        "SUP & Sea Bob (on request)",
        "Jet ski on board (TENAREZE VI only)",
        "Tender on tow",
      ],
    },
  },
  {
    slug: "tramontana",
    legacyId: "primatist-g50",
    shortName: "CHITON FOUR",
    cover: "/fleet/tramontana/tramontana-esterno-1.jpg",
    gallery: [
      "/fleet/tramontana/tramontana-esterno-1.jpg", // cover · clean side profile at the cliffs
      "/fleet/tramontana/tramontana-esterno-2.jpg", // exterior · golden-hour action with Vesuvius
      "/fleet/tramontana/tramontana-esterno-3.jpg", // exterior · anchored at golden hour, couple aboard
      "/fleet/tramontana/tramontana-interno-1.jpg", // interior · open bridge cockpit
      "/fleet/tramontana/tramontana-interno-2.jpg", // interior · master cabin
      "/fleet/tramontana/tramontana-interno-3.jpg", // interior · galley
    ],
    specs: {
      length: "17 m",
      beam: "4,5 m",
      speed: "30 nodi",
      cabins: "1 matrimoniale + 2 doppie in piano",
      bathrooms: "2",
      capacityDay: "12 ospiti",
      capacityNight: "6 ospiti",
      engines: "2× MAN 800 hp",
    },
    it: {
      name: "CHITON FOUR",
      model: "Princess v55",
      type: "Sport Cruiser",
      tagline: "Doppio solarium prua e poppa, perfetto compromesso tra prestazioni e comfort.",
      description:
        "Doppio solarium prua e poppa, divano a L con tavolo, angolo bar. 30 nodi di velocità — il giusto compromesso tra prestazioni e comfort sociale. Ideale per giornate di tour con gruppi numerosi.",
      amenities: [
        "Doppio solarium prua e poppa",
        "Divano a L poppa con tavolo",
        "Angolo bar",
        "1 cabina matrimoniale + 2 doppie in piano · 2 bagni",
        "Impianto audio premium",
        "Doccia esterna",
        "Snorkeling incluso",
        "SUP e Sea Bob (su richiesta)",
      ],
    },
    en: {
      name: "CHITON FOUR",
      model: "Princess v55",
      type: "Sport Cruiser",
      tagline: "Bow + stern solariums — the right balance of performance and social comfort.",
      description:
        "Bow and stern solariums, L-shaped seating with solid table, bar corner. Top speed 30 knots — the right balance of performance and social comfort. Ideal for tour days with larger groups.",
      amenities: [
        "Bow + stern solariums",
        "Aft L-sofa with table",
        "Bar corner",
        "1 master cabin + 2 twin cabins · 2 bathrooms",
        "Premium audio system",
        "Outdoor shower",
        "Snorkeling gear included",
        "SUP & Sea Bob (on request)",
      ],
    },
  },
  {
    slug: "gabbiano",
    legacyId: "sarima-39",
    shortName: "RORI",
    cover: "/fleet/gabbiano/gabbiano-esterno-1.jpg",
    gallery: [
      "/fleet/gabbiano/gabbiano-esterno-1.jpg", // cover · planing at speed (agility)
      "/fleet/gabbiano/gabbiano-esterno-2.jpg", // exterior · clean side profile along the coast
      "/fleet/gabbiano/gabbiano-esterno-3.jpg", // exterior · at the Faraglioni from above
      "/fleet/gabbiano/gabbiano-interno-1.jpg", // interior · galley
      "/fleet/gabbiano/gabbiano-interno-2.jpg", // interior · cabin
      "/fleet/gabbiano/gabbiano-interno-3.jpg", // interior · head / bathroom
      "/fleet/gabbiano/gabbiano-interno-4.jpg", // interior · helm console (moved from libeccio — actually Gabbiano)
    ],
    specs: {
      length: "11 m",
      beam: "3,5 m",
      speed: "35 nodi",
      cabins: "1 master",
      bathrooms: "1",
      capacityDay: "6 ospiti",
      capacityNight: "2 ospiti",
      engines: "2× Mercury 350 hp",
    },
    it: {
      name: "RORI",
      model: "Sarima 38",
      type: "Open Cruiser",
      tagline: "Agile e veloce — entra dove le barche grandi non possono.",
      description:
        "Linea sportiva, ampio solarium poppiero, fino a 35 nodi. Agile fra le calette e le grotte che le barche più grandi non raggiungono. La barca giusta per chi vuole velocità e accesso ai posti più nascosti.",
      amenities: [
        "Solarium prua + poppa",
        "Cabina master con bagno",
        "Frigo e dinette",
        "Doccia esterna",
        "Impianto audio",
        "Snorkeling e teli",
      ],
    },
    en: {
      name: "RORI",
      model: "Sarima 38",
      type: "Open Cruiser",
      tagline: "Nimble and fast — reaches places larger boats can't.",
      description:
        "Sporty profile, wide rear solarium, top speed 35 knots. Nimble enough for the smaller coves and grottoes the larger boats can't reach. The right choice for guests who want speed and access to the hidden spots.",
      amenities: [
        "Bow + stern solarium",
        "Master cabin with bathroom",
        "Fridge and dinette",
        "Outdoor shower",
        "Audio system",
        "Snorkeling gear & towels",
      ],
    },
  },
];

export const boatBySlug = Object.fromEntries(fleet.map((b) => [b.slug, b]));
export const boatByLegacyId = Object.fromEntries(fleet.map((b) => [b.legacyId, b]));
