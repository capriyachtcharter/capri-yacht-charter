"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import ContactPopover from "./ContactPopover";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
        <div className="header-inner">
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
            <Link href="/#manifesto" className="nav-link">{t.nav.story}</Link>
          </nav>
          <div className="header-right">
            <LanguageSwitcher />
            <button
              type="button"
              className="btn-header"
              onClick={() => setContactOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={contactOpen}
            >
              {t.nav.whatsapp}
            </button>
          </div>
        </div>
      </header>
      <ContactPopover open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
