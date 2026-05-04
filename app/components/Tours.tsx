import Image from "next/image";

const tours = [
  {
    tag: "Most Popular",
    img: "https://images.unsplash.com/photo-1590074072768-935d48555f85?w=900&q=85",
    alt: "Capri Faraglioni",
    meta: "Half Day · 4 Hours",
    title: "Capri Island Tour",
    desc: "The iconic circumnavigation. Faraglioni, Grotta Bianca, Grotta Verde, and a long swim in turquoise water.",
    price: "€480",
  },
  {
    tag: null,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85",
    alt: "Blue Grotto Capri",
    meta: "Morning · 3 Hours",
    title: "Blue Grotto Tour",
    desc: "A focused early-morning route to the Grotta Azzurra with private rowboat access.",
    price: "€360",
  },
  {
    tag: "Best Value",
    img: "https://images.unsplash.com/photo-1558489580-faa74691fdc5?w=900&q=85",
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
        <div className="eyebrow">Curated Experiences</div>
        <h2 className="section-title">
          Private Tours <span className="accent">in Capri</span>
        </h2>
        <p className="section-desc">
          Five predefined routes, each entirely private. Choose your
          experience—we handle everything else.
        </p>

        <div className="tours-grid">
          {tours.map((t) => (
            <div key={t.title} className="tour-card">
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
