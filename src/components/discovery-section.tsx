"use client";

import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { socialLinks } from "@/content/artist";
import { formatCompactNumber } from "@/lib/format";

const platforms = [
  {
    ...socialLinks.spotify,
    name: "Spotify",
    statKey: "monthlyListeners",
    stat: socialLinks.spotify.monthlyListeners,
  },
  {
    ...socialLinks.youtube,
    name: "YouTube",
    statKey: "subscribers",
    stat: socialLinks.youtube.subscribers,
  },
  {
    ...socialLinks.instagram,
    name: "Instagram",
    statKey: "followers",
    stat: socialLinks.instagram.followers,
  },
  { ...socialLinks.appleMusic, name: "Apple Music", statKey: null, stat: null },
  {
    ...socialLinks.amazonMusic,
    name: "Amazon Music",
    statKey: null,
    stat: null,
  },
  { ...socialLinks.threads, name: "Threads", statKey: null, stat: null },
] as const;

export function DiscoverySection() {
  const t = useTranslations("discovery");
  const locale = useLocale();

  return (
    <section className="border-t border-(--color-border) py-20 sm:py-28">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading kicker={t("kicker")} title={t("title")} align="center" />
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
            {platforms.map((platform) => (
              <li key={platform.name}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col items-center justify-center gap-1.5 rounded-2xl border border-(--color-border) bg-(--color-surface) px-4 py-7 text-center transition-all duration-300 ease-[var(--ease-editorial)] hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-lg hover:shadow-black/10"
                >
                  <span className="font-display text-lg">{platform.name}</span>
                  {platform.statKey != null && platform.stat != null && (
                    <span className="text-xs text-(--color-fg-subtle)">
                      <CountUp
                        value={platform.stat}
                        formatter={(n) => formatCompactNumber(n, locale)}
                      />{" "}
                      {t(platform.statKey)}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
