"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/content/artist";

export function HomeContactSection() {
  const t = useTranslations("contact");

  return (
    <section className="border-t border-(--color-border) py-20 sm:py-28">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            kicker={t("kicker")}
            title={t("title")}
            intro={t("body")}
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <Button href={socialLinks.instagram.url} external size="lg">
              {t("instagramCta")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
