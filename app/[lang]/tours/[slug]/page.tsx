import type { Metadata } from "next";
import { tours, toursBySlug } from "../../../data/tours";
import JsonLd from "../../../components/JsonLd";
import TourDetailClient from "./TourDetailClient";

type Props = { params: Promise<{ lang: string; slug: string }> };

const SITE_URL = "https://capriyachtcharter.com";

export async function generateStaticParams() {
  // Cross-product of locales × tour slugs so SSG covers both languages.
  return tours.flatMap((t) => [
    { lang: "en", slug: t.slug },
    { lang: "it", slug: t.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const tour = toursBySlug[slug];
  if (!tour) return { title: "Tour not found" };

  const l: "en" | "it" = lang === "it" ? "it" : "en";
  const content = l === "it" ? tour.it : tour.en;
  const url = `/${l}/tours/${slug}`;
  const title = content.title;
  const description = content.short;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en/tours/${slug}`,
        it: `/it/tours/${slug}`,
        "x-default": `/en/tours/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      locale: l === "it" ? "it_IT" : "en_US",
      images: [{ url: tour.image, alt: content.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [tour.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  const tour = toursBySlug[slug];
  const l: "en" | "it" = lang === "it" ? "it" : "en";
  const content = tour ? (l === "it" ? tour.it : tour.en) : null;

  const tripLd = tour && content && {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: content.title,
    description: content.long || content.short,
    image: `${SITE_URL}${tour.image}`,
    url: `${SITE_URL}/${l}/tours/${slug}`,
    inLanguage: l,
    touristType: "Private yacht charter",
    provider: {
      "@type": "Organization",
      name: "Capri Yacht Charter",
      url: SITE_URL,
    },
    itinerary: content.itinerary?.map((step, i) => ({
      "@type": "Place",
      name: step,
      position: i + 1,
    })),
    offers: {
      "@type": "Offer",
      price: tour.priceFrom.replace(/[^\d.]/g, ""),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/${l}/tours/${slug}`,
    },
  };

  const breadcrumbLd = tour && content && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: l === "it" ? "Home" : "Home", item: `${SITE_URL}/${l}` },
      { "@type": "ListItem", position: 2, name: l === "it" ? "Tour" : "Tours", item: `${SITE_URL}/${l}/tours` },
      { "@type": "ListItem", position: 3, name: content.title, item: `${SITE_URL}/${l}/tours/${slug}` },
    ],
  };

  return (
    <>
      {tripLd && <JsonLd data={tripLd} />}
      {breadcrumbLd && <JsonLd data={breadcrumbLd} />}
      <TourDetailClient />
    </>
  );
}
