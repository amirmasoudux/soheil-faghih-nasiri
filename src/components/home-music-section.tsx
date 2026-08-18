"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import { MusicCard } from "@/components/music-card";
import { Reveal } from "@/components/reveal";
import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { musicReleases } from "@/content/music";
import { socialLinks } from "@/content/artist";

export function HomeMusicSection() {
  const t = useTranslations("music");

  return (
    <section id="music" className="py-20 sm:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading kicker={t("kicker")} title={t("title")} intro={t("intro")} />
            <Button href={socialLinks.spotify.url} external size="md" variant="secondary">
              {t("viewAll")}
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <Carousel label={t("title")}>
            {musicReleases.slice(0, 3).map((release) => (
              <MusicCard key={release.id} release={release} />
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
