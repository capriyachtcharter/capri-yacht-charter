import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

const TITLE = "Contact";
const DESCRIPTION =
  "Plan your private day at sea — WhatsApp, phone and email. Capri Yacht Charter, on sea since 2002.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <ContactPageClient />;
}
