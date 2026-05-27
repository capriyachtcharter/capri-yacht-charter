import type { Metadata } from "next";
import ToursPageClient from "./ToursPageClient";

const TITLE = "Tours & Experiences";
const DESCRIPTION =
  "Eight private day tours around Capri, the Amalfi Coast, Positano, Ischia and Procida. Crew, fuel and VAT included. Pick yours or build it from scratch.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tours" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tours",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <ToursPageClient />;
}
