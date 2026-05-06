"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  alt: string;
  interval?: number;
  className?: string;
};

export default function CyclingImage({ images, alt, interval = 2400, className }: Props) {
  const [index, setIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || images.length < 2) return;
    // Walk up to find the closest article/card so the cycle reacts to
    // hovering the whole card, not just the image.
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
  }, [images.length, interval]);

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
