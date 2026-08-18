"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import { VideoCard } from "@/components/video-card";
import { Reveal } from "@/components/reveal";
import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { videos, youtubeChannelUrl } from "@/content/videos";

export function HomeVideosSection() {
  const t = useTranslations("videos");

  return (
    <section id="videos" className="border-t border-(--color-border) py-20 sm:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading kicker={t("kicker")} title={t("title")} intro={t("intro")} />
            <Button href={youtubeChannelUrl} external size="md" variant="secondary">
              {t("viewAll")}
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <Carousel label={t("title")}>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
