import type { Metadata } from "next";
import { tours, toursBySlug } from "../../data/tours";
import TourDetailClient from "./TourDetailClient";

type Props = { params: Promise<{ slug: string }> };

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

export default function Page() {
  return <TourDetailClient />;
}
