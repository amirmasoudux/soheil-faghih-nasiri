"use client";

import { useTranslations } from "next-intl";
import { Marquee } from "@/components/marquee";
import { artist } from "@/content/artist";

export function HomeMarquee() {
  const t = useTranslations("hero");

  return (
    <Marquee
      items={[artist.name, t("kicker"), t("tag1"), t("tag2")]}
    />
  );
}
