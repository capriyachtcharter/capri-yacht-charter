import type { Metadata } from "next";
import { tours, toursBySlug } from "../../data/tours";
import JsonLd from "../../components/JsonLd";
import TourDetailClient from "./TourDetailClient";

type Props = { params: Promise<{ slug: string }> };

const SITE_URL = "https://capriyachtcharter.com";

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = toursBySlug[slug];
  if (!tour) return { title: "Tour not found" };

  const en = tour.en;
  const url = `/tours/${slug}`;
  const title = en.title;
  const description = en.short;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      images: [{ url: tour.image, alt: en.title }],
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
  const { slug } = await params;
  const tour = toursBySlug[slug];

  const tripLd = tour && {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.en.title,
    description: tour.en.long || tour.en.short,
    image: `${SITE_URL}${tour.image}`,
    url: `${SITE_URL}/tours/${slug}`,
    touristType: "Private yacht charter",
    provider: {
      "@type": "Organization",
      name: "Capri Yacht Charter",
      url: SITE_URL,
    },
    itinerary: tour.en.itinerary?.map((step, i) => ({
      "@type": "Place",
      name: step,
      position: i + 1,
    })),
    offers: {
      "@type": "Offer",
      price: tour.priceFrom.replace(/[^\d.]/g, ""),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/tours/${slug}`,
    },
  };

  const breadcrumbLd = tour && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE_URL}/tours` },
      { "@type": "ListItem", position: 3, name: tour.en.title, item: `${SITE_URL}/tours/${slug}` },
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
