"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t, path, lang } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const MIN_SPLASH_MS = 350;
    const MAX_SPLASH_MS = 3500;
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
    // readyState >= 3 (HAVE_FUTURE_DATA): the browser can start playing without
    // an immediate stall. Waiting for this instead of "loadeddata" (readyState 2,
    // only the first frame decoded) prevents the poster image from being visible
    // between splash and video playback.
    if (v.readyState >= 3) {
      reveal();
    } else {
      v.addEventListener("canplay", reveal, { once: true });
      timer = window.setTimeout(() => setReady(true), MAX_SPLASH_MS);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
      v?.removeEventListener("canplay", reveal);
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
        poster={t.hero.poster}
        src={t.hero.video}
        data-mosto-field={`content:home:${lang}.hero.video`}
        data-mosto-kind="video"
      />
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
          <span data-mosto-field={`content:home:${lang}.hero.pill`}>{t.hero.pill}</span>
        </div>

        <h1 className="hero-title">
          {t.hero.titleLine1 && (
            <>
              <span data-mosto-field={`content:home:${lang}.hero.titleLine1`}>{t.hero.titleLine1}</span>
              <br />
            </>
          )}
          <span className="italic" data-mosto-field={`content:home:${lang}.hero.titleAccent`}>{t.hero.titleAccent}</span>
        </h1>

        <div className="hero-actions">
          <a href={path("/tours")} className="btn-primary">{t.hero.ctaPrimary}</a>
          <a href={path("/contact")} className="btn-secondary">
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
