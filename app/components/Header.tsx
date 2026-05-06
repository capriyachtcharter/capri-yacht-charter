"use client";

import { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
      <div className="header-inner">
        <a href="#" className="logo" aria-label="Capri Yacht Charter">
          <img src="/logo-mark-navy.png" alt="" className="logo-img" />
          <span className="logo-text">Capri Yacht Charter</span>
        </a>
        <nav className="nav">
          <a href="#" className="nav-link">{t.nav.home}</a>
          <a href="#tours" className="nav-link">{t.nav.experiences}</a>
          <a href="#fleet-primatist-g65" className="nav-link">{t.nav.fleet}</a>
          <a href="#manifesto" className="nav-link">{t.nav.story}</a>
          <a href="#contact" className="nav-link">{t.nav.contact}</a>
        </nav>
        <a href="https://wa.me/393335741333" target="_blank" rel="noopener" className="btn-header">{t.nav.whatsapp}</a>
      </div>
    </header>
  );
}
