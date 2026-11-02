import { notFound } from "next/navigation";
import { LanguageProvider } from "../i18n/LanguageProvider";
import { MostoOverlay } from "@mosto-cms/next/overlay";
import { resolveTranslations, type Lang } from "../i18n/translations";
import { getLiveContent, getLiveFleet, getLiveTours } from "../../lib/cms/live-content";
import type { Tour } from "../data/tours";
import type { Boat } from "../data/fleet";
import { OVERLAY_ORIGINS } from "../../mosto-cms.config";

const LOCALES = ["en", "it"] as const;

/** Re-render at most this often, in seconds (ISR). A publish through /api/mosto-cms
 *  expires the cached content and pages right away anyway. Must be a literal. */
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
      <MostoOverlay allowedOrigins={OVERLAY_ORIGINS} />
    </LanguageProvider>
  );
}
