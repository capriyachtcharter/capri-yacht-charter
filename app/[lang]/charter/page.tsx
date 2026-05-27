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
      title: "Charter with a Skipper",
      description:
        "Private skipper-led yacht charter from Capri across the Amalfi Coast, Ischia, Procida and the Gulf of Naples. Daily and multi-day, fully tailored.",
    },
    it: {
      title: "Charter con skipper",
      description:
        "Charter privato di yacht con skipper da Capri verso la Costiera Amalfitana, Ischia, Procida e il Golfo di Napoli. Giornaliero e multi-day, su misura.",
    },
  });
}

export default function Page() {
  return <CharterPageClient />;
}
