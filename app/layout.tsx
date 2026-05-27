import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-logo",
  display: "swap",
});

const SITE_URL = "https://capriyachtcharter.com";
const SITE_NAME = "Capri Yacht Charter";
const DEFAULT_TITLE = "Capri Yacht Charter — Private Sea Experiences";
const DEFAULT_DESCRIPTION =
  "Entirely private yacht journeys around Capri and the Amalfi Coast. No shared boats. No fixed schedules. Just you, the captain, and the Mediterranean.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — Capri Yacht Charter",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: ["it_IT"],
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Faraglioni of Capri seen from the sea — Capri Yacht Charter",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#1A2433",
  colorScheme: "light",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Middleware sets x-cyc-lang on the request, so <html lang> matches the
  // URL even though the root layout sits above the [lang] dynamic segment.
  const h = await headers();
  const lang = h.get("x-cyc-lang") === "it" ? "it" : "en";

  return (
    <html lang={lang} className={`${cormorant.variable} ${jakarta.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
