"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export type CarouselItem = {
  slug: string;
  image: string;
  imagePosition?: string; // CSS object-position for this card's crop
  title: string;
  meta: string;
  priceFrom: string;
  short: string;
};

type Props = {
  items: CarouselItem[];
  fromLabel: string;
  ctaLabel: string;
};

export default function TourCarousel({ items, fromLabel, ctaLabel }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  // Duplicate items so the auto-scroll can loop seamlessly: when scrollLeft
  // crosses the halfway point we snap it back to the matching position in
  // the first half. The eye never sees the jump.
  const loop = [...items, ...items];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (paused) return;

    // Cards stay still for SLIDE_INTERVAL ms, then glide one card forward.
    const SLIDE_INTERVAL = 4500;

    const id = window.setInterval(() => {
      if (!el) return;
      const card = el.querySelector<HTMLElement>(".tour-carousel-card");
      const step = card ? card.offsetWidth + 20 : 340;
      const half = el.scrollWidth / 2;
      // If the next slide would cross the duplicated halfway mark, jump
      // back silently first so the smooth glide continues unbroken.
      if (el.scrollLeft + step >= half) {
        el.scrollLeft -= half;
      }
      el.scrollBy({ left: step, behavior: "smooth" });
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(id);
  }, [paused]);

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".tour-carousel-card");
    const cardW = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: cardW * dir, behavior: "smooth" });
  };

  return (
    <div
      className="tour-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        className="tour-carousel-nav tour-carousel-nav-prev"
        onClick={() => nudge(-1)}
        aria-label="Previous"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="10 4 6 8 10 12" />
        </svg>
      </button>
      <button
        type="button"
        className="tour-carousel-nav tour-carousel-nav-next"
        onClick={() => nudge(1)}
        aria-label="Next"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 4 10 8 6 12" />
        </svg>
      </button>

      <div className="tour-carousel-track" ref={trackRef}>
        {loop.map((item, i) => (
          <Link
            key={`${item.slug}-${i}`}
            href={`/tours/${item.slug}`}
            className="tour-carousel-card"
          >
            <div className="tour-carousel-card-img">
              <img src={item.image} alt={item.title} loading="lazy" style={{ objectPosition: item.imagePosition ?? "center" }} />
              <div className="tour-carousel-card-overlay" />
            </div>
            <div className="tour-carousel-card-body">
              <div className="tour-carousel-card-name">{item.title}</div>
              <div className="tour-carousel-card-hover">
                <div className="tour-carousel-card-meta">{item.meta}</div>
                <p className="tour-carousel-card-desc">{item.short}</p>
                <div className="tour-carousel-card-footer">
                  <div className="tour-carousel-card-price">
                    <span>{fromLabel}</span>
                    <strong>{item.priceFrom}</strong>
                  </div>
                  <span className="tour-carousel-card-cta">
                    {ctaLabel}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="8" x2="13" y2="8" />
                      <polyline points="9 4 13 8 9 12" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
