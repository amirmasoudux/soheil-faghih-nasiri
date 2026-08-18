export function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items, ...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="group relative overflow-hidden border-y border-(--color-border) bg-(--color-bg-raised) py-4"
    >
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-xl italic text-(--color-fg-subtle) sm:text-2xl"
          >
            {item}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              className="shrink-0 text-(--color-accent)"
            >
              <path
                fill="currentColor"
                d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
