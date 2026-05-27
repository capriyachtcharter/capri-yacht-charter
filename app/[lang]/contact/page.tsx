import type { Metadata } from "next";
import { pageMetadata } from "../../i18n/metadata";
import ContactPageClient from "./ContactPageClient";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata({
    lang,
    path: "/contact",
    en: {
      title: "Contact",
      description:
        "Plan your private day at sea — WhatsApp, phone and email. Capri Yacht Charter, on sea since 2002.",
    },
    it: {
      title: "Contatti",
      description:
        "Programma la tua giornata privata in mare — WhatsApp, telefono ed email. Capri Yacht Charter, in mare dal 2002.",
    },
  });
}

export default function Page() {
  return <ContactPageClient />;
}
