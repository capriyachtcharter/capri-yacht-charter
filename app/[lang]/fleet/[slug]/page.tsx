import type { Metadata } from "next";
import { fleet, boatBySlug } from "../../../data/fleet";
import JsonLd from "../../../components/JsonLd";
import BoatDetailClient from "./BoatDetailClient";

type Props = { params: Promise<{ lang: string; slug: string }> };

const SITE_URL = "https://capriyachtcharter.com";

export async function generateStaticParams() {
  return fleet.flatMap((b) => [
    { lang: "en", slug: b.slug },
    { lang: "it", slug: b.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const boat = boatBySlug[slug];
  if (!boat) return { title: "Vessel not found" };

  const l: "en" | "it" = lang === "it" ? "it" : "en";
  const content = l === "it" ? boat.it : boat.en;
  const url = `/${l}/fleet/${slug}`;
  const title = `${content.name} — ${content.model}`;
  const description = content.tagline || content.description?.slice(0, 160) ||
    (l === "it"
      ? `Scopri ${content.name}, parte della nostra flotta privata intorno a Capri.`
      : `Discover ${content.name}, part of our private fleet around Capri.`);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en/fleet/${slug}`,
        it: `/it/fleet/${slug}`,
        "x-default": `/en/fleet/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      locale: l === "it" ? "it_IT" : "en_US",
      images: [{ url: boat.cover, alt: `${content.name} — ${content.model}` }],
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
  const { lang, slug } = await params;
  const boat = boatBySlug[slug];
  const l: "en" | "it" = lang === "it" ? "it" : "en";

  const breadcrumbLd = boat && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${l}` },
      { "@type": "ListItem", position: 2, name: l === "it" ? "Flotta" : "Fleet", item: `${SITE_URL}/${l}/fleet` },
      { "@type": "ListItem", position: 3, name: (l === "it" ? boat.it.name : boat.en.name), item: `${SITE_URL}/${l}/fleet/${slug}` },
    ],
  };

  return (
    <>
      {breadcrumbLd && <JsonLd data={breadcrumbLd} />}
      <BoatDetailClient />
    </>
  );
}
