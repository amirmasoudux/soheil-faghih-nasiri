import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/content/artist";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

const links = [
  socialLinks.instagram,
  socialLinks.youtube,
  socialLinks.spotify,
  socialLinks.threads,
] as const;

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="container-editorial py-16 sm:py-24">
      <SectionHeading kicker={t("kicker")} title={t("title")} intro={t("body")} />
      <div className="mt-8">
        <Button href={socialLinks.instagram.url} external size="lg">
          {t("instagramCta")}
        </Button>
      </div>

      <div className="mt-16">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
          {t("followElsewhere")}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-(--color-border-strong) px-4 py-2 text-sm font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent-strong)"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
