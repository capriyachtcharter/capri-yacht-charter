import { notFound } from "next/navigation";
import { LanguageProvider } from "../i18n/LanguageProvider";
import type { Lang } from "../i18n/translations";

const LOCALES = ["en", "it"] as const;

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

  return <LanguageProvider initialLang={lang as Lang}>{children}</LanguageProvider>;
}
