import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "it"] as const;
const DEFAULT_LOCALE = "en";
type Locale = (typeof LOCALES)[number];

function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Detect locale from URL → cookie → Accept-Language → default. */
function detectLocale(req: NextRequest): Locale {
  // 1. URL prefix
  const seg = req.nextUrl.pathname.split("/")[1];
  if (isLocale(seg)) return seg;

  // 2. Cookie set by the language switcher
  const cookie = req.cookies.get("cyc-lang")?.value;
  if (isLocale(cookie)) return cookie;

  // 3. Accept-Language header (Italian if it appears anywhere)
  const al = (req.headers.get("accept-language") || "").toLowerCase();
  if (al.startsWith("it") || al.includes(",it") || al.includes("-it") || al.includes(" it")) {
    return "it";
  }

  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip Next.js internals, static files, and special files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest" ||
    /\.[a-z0-9]+$/i.test(pathname) // any path with a file extension
  ) {
    return NextResponse.next();
  }

  const seg = pathname.split("/")[1];
  const hasLocale = isLocale(seg);

  if (hasLocale) {
    // Pass through, surface the locale to server components via a header
    const res = NextResponse.next();
    res.headers.set("x-cyc-lang", seg);
    return res;
  }

  // No locale prefix → redirect to /{detected}{path}
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    // Run on every path except internals; we filter further above.
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|manifest\\.webmanifest|.*\\.[a-z0-9]+$).*)",
  ],
};
