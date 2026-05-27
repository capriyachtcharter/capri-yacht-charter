"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the viewport grows past the breakpoint
  // (e.g. user rotates phone to landscape or resizes the window).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 521px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
        <div className="header-inner">
          <div className="header-left">
            <Link href="/" className="logo" aria-label="Capri Yacht Charter">
              <img src="/logo-mark-navy.png" alt="" className="logo-img" />
              <span className="logo-text-wrap">
                <span className="logo-text">Capri Yacht Charter</span>
                <span className="logo-subtitle">Since 2002</span>
              </span>
            </Link>
            <nav className="nav">
              <Link href="/tours" className="nav-link">{t.nav.experiences}</Link>
              <Link href="/fleet" className="nav-link">{t.nav.fleet}</Link>
              <Link href="/charter" className="nav-link">{t.nav.charter}</Link>
              <Link href="/transfers" className="nav-link">{t.nav.transfers}</Link>
            </nav>
          </div>
          <div className="header-right">
            <LanguageSwitcher />
            <Link href="/contact" className="btn-header">
              {t.nav.whatsapp}
            </Link>
            <button
              type="button"
              className={`header-burger${menuOpen ? " is-open" : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span aria-hidden />
              <span aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      >
        <nav className="mobile-menu-nav" onClick={(e) => e.stopPropagation()}>
          <Link href="/tours" className="mobile-menu-link" onClick={closeMenu}>
            {t.nav.experiences}
          </Link>
          <Link href="/fleet" className="mobile-menu-link" onClick={closeMenu}>
            {t.nav.fleet}
          </Link>
          <Link href="/charter" className="mobile-menu-link" onClick={closeMenu}>
            {t.nav.charter}
          </Link>
          <Link href="/transfers" className="mobile-menu-link" onClick={closeMenu}>
            {t.nav.transfers}
          </Link>
          <Link href="/#manifesto" className="mobile-menu-link" onClick={closeMenu}>
            {t.nav.story}
          </Link>
          <Link href="/contact" className="mobile-menu-link mobile-menu-link-accent" onClick={closeMenu}>
            {t.nav.contact}
          </Link>
        </nav>
      </div>
    </>
  );
}
