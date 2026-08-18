import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const routes = [
  "",
  "/music",
  "/videos",
  "/shop",
  "/about",
  "/contact",
  "/privacy",
  "/legal-notice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://soheilfaghihnasiri.com";

  return routes.map((route) => ({
    url: `${siteUrl}/${routing.defaultLocale}${route}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, `${siteUrl}/${locale}${route}`]),
      ),
    },
  }));
}
