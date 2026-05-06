"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function Reviews() {
  const { t } = useLang();
  return (
    <section className="section">
      <div className="section-inner">
        <div className="reviews-head" data-reveal>
          <div className="eyebrow">{t.reviews.eyebrow}</div>
          <h2 className="section-title">
            {t.reviews.title} <span className="accent">{t.reviews.titleAccent}</span>
          </h2>

          <div className="stats-strip">
            {t.reviews.stats.map((s) => (
              <div key={s.label} className="stats-strip-item">
                <span className="stats-strip-value">{s.value}</span>
                <span className="stats-strip-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-grid">
          {t.reviews.items.map((r, i) => (
            <div
              key={r.author}
              className="review-card"
              data-reveal="left"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
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
