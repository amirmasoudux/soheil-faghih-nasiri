"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const labels: Record<string, string> = { en: "EN", fr: "FR" };

export function LanguageSwitcher() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="flex items-center gap-1 rounded-full border border-(--color-border) p-1 text-xs"
    >
      {routing.locales.map((locale) => {
        const active = params.locale === locale;
        return (
          <button
            key={locale}
            type="button"
            aria-current={active ? "true" : undefined}
            onClick={() => router.replace(pathname, { locale })}
            className={`rounded-full px-2.5 py-1 font-medium transition-colors duration-200 ${
              active
                ? "bg-(--color-accent) text-(--color-accent-contrast)"
                : "text-(--color-fg-muted) hover:text-(--color-fg)"
            }`}
          >
            {labels[locale] ?? locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
