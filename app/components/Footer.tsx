"use client";

import { useLang } from "../i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer" id="contact">
      <div className="footer-blue">
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
            <a href="#tour-island" className="btn-footer-primary">{t.footer.cta.primary}</a>
            <a href="https://wa.me/393335741333" target="_blank" rel="noopener" className="btn-footer-secondary">
              {t.footer.cta.secondary}
            </a>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <div className="footer-col-title">{t.footer.cols.experiencesTitle}</div>
            {t.tours.list.map((tour) => (
              <a key={tour.id} href={`#${tour.id}`} className="footer-link">{tour.title}</a>
            ))}
            <a href="/transfers" className="footer-link">{t.beyond.transferTitle}</a>
            <a href="/skipper-charter" className="footer-link">{t.beyond.skipperTitle}</a>
          </div>
          <div>
            <div className="footer-col-title">{t.footer.cols.fleetTitle}</div>
            {t.fleet.boats.map((b) => (
              <a key={b.id} href={`#fleet-${b.id}`} className="footer-link">{b.name} · {b.length}</a>
            ))}
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
            <div className="footer-logo">Capri Yacht Charter</div>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/>
                </svg>
              </a>
              <a href="https://wa.me/393335741333" target="_blank" rel="noopener" aria-label="WhatsApp" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.3 0-.5 0-.2 0-.5.1-.7.4-.2.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3ZM12 22a10 10 0 0 1-5-1.4L2 22l1.4-5A10 10 0 1 1 12 22Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>{t.footer.bottom}</div>
            <div className="footer-legal">
              <LanguageSwitcher />
              <a className="footer-legal-link" href="/privacy">{t.footer.legal.privacy}</a>
              <a className="footer-legal-link" href="/terms">{t.footer.legal.terms}</a>
              <a className="footer-legal-link" href="/cookie">{t.footer.legal.cookie}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
