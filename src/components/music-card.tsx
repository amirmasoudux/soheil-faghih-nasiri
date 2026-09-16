import { useTranslations } from "next-intl";
import Image from "next/image";
import type { MusicRelease } from "@/content/music";

export function MusicCard({ release }: { release: MusicRelease }) {
  const t = useTranslations("music");

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-(--color-border) bg-(--color-surface) transition-all duration-300 ease-[var(--ease-editorial)] hover:-translate-y-1.5 hover:border-(--color-accent) hover:shadow-xl hover:shadow-(--color-accent)/20">
      <div className="relative aspect-square w-full overflow-hidden bg-(--color-bg-raised)">
        <Image
          src={release.coverImage}
          alt={`${release.title} cover art`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover grayscale transition-all duration-500 ease-[var(--ease-editorial)] group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-(--color-bg)/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-(--color-fg-muted) backdrop-blur">
          {release.type === "album" ? t("album") : t("single")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg leading-snug">{release.title}</h3>
        {release.year && (
          <p className="mt-1 text-sm text-(--color-fg-subtle)">
            {release.year}
          </p>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          <a
            href={release.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-(--color-border-strong) px-3.5 py-1.5 text-xs font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent-strong)"
          >
            Spotify
          </a>
          {release.appleMusicUrl && (
            <a
              href={release.appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-(--color-border-strong) px-3.5 py-1.5 text-xs font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent-strong)"
            >
              Apple Music
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
