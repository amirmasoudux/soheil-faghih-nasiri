"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { artist } from "@/content/artist";

export function HomeConcertSection() {
  const t = useTranslations("concert");

  return (
    <section className="border-t border-(--color-border) bg-(--color-bg)">
      <div className="grid lg:grid-cols-2">
        <div className="relative order-2 h-[50svh] sm:h-[60svh] lg:order-1 lg:h-auto lg:min-h-[640px]">
          <Image
            src={artist.heroImage}
            alt="Soheil Faghih Nasiri performing guitar with Parastoo Ahmadi's band at the Deir-e Gachin Caravanserai"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>

        <div className="order-1 flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:order-2 lg:px-16 lg:py-24">
          <Reveal>
            <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-(--color-accent)">
              {t("kicker")}
            </p>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-[0.95] text-(--color-fg) sm:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-(--color-fg-muted) sm:text-lg">
              {t("body")}
            </p>
            <div className="font-mono-label mt-8 space-y-1.5 border-l-2 border-(--color-accent)/40 pl-4 text-xs uppercase tracking-[0.15em] text-(--color-fg-subtle)">
              <p>{t("creditVocals")}</p>
              <p>{t("creditGuitar")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
