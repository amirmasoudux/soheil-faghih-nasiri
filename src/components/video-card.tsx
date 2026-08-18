"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import type { Video } from "@/content/videos";
import { youtubeThumbnail } from "@/content/videos";
import { formatMonthYear } from "@/lib/format";

export function VideoCard({ video }: { video: Video }) {
  const t = useTranslations("videos");
  const locale = useLocale();
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group h-full overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) transition-all duration-300 ease-[var(--ease-editorial)] hover:-translate-y-1.5 hover:border-(--color-accent) hover:shadow-xl hover:shadow-black/10">
      <div className="relative aspect-video w-full overflow-hidden bg-(--color-bg-raised)">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group/play relative block h-full w-full cursor-pointer"
            aria-label={`${t("play")}: ${video.title}`}
          >
            <Image
              src={youtubeThumbnail(video.youtubeId)}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 ease-[var(--ease-editorial)] group-hover/play:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-(--color-accent)/95 text-(--color-accent-contrast) shadow-lg transition-transform duration-300 group-hover/play:scale-110">
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6 4L16 10L6 16V4Z" fill="currentColor" />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-3 right-3 rounded bg-black/70 px-1.5 py-0.5 text-xs font-medium text-white">
              {video.durationLabel}
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-(--color-fg-subtle)">
          {formatMonthYear(video.approxDate, locale)}
        </p>
        <h3 className="mt-1.5 font-display text-lg leading-snug">
          {video.title}
        </h3>
      </div>
    </div>
  );
}
