import { useTranslations } from "next-intl";
import type { MusicRelease } from "@/content/music";

export function MusicCard({ release }: { release: MusicRelease }) {
  const t = useTranslations("music");

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) transition-all duration-300 ease-[var(--ease-editorial)] hover:-translate-y-1.5 hover:border-(--color-accent) hover:shadow-xl hover:shadow-black/10">
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-gradient-to-br from-(--color-bg-raised) to-(--color-surface)">
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="text-(--color-accent)/70 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:scale-110"
        >
          <path
            fill="currentColor"
            d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z"
          />
        </svg>
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
            className="rounded-full border border-(--color-border-strong) px-3.5 py-1.5 text-xs font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent-strong)"
          >
            Spotify
          </a>
          {release.appleMusicUrl && (
            <a
              href={release.appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-(--color-border-strong) px-3.5 py-1.5 text-xs font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent-strong)"
            >
              Apple Music
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
