import type { Metadata } from "next";
import CharterPageClient from "./CharterPageClient";

const TITLE = "Charter with a Skipper";
const DESCRIPTION =
  "Private skipper-led yacht charter from Capri across the Amalfi Coast, Ischia, Procida and the Gulf of Naples. Daily and multi-day, fully tailored.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/charter" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/charter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <CharterPageClient />;
}
