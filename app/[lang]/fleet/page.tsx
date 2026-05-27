import type { Metadata } from "next";
import { pageMetadata } from "../../i18n/metadata";
import FleetPageClient from "./FleetPageClient";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata({
    lang,
    path: "/fleet",
    en: {
      title: "Our Fleet",
      description:
        "Our private fleet of motor yachts and traditional gozzi for charters around Capri and the Bay of Naples. Specs, capacity and gallery for each vessel.",
    },
    it: {
      title: "La nostra flotta",
      description:
        "I nostri yacht privati per i charter intorno a Capri e il Golfo di Napoli. Specifiche, capacità e galleria di ogni imbarcazione.",
    },
  });
}

export default function Page() {
  return <FleetPageClient />;
}
