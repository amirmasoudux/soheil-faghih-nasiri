"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { artist } from "@/content/artist";

export function HomeAboutSection() {
  const t = useTranslations("about");

  return (
    <section className="border-t border-(--color-border) py-20 sm:py-28">
      <div className="container-editorial grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-(--color-border) lg:mx-0">
            <Image
              src={artist.avatarImage}
              alt={artist.name}
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading kicker={t("kicker")} title={t("title")} />
          <p className="mt-6 max-w-xl text-base text-(--color-fg-muted) sm:text-lg">
            {t("body1")}
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              {t("cta")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
