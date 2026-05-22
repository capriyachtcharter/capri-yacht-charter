"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveal logic:
 *  - Element enters viewport (scrolling down) → animate IN.
 *  - Element exits at top (kept scrolling down) → KEEP visible.
 *  - On the HOME page only: scrolling back to the very top resets all reveals
 *    so the next downward scroll replays the animations (designed for the hero).
 *  - On SUBPAGES (/tours, /fleet, /contact, ...): animations play once and stay
 *    visible. No reset — avoids the "pieces disappear when scrolling up" bug
 *    and keeps booking-flow pages static and fast to navigate.
 */
export default function ScrollReveal() {
  const pathname = usePathname();
  const enableReset = pathname === "/";

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

    if (!enableReset) {
      // Subpages: play once and stay visible. No scroll listener needed.
      return () => {
        itemIO.disconnect();
      };
    }

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
  }, [enableReset]);

  return null;
}
