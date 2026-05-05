export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-blue">
        <div className="footer-cta">
          <div className="footer-cta-mark" aria-hidden>
            <svg viewBox="0 0 32 32" width="36" height="36" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 22 Q8 18 16 22 T29 22" />
              <path d="M3 26 Q8 22 16 26 T29 26" opacity="0.7" />
              <path d="M16 4 L20 14 L16 13 L12 14 Z" />
              <line x1="16" y1="13" x2="16" y2="22" />
            </svg>
          </div>
          <h3 className="footer-cta-title">
            Ready to <span className="accent-italic">Explore?</span>
          </h3>
          <p className="footer-cta-text">
            Discover our private tours and book your experience
            <br className="footer-cta-br" />
            on the Mediterranean.
          </p>
          <div className="footer-cta-buttons">
            <button className="btn-footer-primary">View All Tours</button>
            <button className="btn-footer-secondary">
              Contact Us on WhatsApp
            </button>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <div className="footer-col-title">About</div>
            <a className="footer-link">Our Story</a>
            <a className="footer-link">The Family</a>
            <a className="footer-link">Sustainability</a>
            <a className="footer-link">Press</a>
          </div>
          <div>
            <div className="footer-col-title">Experiences</div>
            <a className="footer-link">Private Tours</a>
            <a className="footer-link">Mini Cruises</a>
            <a className="footer-link">Boat Hire</a>
            <a className="footer-link">Custom Itineraries</a>
          </div>
          <div>
            <div className="footer-col-title">Fleet</div>
            <a className="footer-link">Tramontana</a>
            <a className="footer-link">Gabbiano</a>
            <a className="footer-link">Libeccio</a>
            <a className="footer-link">Compare Yachts</a>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <a className="footer-link">+39 333 574 1333</a>
            <a className="footer-link">WhatsApp</a>
            <a className="footer-link">Marina Grande, Capri</a>
            <a className="footer-link">info@capriyacht.com</a>
          </div>
        </div>
      </div>

      <div className="footer-black">
        <div className="footer-black-inner">
          <div className="footer-logo">Capri Yacht Charter</div>

          <div className="footer-services">
            <div className="footer-service">
              <div className="footer-service-title">Private Tours</div>
              <div className="footer-service-text">Capri, Positano, Amalfi</div>
            </div>
            <div className="footer-service">
              <div className="footer-service-title">Mini Cruises</div>
              <div className="footer-service-text">Multi-day Mediterranean routes</div>
            </div>
            <div className="footer-service">
              <div className="footer-service-title">Boat Hire</div>
              <div className="footer-service-text">Three vessels, your captain</div>
            </div>
            <div className="footer-service">
              <div className="footer-service-title">Concierge</div>
              <div className="footer-service-text">Restaurants, transfers, stays</div>
            </div>
            <div className="footer-service">
              <div className="footer-service-title">Family Owned</div>
              <div className="footer-service-text">Twenty years on the sea</div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 Capri Yacht Charter · Sun &amp; Sea S.r.l. · P.IVA IT00000000000</div>
            <div className="footer-legal">
              <a className="footer-legal-link">Privacy</a>
              <a className="footer-legal-link">Terms</a>
              <a className="footer-legal-link">Cookie</a>
              <a className="footer-legal-link">Legal Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
