import { notFound } from "next/navigation";
import { LanguageProvider } from "../i18n/LanguageProvider";
import { resolveTranslations, type Lang } from "../i18n/translations";
import { getLiveContent, getLiveFleet, getLiveTours } from "../../lib/cms/live-content";
import type { Tour } from "../data/tours";
import type { Boat } from "../data/fleet";

const LOCALES = ["en", "it"] as const;

/** Re-fetch the live copy from the CMS branch at most this often, in seconds (ISR).
 *  Must be a literal for Next's static analysis; keep in sync with CMS_CONTENT_REVALIDATE. */
export const revalidate = 15;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(LOCALES as readonly string[]).includes(lang)) notFound();

  const [live, liveFleet, liveTours] = await Promise.all([
    getLiveContent(),
    getLiveFleet<Boat>(),
    getLiveTours<Tour>(),
  ]);
  const content = resolveTranslations(live ?? undefined);

  return (
    <LanguageProvider
      initialLang={lang as Lang}
      content={content}
      fleet={liveFleet ?? undefined}
      tours={liveTours ?? undefined}
    >
      {children}
    </LanguageProvider>
  );
}
