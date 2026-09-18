import { routing } from "@/i18n/routing";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://soheilfaghihnasiri.com";

/**
 * Self-referencing canonical + full hreflang alternates for a route.
 * `path` excludes the locale prefix — "" for the homepage, "/privacy" for
 * the privacy page — and is expected to exist under every locale.
 */
export function localizedAlternates(locale: string, path = "") {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `/${loc}${path}`;
  }
  languages["x-default"] = `/${routing.defaultLocale}${path}`;

  return {
    canonical: `/${locale}${path}`,
    languages,
  };
}
