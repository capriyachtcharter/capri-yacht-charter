const stats = [
  { value: "500+", label: "Private Tours" },
  { value: "4.9★", label: "Guest Rating" },
  { value: "22", label: "Years at Sea" },
];

export default function Stats() {
  return (
    <section className="section section-cream">
      <div className="section-inner">
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
