import type { Metadata } from "next";
import FleetPageClient from "./FleetPageClient";

const TITLE = "Our Fleet";
const DESCRIPTION =
  "Our private fleet of motor yachts and traditional gozzi for charters around Capri and the Bay of Naples. Specs, capacity and gallery for each vessel.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/fleet" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/fleet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <FleetPageClient />;
}
