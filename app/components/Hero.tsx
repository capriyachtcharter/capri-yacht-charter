export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-eyebrow">Capri · Amalfi Coast</div>
        <h1 className="hero-title">
          Your Private<br />
          <span className="italic">Sea Experience</span>
        </h1>
        <p className="hero-subtitle">
          Entirely private yacht journeys around Capri and the Amalfi Coast. No
          shared boats. No fixed schedules. Just you, the captain, and the
          Mediterranean.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Discover Tours</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
