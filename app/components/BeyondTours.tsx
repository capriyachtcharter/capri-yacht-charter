const services = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22 Q9 18 16 22 T29 22" />
        <path d="M3 26 Q9 22 16 26 T29 26" opacity="0.5" />
        <path d="M9 18 L16 8 L23 18 Z" />
        <line x1="16" y1="8" x2="16" y2="22" />
      </svg>
    ),
    title: "Boat Transfers",
    desc: "Direct routes between Capri and the mainland — Naples, Sorrento, Positano, Amalfi. Private, point-to-point, on your schedule.",
    cta: "View Transfers",
    href: "/transfers",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="9" r="3" />
        <path d="M19 14 L19 26" />
        <path d="M14 18 L24 18" />
        <path d="M16 26 L22 26" />
        <path d="M3 22 Q9 18 16 22" />
      </svg>
    ),
    title: "Skipper Charter",
    desc: "The boat is yours, the captain is ours. No fixed itinerary — design the day with us, sail wherever the sea calls.",
    cta: "Inquire",
    href: "/skipper-charter",
  },
];

export default function BeyondTours() {
  return (
    <section className="beyond-tours">
      <div className="section-inner">
        <div className="beyond-head" data-reveal>
          <div className="eyebrow">Beyond Tours</div>
          <h2 className="section-title">
            More than a <span className="accent">circumnavigation.</span>
          </h2>
        </div>

        <div className="beyond-grid">
          {services.map((s, i) => (
            <a key={s.title} href={s.href} className="beyond-card" data-reveal="left" style={{ transitionDelay: `${i * 0.14}s` }}>
              <div className="beyond-card-icon">{s.icon}</div>
              <h3 className="beyond-card-title">{s.title}</h3>
              <p className="beyond-card-desc">{s.desc}</p>
              <span className="beyond-card-cta">
                {s.cta}
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="8" x2="13" y2="8" />
                  <polyline points="9 4 13 8 9 12" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
