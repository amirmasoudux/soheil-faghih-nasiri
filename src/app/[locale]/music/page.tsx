import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { MusicCard } from "@/components/music-card";
import { SectionHeading } from "@/components/section-heading";
import { musicReleases } from "@/content/music";
import { artist } from "@/content/artist";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "music" });
  return { title: t("pageTitle"), description: t("pageIntro") };
}

export default async function MusicPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("music");

  const jsonLd = musicReleases.map((release) => ({
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: release.title,
    byArtist: { "@type": "MusicGroup", name: artist.name },
    url: release.spotifyUrl,
    ...(release.year ? { datePublished: String(release.year) } : {}),
  }));

  return (
    <div className="container-editorial py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SectionHeading kicker={t("kicker")} title={t("pageTitle")} intro={t("pageIntro")} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {musicReleases.map((release) => (
          <MusicCard key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
}
