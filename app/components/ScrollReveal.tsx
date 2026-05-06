"use client";

import { useEffect } from "react";

/**
 * Reveal logic:
 *  - Element enters viewport (scrolling down) → animate IN.
 *  - Element exits at top (kept scrolling down) → KEEP visible.
 *  - User scrolls back to the very top of the page (hero fully shown again,
 *    or logo click → href="#") → reset ALL reveals silently so the next
 *    downward scroll replays the entry animations.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const itemIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    els.forEach((el) => itemIO.observe(el));

    const RESET_THRESHOLD = 80; // px from top
    let wasAtTop = window.scrollY <= RESET_THRESHOLD;

    const resetAll = () => {
      els.forEach((el) => {
        if (!el.classList.contains("is-visible")) return;
        el.classList.add("no-transition");
        el.classList.remove("is-visible");
      });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          els.forEach((el) => el.classList.remove("no-transition"));
        });
      });
    };

    const onScroll = () => {
      const atTop = window.scrollY <= RESET_THRESHOLD;
      if (atTop && !wasAtTop) resetAll();
      wasAtTop = atTop;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    if (wasAtTop) resetAll();

    return () => {
      itemIO.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
