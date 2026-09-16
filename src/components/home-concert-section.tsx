"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { artist } from "@/content/artist";

export function HomeConcertSection() {
  const t = useTranslations("concert");

  return (
    <section className="border-t border-(--color-border) bg-(--color-bg) py-20 sm:py-28">
      <div className="container-editorial grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-3/2 w-full max-w-lg overflow-hidden rounded-xl border border-(--color-border)">
            <Image
              src={artist.heroImage}
              alt="Soheil Faghih Nasiri performing guitar with Parastoo Ahmadi's band at the Deir-e Gachin Caravanserai"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              style={{ objectPosition: "center 38%" }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-(--color-accent)">
            {t("kicker")}
          </p>
          <h2 className="font-display mt-4 text-2xl font-bold uppercase leading-[1.05] text-(--color-fg) sm:text-3xl lg:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-(--color-fg-muted) sm:text-base">
            {t("body")}
          </p>
          <div className="font-mono-label mt-7 space-y-1.5 border-l-2 border-(--color-accent)/40 pl-4 text-xs uppercase tracking-[0.15em] text-(--color-fg-subtle)">
            <p>{t("creditVocals")}</p>
            <p>{t("creditGuitar")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
