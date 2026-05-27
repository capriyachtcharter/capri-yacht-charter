import Link from "next/link";
import { headers } from "next/headers";
import type { Metadata } from "next";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for doesn't exist. Sail back to Capri Yacht Charter.",
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  // not-found.tsx can't receive route params, so we pick locale up from the
  // request header the middleware sets.
  const h = await headers();
  const lang = h.get("x-cyc-lang") === "it" ? "it" : "en";
  const isIt = lang === "it";

  const title = isIt ? "Fuori rotta." : "Off course.";
  const lede = isIt
    ? "La pagina che cercavi è andata alla deriva. Ti riportiamo al porto sicuro."
    : "The page you were looking for has drifted away. Let’s get you back to safe harbour.";
  const home = isIt ? "Torna alla home" : "Back to home";
  const tours = isIt ? "Scopri i tour" : "Explore tours";
  const contact = isIt ? "Contattaci" : "Contact us";

  return (
    <PageShell>
      <section className="page-hero" aria-labelledby="notfound-title">
        <div className="page-hero-inner">
          <div className="eyebrow">404</div>
          <h1 id="notfound-title" className="page-hero-title">{title}</h1>
          <p className="page-hero-lede">{lede}</p>
          <div className="page-hero-cta-row">
            <Link href={`/${lang}`} className="btn-primary">{home}</Link>
            <Link href={`/${lang}/tours`} className="btn-secondary">{tours}</Link>
            <Link href={`/${lang}/contact`} className="btn-secondary">{contact}</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
