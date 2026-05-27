import type { Metadata } from "next";
import { pageMetadata } from "../../i18n/metadata";
import TransfersPageClient from "./TransfersPageClient";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata({
    lang,
    path: "/transfers",
    en: {
      title: "VIP Yacht Transfers",
      description:
        "Private sea transfers between Capri, Naples, Sorrento, Positano and the Amalfi Coast. Fast, discreet and on your schedule — never on someone else's.",
    },
    it: {
      title: "Transfer VIP in yacht",
      description:
        "Transfer privati in mare tra Capri, Napoli, Sorrento, Positano e Costiera Amalfitana. Veloci, discreti e ai tuoi orari — non a quelli di altri.",
    },
  });
}

export default function Page() {
  return <TransfersPageClient />;
}
