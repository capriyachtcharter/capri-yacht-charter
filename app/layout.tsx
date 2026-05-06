import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageProvider";

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

export const metadata: Metadata = {
  title: "Capri Yacht Charter — Private Sea Experiences",
  description:
    "Entirely private yacht journeys around Capri and the Amalfi Coast. No shared boats. No fixed schedules. Just you, the captain, and the Mediterranean.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${jakarta.variable} ${dmSerif.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
