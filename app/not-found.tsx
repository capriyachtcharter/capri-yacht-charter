import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "./components/PageShell";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for doesn't exist. Sail back to Capri Yacht Charter.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="page-hero" aria-labelledby="notfound-title">
        <div className="page-hero-inner">
          <div className="eyebrow">404</div>
          <h1 id="notfound-title" className="page-hero-title">
            Off course.
          </h1>
          <p className="page-hero-lede">
            The page you were looking for has drifted away. Let&rsquo;s get you back to safe harbour.
          </p>
          <div className="page-hero-cta-row">
            <Link href="/" className="btn-primary">Back to home</Link>
            <Link href="/tours" className="btn-secondary">Explore tours</Link>
            <Link href="/contact" className="btn-secondary">Contact us</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
