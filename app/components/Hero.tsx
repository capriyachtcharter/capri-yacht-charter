"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Minimum splash time (avoids a "flash" when the video is already cached).
    const MIN_SPLASH_MS = 350;
    const start = performance.now();
    let timer: number | undefined;

    const reveal = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_SPLASH_MS - elapsed);
      timer = window.setTimeout(() => setReady(true), remaining);
    };

    const v = videoRef.current;
    if (!v) {
      reveal();
      return;
    }
    if (v.readyState >= 2) {
      reveal();
    } else {
      v.addEventListener("loadeddata", reveal, { once: true });
      // Fallback: never wait more than 1.2s even if the video stalls.
      timer = window.setTimeout(() => setReady(true), 1200);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
      v?.removeEventListener("loadeddata", reveal);
    };
  }, []);

  return (
    <section className={`hero${ready ? " is-ready" : ""}`}>
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-faraglioni.webp"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className={`hero-splash${ready ? " is-leaving" : ""}`} aria-hidden={ready}>
        <div className="hero-splash-stage">
          <span className="hero-splash-ring" />
          <img src="/logo-mark.png" alt="" className="hero-splash-logo" />
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-pill">
          <span className="hero-pill-dot" />
          {t.hero.pill}
        </div>

        <h1 className="hero-title">
          {t.hero.titleLine1}<br />
          <span className="italic">{t.hero.titleAccent}</span>
        </h1>

        <div className="hero-actions">
          <a href="/tours" className="btn-primary">{t.hero.ctaPrimary}</a>
          <a href="/contact" className="btn-secondary">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">{t.hero.scroll}</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
