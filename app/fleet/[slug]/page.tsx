import type { Metadata } from "next";
import { fleet, boatBySlug } from "../../data/fleet";
import BoatDetailClient from "./BoatDetailClient";

type Props = { params: Promise<{ slug: string }> };

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

export default function Page() {
  return <BoatDetailClient />;
}
