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
    shortName: "Libeccio",
    cover: "/fleet/primatist-g65.jpg",
    gallery: [
      "/fleet/primatist-g65.jpg",
      "/fleet/g65/side-profile.jpg",
      "/fleet/g65/aerial-top.jpg",
      "/fleet/g65/exterior-1.jpg",
      "/fleet/g65/salon.jpg",
    ],
    specs: {
      length: "21 m",
      beam: "5,1 m",
      speed: "30 nodi",
      cabins: "3",
      bathrooms: "3",
      capacityDay: "12 ospiti",
      capacityNight: "6 ospiti",
      engines: "2× MAN 1000 hp",
    },
    it: {
      name: "Libeccio",
      model: "Primatist v65",
      type: "Yacht di Lusso",
      tagline: "L'ammiraglia. Per giornate intere e crociere multi-day.",
      description:
        "Hard-top apribile, doppio solarium, plancetta poppiera, dinette interna e cabina armatoriale. Pensato per le giornate intere e le mini crociere verso Amalfi, Ischia e oltre. Il massimo del comfort senza rinunciare alle prestazioni.",
      amenities: [
        "Hard-top apribile",
        "Doppio solarium prua e poppa",
        "Cabina armatoriale + 2 cabine ospiti",
        "Cucina attrezzata · barbecue",
        "Impianto audio Bose",
        "Wi-Fi a bordo",
        "Snorkeling e SUP",
        "Tender al seguito",
      ],
    },
    en: {
      name: "Libeccio",
      model: "Primatist v65",
      type: "Luxury Yacht",
      tagline: "The flagship. Full-day charters and multi-day cruises.",
      description:
        "Retractable hardtop, dual solariums, stern swim platform, interior dinette and master cabin. Built for full-day charters and mini cruises down to Amalfi, Ischia and beyond. Maximum comfort, real performance.",
      amenities: [
        "Retractable hardtop",
        "Bow + stern solariums",
        "Master cabin + 2 guest cabins",
        "Full galley · BBQ",
        "Bose audio system",
        "On-board Wi-Fi",
        "Snorkeling gear & SUP",
        "Tender on tow",
      ],
    },
  },
  {
    slug: "tramontana",
    legacyId: "primatist-g50",
    shortName: "Tramontana",
    cover: "/fleet/primatist-g50.jpg",
    gallery: [
      "/fleet/primatist-g50.jpg",
      "/fleet/g50/bow.jpg",
      "/fleet/g50/salon.jpg",
      "/fleet/g50/cabin.jpg",
    ],
    specs: {
      length: "17 m",
      beam: "4,5 m",
      speed: "30 nodi",
      cabins: "3",
      bathrooms: "2",
      capacityDay: "12 ospiti",
      capacityNight: "6 ospiti",
      engines: "2× Volvo Penta IPS",
    },
    it: {
      name: "Tramontana",
      model: "Primatist v55",
      type: "Sport Cruiser",
      tagline: "Open bridge dinamico, perfetto compromesso tra prestazioni e comfort.",
      description:
        "Open bridge dinamico, divano a L con tavolo, barbecue elettrico e angolo bar. 30 nodi di velocità — il giusto compromesso tra prestazioni e comfort sociale. Ideale per giornate di tour con gruppi numerosi.",
      amenities: [
        "Open bridge convertibile",
        "Divano a L poppa con tavolo",
        "Barbecue elettrico · angolo bar",
        "3 cabine · 2 bagni",
        "Impianto audio premium",
        "Doccia esterna",
        "Snorkeling incluso",
      ],
    },
    en: {
      name: "Tramontana",
      model: "Primatist v55",
      type: "Sport Cruiser",
      tagline: "Dynamic open bridge — the right balance of performance and social comfort.",
      description:
        "Dynamic open bridge, L-shaped seating with solid table, electric BBQ and bar corner. Top speed 30 knots — the right balance of performance and social comfort. Ideal for tour days with larger groups.",
      amenities: [
        "Convertible open bridge",
        "Aft L-sofa with table",
        "Electric BBQ · bar corner",
        "3 cabins · 2 bathrooms",
        "Premium audio system",
        "Outdoor shower",
        "Snorkeling gear included",
      ],
    },
  },
  {
    slug: "gabbiano",
    legacyId: "sarima-39",
    shortName: "Gabbiano",
    cover: "/fleet/sarima/at-anchor.jpg",
    gallery: [
      "/fleet/sarima/at-anchor.jpg",
      "/fleet/sarima/navigating.jpg",
      "/fleet/sarima/detail-3.jpg",
      "/fleet/sarima/detail-2.jpg",
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
      name: "Gabbiano",
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
      name: "Gabbiano",
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
