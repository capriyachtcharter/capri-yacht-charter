import Image from "next/image";

const tours = [
  {
    id: "tour-island",
    tag: "Most Popular",
    img: "/tours/island-tour.jpg",
    alt: "Capri Marina Piccola coastline",
    meta: "Half Day · 4 Hours",
    title: "Capri Island Tour",
    desc: "The iconic circumnavigation. Faraglioni, Grotta Bianca, Grotta Verde, and a long swim in turquoise water.",
    price: "€480",
  },
  {
    id: "tour-blue-grotto",
    tag: null,
    img: "/tours/blue-grotto.jpg",
    alt: "Casa Malaparte cliff",
    meta: "Morning · 3 Hours",
    title: "Blue Grotto Tour",
    desc: "A focused early-morning route to the Grotta Azzurra with private rowboat access.",
    price: "€360",
  },
  {
    id: "tour-full-day",
    tag: "Best Value",
    img: "/tours/full-day.jpg",
    alt: "Positano Amalfi Coast",
    meta: "Full Day · 8 Hours",
    title: "Full-Day Experience",
    desc: "The complete coast: Capri, Positano, Amalfi villages. Lunch on board or in a hidden harbour.",
    price: "€890",
  },
];

export default function Tours() {
  return (
    <section className="section">
      <div className="section-inner">
        <div data-reveal>
          <div className="eyebrow">Curated Experiences</div>
          <h2 className="section-title">
            Private Tours <span className="accent">in Capri</span>
          </h2>
          <p className="section-desc tours-desc">
            Three signature experiences, each entirely private — pick a route or build your own.
          </p>
        </div>

        <div className="tours-grid">
          {tours.map((t, i) => (
            <div
              key={t.title}
              id={t.id}
              className="tour-card"
              data-reveal="left"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="tour-card-img">
                {t.tag && <span className="tour-card-tag">{t.tag}</span>}
                <Image
                  src={t.img}
                  alt={t.alt}
                  width={900}
                  height={1125}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="tour-card-body">
                <div className="tour-card-meta">{t.meta}</div>
                <h3 className="tour-card-title">{t.title}</h3>
                <p className="tour-card-desc">{t.desc}</p>
                <div className="tour-card-footer">
                  <div className="tour-card-price">
                    <span className="tour-card-price-label">From</span>
                    <span className="tour-card-price-value">{t.price}</span>
                  </div>
                  <div className="tour-card-arrow">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
