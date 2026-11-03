"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "../i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { boatByLegacyId } from "../data/fleet";

export default function Footer() {
  const { t, path, f } = useLang();
  const contact = t.footer.contact;
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
              <span {...f("footer.cta.title")}>{t.footer.cta.title}</span> <span className="accent-italic" {...f("footer.cta.titleAccent")}>{t.footer.cta.titleAccent}</span>
            </h3>
            <p className="footer-cta-text" {...f("footer.cta.text", "multiline")}>
              {t.footer.cta.text.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br className="footer-cta-br" />}
                </span>
              ))}
            </p>
            <div className="footer-cta-buttons">
              <Link href={path("/tours")} className="btn-footer-primary" {...f("footer.cta.primary")}>{t.footer.cta.primary}</Link>
              <Link href={path("/contact")} className="btn-footer-secondary" {...f("footer.cta.secondary")}>
                {t.footer.cta.secondary}
              </Link>
            </div>
          </div>
        )}

        <div className="footer-grid">
          <div>
            <div className="footer-col-title" {...f("footer.cols.experiencesTitle")}>{t.footer.cols.experiencesTitle}</div>
            <Link href={path("/tours")} className="footer-link" {...f("footer.cols.services.tours")}>{t.footer.cols.services.tours}</Link>
            <Link href={path("/tailor-made")} className="footer-link" {...f("footer.cols.services.custom")}>{t.footer.cols.services.custom}</Link>
            <Link href={path("/charter")} className="footer-link" {...f("footer.cols.services.charter")}>{t.footer.cols.services.charter}</Link>
          </div>
          <div>
            <div className="footer-col-title" {...f("footer.cols.fleetTitle")}>{t.footer.cols.fleetTitle}</div>
            {t.fleet.boats.map((b, i) => {
              const detail = boatByLegacyId[b.id];
              const href = detail ? path(`/fleet/${detail.slug}`) : path("/fleet");
              return (
                <Link key={b.id} href={href} className="footer-link"><span {...f(`fleet.boats.${i}.name`)}>{b.name}</span> · <span {...f(`fleet.boats.${i}.length`)}>{b.length}</span></Link>
              );
            })}
          </div>
          <div>
            <div className="footer-col-title" {...f("footer.cols.contactTitle")}>{t.footer.cols.contactTitle}</div>
            <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="footer-link" {...f("footer.contact.phone")}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="footer-link" {...f("footer.contact.email")}>{contact.email}</a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${contact.address.replace(/,/g, "").trim().split(/\s+/).map(encodeURIComponent).join("+")}`} target="_blank" rel="noopener" className="footer-link" {...f("footer.contact.address")}>{contact.address}</a>
          </div>
          <div>
            <div className="footer-col-title" {...f("footer.cols.hoursTitle")}>{t.footer.cols.hoursTitle}</div>
            <span className="footer-link is-static" {...f("footer.cols.season")}>{t.footer.cols.season}</span>
            <span className="footer-link is-static" {...f("footer.cols.timetable")}>{t.footer.cols.timetable}</span>
            <span className="footer-link is-static" {...f("footer.cols.booking")}>{t.footer.cols.booking}</span>
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
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div {...f("footer.bottom")}>{t.footer.bottom}</div>
            <div className="footer-legal">
              <LanguageSwitcher />
              <Link className="footer-legal-link" href={path("/privacy")} {...f("footer.legal.privacy")}>{t.footer.legal.privacy}</Link>
              <Link className="footer-legal-link" href={path("/terms")} {...f("footer.legal.terms")}>{t.footer.legal.terms}</Link>
              <Link className="footer-legal-link" href={path("/cookie")} {...f("footer.legal.cookie")}>{t.footer.legal.cookie}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
