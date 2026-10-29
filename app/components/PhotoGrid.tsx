"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type GridPhoto = { src: string; alt: string; pos?: string };

/**
 * Small decorative photo grid (charter pages: "A bordo" / Noleggio breve). Stays a grid
 * on phones too — the photos are an aesthetic accent, not the boat gallery — and any
 * photo opens full-size in a lightbox (tap/click; Esc or tap outside to close, arrows
 * or ←/→ to browse). The lightbox is portalled to <body>: the grid sits inside
 * data-reveal sections whose transform would otherwise trap position:fixed.
 */
export default function PhotoGrid({ photos }: { photos: GridPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className="charter-luxury-grid">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className="charter-luxury-cell"
            onClick={() => setOpen(i)}
            aria-label={p.alt}
          >
            <img src={p.src} alt={p.alt} loading="lazy" style={p.pos ? { objectPosition: p.pos } : undefined} />
          </button>
        ))}
      </div>

      {open !== null && createPortal(
        <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label={photos[open].alt} onClick={close}>
          <img src={photos[open].src} alt={photos[open].alt} onClick={(e) => e.stopPropagation()} />
          <button type="button" className="photo-lightbox-close" onClick={close} aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="3" x2="13" y2="13" />
              <line x1="13" y1="3" x2="3" y2="13" />
            </svg>
          </button>
          <button type="button" className="photo-lightbox-nav is-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="10 4 6 8 10 12" />
            </svg>
          </button>
          <button type="button" className="photo-lightbox-nav is-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 4 10 8 6 12" />
            </svg>
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
