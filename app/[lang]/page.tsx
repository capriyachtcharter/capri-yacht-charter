import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import Tours from "../components/Tours";
import MiniCruises from "../components/MiniCruises";
import BeyondTours from "../components/BeyondTours";
import Fleet from "../components/Fleet";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import ConciergeFab from "../components/ConciergeFab";
import JsonLd from "../components/JsonLd";
import { pageMetadata } from "../i18n/metadata";

const SITE_URL = "https://capriyachtcharter.com";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata({
    lang,
    path: "/",
    en: {
      title: "Capri Yacht Charter — Private Sea Experiences",
      description:
        "Entirely private yacht journeys around Capri and the Amalfi Coast. No shared boats. No fixed schedules. Just you, the captain, and the Mediterranean.",
    },
    it: {
      title: "Capri Yacht Charter — Esperienze Private in Mare",
      description:
        "Yacht charter privati intorno a Capri e la Costiera Amalfitana. Nessuna barca condivisa, nessun orario fisso. Solo tu, il capitano e il Mediterraneo.",
    },
  });
}

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Capri Yacht Charter",
  alternateName: "Capri Yacht",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mark-navy.png`,
  description:
    "Private yacht experiences around Capri and the Amalfi Coast. On sea since 2002.",
  foundingDate: "2002",
  areaServed: [
    { "@type": "Place", name: "Capri" },
    { "@type": "Place", name: "Amalfi Coast" },
    { "@type": "Place", name: "Gulf of Naples" },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Capri Yacht Charter",
  url: SITE_URL,
  inLanguage: ["en", "it"],
  publisher: { "@type": "Organization", name: "Capri Yacht Charter" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={websiteLd} />
      <Header />
      <Hero />
      <div className="hero-spacer" />
      <div className="content-layer">
        <Tours />
        <MiniCruises />
        <BeyondTours />
        <Fleet />
        <Manifesto />
        <Reviews />
        <Footer />
      </div>
      <ScrollReveal />
      <ConciergeFab />
    </>
  );
}
