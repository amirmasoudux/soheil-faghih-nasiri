import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { VideoCard } from "@/components/video-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { videos, youtubeChannelUrl } from "@/content/videos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "videos" });
  return { title: t("pageTitle"), description: t("pageIntro") };
}

export default async function VideosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("videos");

  const jsonLd = videos.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.title,
    thumbnailUrl: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
    uploadDate: `${video.approxDate}-01`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
  }));

  return (
    <div className="container-editorial py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading kicker={t("kicker")} title={t("pageTitle")} intro={t("pageIntro")} />
        <Button href={youtubeChannelUrl} external variant="secondary">
          {t("viewAll")}
        </Button>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
