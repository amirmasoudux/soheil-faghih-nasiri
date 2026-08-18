export function RotatingBadge({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const id = "badge-path";

  return (
    <div
      aria-hidden="true"
      className={`relative flex h-28 w-28 items-center justify-center motion-safe:animate-spin-slow ${className}`}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <path
            id={id}
            d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
        </defs>
        <circle
          cx="100"
          cy="100"
          r="98"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.25"
        />
        <text fontSize="13.5" letterSpacing="2" fill="currentColor">
          <textPath href={`#${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-(--color-accent) text-(--color-accent-contrast)">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M15.5 3.5c2 2 2.3 4.8.8 6.9l-7 9.7a2.1 2.1 0 0 1-3.4-2.4l6.6-9.9c1.4-2.1 1-4.9-1-6.8"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
