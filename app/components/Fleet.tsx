const boats = [
  {
    id: "primatist-g65",
    name: "Primatist G65",
    img: "/fleet/primatist-g65.jpg",
    type: "Luxury Yacht",
    length: "20 m",
    capacity: "Up to 12 guests",
    desc: "The flagship — Italian shipyard pedigree, hand-finished saloon, sun deck and shaded cockpit. The boat for full-day charters and Amalfi crossings.",
  },
  {
    id: "primatist-g50",
    name: "Primatist G50",
    img: "/fleet/primatist-g50.jpg",
    type: "Sport Cruiser",
    length: "15 m",
    capacity: "Up to 10 guests",
    desc: "Sleek, fast, sun-deck forward and stern swim platform. The perfect balance of comfort and speed for half-day Capri tours.",
  },
  {
    id: "sarima-39",
    name: "Sarima 39",
    img: "/fleet/sarima-39.jpg",
    type: "Open Cruiser",
    length: "12 m",
    capacity: "Up to 8 guests",
    desc: "The intimate option — open layout, powerful twin engines, easy access to the smaller coves and grottoes the larger boats can&apos;t reach.",
  },
];

export default function Fleet() {
  return (
    <section className="fleet section">
      <div className="section-inner">
        <div className="fleet-head" data-reveal>
          <div className="eyebrow">The Fleet</div>
          <h2 className="section-title">
            Three vessels, <span className="accent">one promise.</span>
          </h2>
          <p className="section-desc">
            Each boat is privately maintained, regularly serviced, and crewed by a captain who&apos;s known these waters since childhood.
          </p>
        </div>

        <div className="fleet-grid">
          {boats.map((b, i) => (
            <article
              key={b.id}
              id={`fleet-${b.id}`}
              className="fleet-card"
              data-reveal="left"
              style={{ transitionDelay: `${i * 0.14}s` }}
            >
              <div className="fleet-card-img">
                <img src={b.img} alt={b.name} />
              </div>
              <div className="fleet-card-body">
                <h3 className="fleet-card-name">{b.name}</h3>
                <div className="fleet-card-type">{b.type}</div>
                <div className="fleet-card-specs">
                  <span>{b.length}</span>
                  <span className="fleet-card-spec-divider" aria-hidden>·</span>
                  <span>{b.capacity}</span>
                </div>
                <p className="fleet-card-desc">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
