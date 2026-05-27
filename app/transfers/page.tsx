import type { Metadata } from "next";
import TransfersPageClient from "./TransfersPageClient";

const TITLE = "VIP Yacht Transfers";
const DESCRIPTION =
  "Private sea transfers between Capri, Naples, Sorrento, Positano and the Amalfi Coast. Fast, discreet and on your schedule — never on someone else's.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/transfers" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/transfers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <TransfersPageClient />;
}
