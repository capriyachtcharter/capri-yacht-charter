"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "../i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { boatByLegacyId } from "../data/fleet";

export default function Footer() {
  const { t, path } = useLang();
  const pathname = usePathname();
  const showCta = pathname === "/";
  return (
    <footer className="footer" id="contact">
      <div className="footer-blue">
        {showCta && (
          <div className="footer-cta">
            <div className="footer-cta-mark" aria-hidden>
              <img src="/logo-mark.png" alt="" className="footer-cta-logo" />
            </div>
            <h3 className="footer-cta-title">
              {t.footer.cta.title} <span className="accent-italic">{t.footer.cta.titleAccent}</span>
            </h3>
            <p className="footer-cta-text">
              {t.footer.cta.text.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br className="footer-cta-br" />}
                </span>
              ))}
            </p>
            <div className="footer-cta-buttons">
              <Link href={path("/tours")} className="btn-footer-primary">{t.footer.cta.primary}</Link>
              <Link href={path("/contact")} className="btn-footer-secondary">
                {t.footer.cta.secondary}
              </Link>
            </div>
          </div>
        )}

        <div className="footer-grid">
          <div>
            <div className="footer-col-title">{t.footer.cols.experiencesTitle}</div>
            <Link href={path("/tours")} className="footer-link">{t.footer.cols.services.tours}</Link>
            <Link href={path("/tours")} className="footer-link">{t.footer.cols.services.custom}</Link>
            <Link href={path("/tours#mini-cruises")} className="footer-link">{t.footer.cols.services.cruises}</Link>
            <Link href={path("/charter")} className="footer-link">{t.footer.cols.services.charter}</Link>
          </div>
          <div>
            <div className="footer-col-title">{t.footer.cols.fleetTitle}</div>
            {t.fleet.boats.map((b) => {
              const detail = boatByLegacyId[b.id];
              const href = detail ? `/fleet/${detail.slug}` : "/fleet";
              return (
                <Link key={b.id} href={href} className="footer-link">{b.name} · {b.length}</Link>
              );
            })}
          </div>
          <div>
            <div className="footer-col-title">{t.footer.cols.contactTitle}</div>
            <a href="tel:+393335741333" className="footer-link">+39 333 574 1333</a>
            <a href="https://wa.me/393335741333" target="_blank" rel="noopener" className="footer-link">WhatsApp</a>
            <a href="mailto:info@capriyachtcharter.com" className="footer-link">info@capriyachtcharter.com</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Via+Marina+Grande+282+Capri" target="_blank" rel="noopener" className="footer-link">Via Marina Grande 282, Capri</a>
          </div>
          <div>
            <div className="footer-col-title">{t.footer.cols.hoursTitle}</div>
            <span className="footer-link is-static">{t.footer.cols.season}</span>
            <span className="footer-link is-static">{t.footer.cols.timetable}</span>
            <span className="footer-link is-static">{t.footer.cols.booking}</span>
          </div>
        </div>
      </div>

      <div className="footer-black">
        <div className="footer-black-inner">
          <div className="footer-top-row">
            <Link href={path("/")} className="footer-logo-mark" aria-label="Capri Yacht Charter">
              <img src="/logo-mark.png" alt="" className="footer-logo-mark-img" />
              <span className="footer-logo-text-wrap">
                <span className="footer-logo-name">Capri Yacht Charter</span>
                <span className="footer-logo-subtitle">Since 2002</span>
              </span>
            </Link>
            <div className="footer-social">
              <a href="https://instagram.com/capriyachtcharter" target="_blank" rel="noopener" aria-label="Instagram" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://facebook.com/capriyachtcharter" target="_blank" rel="noopener" aria-label="Facebook" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://wa.me/393335741333" target="_blank" rel="noopener" aria-label="WhatsApp" className="footer-social-link">
                <svg viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.3 0-.5 0-.2 0-.5.1-.7.4-.2.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>{t.footer.bottom}</div>
            <div className="footer-legal">
              <LanguageSwitcher />
              <Link className="footer-legal-link" href={path("/privacy")}>{t.footer.legal.privacy}</Link>
              <Link className="footer-legal-link" href={path("/terms")}>{t.footer.legal.terms}</Link>
              <Link className="footer-legal-link" href={path("/cookie")}>{t.footer.legal.cookie}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
