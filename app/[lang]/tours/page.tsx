import type { Metadata } from "next";
import { pageMetadata } from "../../i18n/metadata";
import ToursPageClient from "./ToursPageClient";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata({
    lang,
    path: "/tours",
    en: {
      title: "Tours & Experiences",
      description:
        "Eight private day tours around Capri, the Amalfi Coast, Positano, Ischia and Procida. Crew, fuel and VAT included. Pick yours or build it from scratch.",
    },
    it: {
      title: "Tour & esperienze",
      description:
        "Otto giornate private in mare intorno a Capri, Costiera Amalfitana, Positano, Ischia e Procida. Equipaggio, carburante e IVA inclusi.",
    },
  });
}

export default function Page() {
  return <ToursPageClient />;
}
