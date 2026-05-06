export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-faraglioni.webp"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-pill">
          <span className="hero-pill-dot" />
          Family-owned · Since 2002
        </div>

        <h1 className="hero-title">
          Your Private<br />
          <span className="italic">Sea Experience</span>
        </h1>

        <div className="hero-actions">
          <a href="#tour-island" className="btn-primary">Discover Tours</a>
          <a
            href="https://wa.me/393335741333"
            target="_blank"
            rel="noopener"
            className="btn-secondary"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
