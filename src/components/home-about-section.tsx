"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { artist } from "@/content/artist";

const goshtasbAcademyUrl = "https://goshtasbmusic.com/en/";

export function HomeAboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="border-t border-(--color-border) py-20 sm:py-28">
      <div className="container-editorial grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <Reveal>
          <SectionHeading kicker={t("kicker")} title={t("title")} />
          <p className="mt-6 max-w-xl text-base text-(--color-fg-muted) sm:text-lg">
            {t("body1")}
          </p>
          <p className="mt-4 max-w-xl text-base text-(--color-fg-muted) sm:text-lg">
            {t("body2")}
          </p>
          <p className="mt-4 max-w-xl text-base text-(--color-fg-muted) sm:text-lg">
            {t("body3")}
          </p>
          <div className="mt-8">
            <Button href={goshtasbAcademyUrl} external variant="secondary">
              {t("academyCta")}
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-xl lg:mx-0">
            <Image
              src={artist.aboutImage}
              alt={artist.name}
              fill
              unoptimized
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
