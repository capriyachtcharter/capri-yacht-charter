import type { Metadata } from "next";
import { pageMetadata } from "../../i18n/metadata";
import TailorMadePageClient from "./TailorMadePageClient";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata({
    lang,
    path: "/tailor-made",
    en: {
      title: "Tailor-made Yacht Tour",
      description:
        "A private yacht tour designed around you: dedicated captain, no fixed itinerary, full day or multi-day from Capri across the Amalfi Coast and the Gulf of Naples.",
    },
    it: {
      title: "Tour su misura",
      description:
        "Un tour privato in yacht disegnato su di te: capitano dedicato, nessun itinerario imposto, giornata intera o multi-day da Capri verso la Costiera Amalfitana e il Golfo di Napoli.",
    },
  });
}

export default function Page() {
  return <TailorMadePageClient />;
}
