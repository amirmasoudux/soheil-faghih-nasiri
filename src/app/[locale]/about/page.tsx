import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { artist, socialLinks } from "@/content/artist";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div className="container-editorial py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-(--color-border) lg:mx-0">
          <Image
            src={artist.avatarImage}
            alt={artist.name}
            fill
            sizes="(min-width: 1024px) 40vw, 80vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <SectionHeading kicker={t("kicker")} title={t("title")} />
          <p className="mt-6 max-w-xl text-base text-(--color-fg-muted) sm:text-lg">
            {t("body1")}
          </p>
          <p className="mt-4 max-w-xl text-base text-(--color-fg-muted) sm:text-lg">
            {t("body2")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={socialLinks.instagram.url} external>
              Instagram
            </Button>
            <Button href={socialLinks.spotify.url} external variant="secondary">
              Spotify
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
