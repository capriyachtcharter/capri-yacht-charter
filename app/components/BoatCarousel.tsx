"use client";

import { useEffect, useState, type MouseEvent } from "react";

/**
 * Photo carousel used on every place a boat is shown as a single image:
 * home Fleet section AND /fleet hub rows. Auto-advances on hover, manual
 * arrow control pauses the auto-cycle. Resets to first frame on hover out.
 */
export default function BoatCarousel({
  images,
  alt,
  intervalMs = 3200,
  fieldBase,
}: {
  images: string[];
  alt: string;
  intervalMs?: number;
  /**
   * When set (e.g. "fleet:capri-full-day:gallery"), each frame is annotated for
   * the Mosto visual CMS as `<fieldBase>.<index>` so the client can swap a single
   * gallery photo. Only the active (visible) frame is clickable — see globals.css
   * `.boat-carousel-frame` pointer-events — so a click edits the photo on screen.
   */
  fieldBase?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [pausedByArrow, setPausedByArrow] = useState(false);

  useEffect(() => {
    if (!hovered) {
      setIdx(0);
      return;
    }
    if (pausedByArrow) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [hovered, pausedByArrow, images.length, intervalMs]);

  const next = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i + 1) % images.length);
  };
  const prev = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <div
      className="boat-carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={alt}
          className={`boat-carousel-frame${idx === i ? " is-active" : ""}`}
          loading={i === 0 ? "eager" : "lazy"}
          data-mosto-field={fieldBase ? `${fieldBase}.${i}` : undefined}
          data-mosto-kind={fieldBase ? "image" : undefined}
        />
      ))}

      <button
        type="button"
        className="boat-carousel-nav boat-carousel-prev"
        onClick={prev}
        onMouseEnter={() => setPausedByArrow(true)}
        onMouseLeave={() => setPausedByArrow(false)}
        aria-label="Previous photo"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="10 4 6 8 10 12" />
        </svg>
      </button>
      <button
        type="button"
        className="boat-carousel-nav boat-carousel-next"
        onClick={next}
        onMouseEnter={() => setPausedByArrow(true)}
        onMouseLeave={() => setPausedByArrow(false)}
        aria-label="Next photo"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 4 10 8 6 12" />
        </svg>
      </button>

      <div className="boat-carousel-counter">
        <span>{String(idx + 1).padStart(2, "0")}</span>
        <span className="boat-carousel-counter-divider" aria-hidden>—</span>
        <span>{String(images.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
