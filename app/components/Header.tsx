"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
          <a href="#" className="nav-link">Home</a>
          <div className="nav-dropdown">
            <a href="#esperienze" className="nav-link">Esperienze</a>
            <div className="nav-dropdown-menu">
              <a href="#tour-privati">Tour Privati</a>
              <a href="#mini-crociere">Mini Crociere</a>
              <a href="#noleggio">Noleggio</a>
            </div>
          </div>
          <div className="nav-dropdown">
            <a href="#flotta" className="nav-link">Flotta</a>
            <div className="nav-dropdown-menu">
              <a href="#gabbiano">Gabbiano</a>
              <a href="#tramontana">Tramontana</a>
              <a href="#libeccio">Libeccio</a>
            </div>
          </div>
          <a href="#storia" className="nav-link">Storia</a>
          <a href="#contatti" className="nav-link">Contatti</a>
        </nav>
        <button className="btn-header">WhatsApp</button>
      </div>
    </header>
  );
}
