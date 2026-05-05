const stats = [
  { value: "4.9★", label: "Guest Rating" },
  { value: "500+", label: "Private Tours" },
  { value: "22", label: "Years at Sea" },
];

const reviews = [
  {
    text: "An unforgettable day on the water. The boat was immaculate, the captain incredibly knowledgeable, and the entire experience felt truly exclusive. Worth every cent.",
    author: "Sarah M.",
    location: "London, UK",
    source: "TripAdvisor",
  },
  {
    text: "We've chartered boats all over the Mediterranean, but Capri Yacht Charter stands out. Professional, elegant, and they know every hidden cove around the island.",
    author: "James & Emma K.",
    location: "New York, USA",
    source: "Google Reviews",
  },
  {
    text: "The highlight of our honeymoon. Swimming in the Blue Grotto, prosecco on deck, sunset behind the Faraglioni. Pure magic. Thank you for making it perfect.",
    author: "Marco & Lucia",
    location: "Milano, Italia",
    source: "TripAdvisor",
  },
];

export default function Reviews() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="reviews-head">
          <div className="eyebrow">Testimonials</div>
          <h2 className="section-title">
            Trusted by <span className="accent">Thousands</span>
          </h2>

          <div className="stats-strip">
            {stats.map((s) => (
              <div key={s.label} className="stats-strip-item">
                <span className="stats-strip-value">{s.value}</span>
                <span className="stats-strip-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.author} className="review-card">
              <div className="review-quote-mark" aria-hidden>&ldquo;</div>
              <p className="review-text">{r.text}</p>
              <div className="review-divider" />
              <div className="review-meta">
                <div>
                  <div className="review-author">{r.author}</div>
                  <div className="review-location">{r.location}</div>
                </div>
                <div className="review-source-badge">{r.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
