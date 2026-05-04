export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">Capri Yacht Charter</div>
          <p className="footer-text">
            Premium private boat experiences in Capri and along the Amalfi
            Coast. One family, three vessels, twenty years on the sea.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Experiences</div>
          <a className="footer-link">Private Tours</a>
          <a className="footer-link">Mini Cruises</a>
          <a className="footer-link">Boat Hire</a>
        </div>
        <div>
          <div className="footer-col-title">Fleet</div>
          <a className="footer-link">Tramontana</a>
          <a className="footer-link">Gabbiano</a>
          <a className="footer-link">Libeccio</a>
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <a className="footer-link">+39 333 574 1333</a>
          <a className="footer-link">WhatsApp</a>
          <a className="footer-link">Marina Grande, Capri</a>
        </div>
      </div>

      <div className="footer-cta">
        <h3 className="footer-cta-title">
          Ready to <span className="accent-italic">Explore?</span>
        </h3>
        <p className="footer-cta-text">
          Discover our private tours and book your experience on the
          Mediterranean.
        </p>
        <div className="footer-cta-buttons">
          <button className="btn-footer-primary">View All Tours</button>
          <button className="btn-footer-secondary">
            Contact Us on WhatsApp
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 Capri Yacht Charter · Sun &amp; Sea S.r.l.</div>
        <div>Privacy · Terms · Cookie</div>
      </div>
    </footer>
  );
}
