import type { Metadata } from "next";
import { pageMetadata } from "../../i18n/metadata";
import CharterPageClient from "./CharterPageClient";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata({
    lang,
    path: "/charter",
    en: {
      title: "Short-term Yacht Hire",
      description:
        "Private yacht hire with a dedicated captain from Capri to the Amalfi Coast, Ischia, Procida and the Gulf of Naples.",
    },
    it: {
      title: "Noleggio breve",
      description:
        "Noleggio privato di yacht con capitano dedicato da Capri verso la Costiera Amalfitana, Ischia, Procida e il Golfo di Napoli.",
    },
  });
}

export default function Page() {
  return <CharterPageClient />;
}
