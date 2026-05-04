const reviews = [
  {
    text: "An unforgettable day on the water. The boat was immaculate, the captain incredibly knowledgeable, and the entire experience felt truly exclusive. Worth every cent.",
    author: "Sarah M.",
    source: "TripAdvisor",
  },
  {
    text: "We've chartered boats all over the Mediterranean, but Capri Yacht Charter stands out. Professional, elegant, and they know every hidden cove around the island.",
    author: "James & Emma K.",
    source: "Google Reviews",
  },
  {
    text: "The highlight of our honeymoon. Swimming in the Blue Grotto, prosecco on deck, sunset behind the Faraglioni. Pure magic. Thank you for making it perfect.",
    author: "Marco & Lucia",
    source: "TripAdvisor",
  },
];

export default function Reviews() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="eyebrow">Testimonials</div>
        <h2 className="section-title">
          Trusted by <span className="accent">Thousands</span>
        </h2>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.author} className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="review-author">{r.author}</div>
              <div className="review-source">{r.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
