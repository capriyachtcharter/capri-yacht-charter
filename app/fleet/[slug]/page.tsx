import type { Metadata } from "next";
import { fleet, boatBySlug } from "../../data/fleet";
import JsonLd from "../../components/JsonLd";
import BoatDetailClient from "./BoatDetailClient";

type Props = { params: Promise<{ slug: string }> };

const SITE_URL = "https://capriyachtcharter.com";

export async function generateStaticParams() {
  return fleet.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const boat = boatBySlug[slug];
  if (!boat) return { title: "Vessel not found" };

  const en = boat.en;
  const url = `/fleet/${slug}`;
  const title = `${en.name} — ${en.model}`;
  const description = en.tagline || en.description?.slice(0, 160) || `Discover ${en.name}, part of our private fleet around Capri.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      images: [{ url: boat.cover, alt: `${en.name} — ${en.model}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [boat.cover],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const boat = boatBySlug[slug];

  const breadcrumbLd = boat && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Fleet", item: `${SITE_URL}/fleet` },
      { "@type": "ListItem", position: 3, name: boat.en.name, item: `${SITE_URL}/fleet/${slug}` },
    ],
  };

  return (
    <>
      {breadcrumbLd && <JsonLd data={breadcrumbLd} />}
      <BoatDetailClient />
    </>
  );
}
