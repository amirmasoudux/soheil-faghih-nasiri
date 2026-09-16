"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { socialLinks } from "@/content/artist";
import {
  SpotifyIcon,
  YouTubeIcon,
  InstagramIcon,
  AppleMusicIcon,
  AmazonMusicIcon,
  ThreadsIcon,
} from "@/components/platform-icons";

const platforms = [
  { ...socialLinks.spotify, name: "Spotify", Icon: SpotifyIcon },
  { ...socialLinks.youtube, name: "YouTube", Icon: YouTubeIcon },
  { ...socialLinks.instagram, name: "Instagram", Icon: InstagramIcon },
  { ...socialLinks.appleMusic, name: "Apple Music", Icon: AppleMusicIcon },
  { ...socialLinks.amazonMusic, name: "Amazon Music", Icon: AmazonMusicIcon },
  { ...socialLinks.threads, name: "Threads", Icon: ThreadsIcon },
] as const;

export function DiscoverySection() {
  const t = useTranslations("discovery");

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
                  className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-7 text-center transition-all duration-300 ease-[var(--ease-editorial)] hover:-translate-y-1 hover:border-(--color-accent) hover:shadow-lg hover:shadow-(--color-accent)/20"
                >
                  <platform.Icon className="h-6 w-6 text-(--color-accent)" />
                  <span className="font-display text-lg">{platform.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
