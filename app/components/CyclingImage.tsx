"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  alt: string;
  interval?: number;
  className?: string;
  autoCycle?: boolean; // if true, cycles continuously without needing hover
  /** When true (autoCycle only), the interval starts only after the wrapper
   *  is fully revealed by the user's scroll (intersectionRatio >= viewportGate)
   *  and pauses when the image leaves the viewport. */
  startWhenInView?: boolean;
  /** Intersection ratio that must be reached before the cycle starts. */
  viewportGate?: number;
};

export default function CyclingImage({
  images,
  alt,
  interval = 2400,
  className,
  autoCycle = false,
  startWhenInView = false,
  viewportGate = 0.8,
}: Props) {
  const [index, setIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || images.length < 2) return;

    if (autoCycle) {
      let id: number | null = null;
      const startTimer = () => {
        if (id != null) return;
        id = window.setInterval(() => {
          setIndex((i) => (i + 1) % images.length);
        }, interval);
      };
      const stopTimer = () => {
        if (id != null) {
          window.clearInterval(id);
          id = null;
        }
      };

      if (startWhenInView && "IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.intersectionRatio >= viewportGate) startTimer();
              else stopTimer();
            }
          },
          { threshold: [0, viewportGate, 1] }
        );
        io.observe(wrap);
        return () => {
          stopTimer();
          io.disconnect();
        };
      }

      startTimer();
      return () => stopTimer();
    }

    // Hover-driven mode: walk up to find the closest card so the cycle reacts
    // to hovering the whole card, not just the image.
    const card = wrap.closest("article, .fleet-card, .tour-card") as HTMLElement | null;
    const target = card ?? wrap;

    let timer: number | null = null;
    const start = () => {
      if (timer != null) return;
      timer = window.setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, interval);
    };
    const stop = () => {
      if (timer != null) window.clearInterval(timer);
      timer = null;
      setIndex(0);
    };

    target.addEventListener("mouseenter", start);
    target.addEventListener("mouseleave", stop);
    target.addEventListener("focusin", start);
    target.addEventListener("focusout", stop);
    return () => {
      stop();
      target.removeEventListener("mouseenter", start);
      target.removeEventListener("mouseleave", stop);
      target.removeEventListener("focusin", start);
      target.removeEventListener("focusout", stop);
    };
  }, [images.length, interval, autoCycle]);

  return (
    <div ref={wrapRef} className={`cycling-image ${className ?? ""}`}>
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={alt}
          className={`cycling-image-frame${i === index ? " is-active" : ""}`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
