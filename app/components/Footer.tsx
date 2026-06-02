"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "../i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { toursByLegacyId } from "../data/tours";
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
            {t.tours.list.map((tour) => {
              const detail = toursByLegacyId[tour.id];
              const href = detail ? `/tours/${detail.slug}` : "/tours";
              return (
                <Link key={tour.id} href={href} className="footer-link">{tour.title}</Link>
              );
            })}
            <Link href={path("/charter")} className="footer-link">{t.beyond.transferTitle}</Link>
            <Link href={path("/tours#mini-cruises")} className="footer-link">{t.beyond.skipperTitle}</Link>
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
            <a href="https://maps.apple.com/?q=Marina+Grande+Capri" target="_blank" rel="noopener" className="footer-link">Via Marina Grande 282, Capri</a>
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
                <svg viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M45.4 177.7 32 224l46.3-13.4a96 96 0 1 0-32.9-32.9Z" />
                  <path d="M152 176a72.08 72.08 0 0 1-72-72 24 24 0 0 1 24-24c2.9 0 5.6 1.5 7.1 4l11.5 23c1.4 2.8 1 6.1-1.1 8.5l-9.8 11c.8 1.6 5.7 11 16.8 22.2 11.1 11.2 20.7 16.2 22.2 16.8l11-9.8c2.3-2.1 5.6-2.5 8.5-1.1l23 11.5c2.5 1.5 4 4.2 4 7.1a24 24 0 0 1-24 24Z" />
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
