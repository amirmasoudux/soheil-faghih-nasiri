export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
}: {
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-accent-strong)">
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base text-(--color-fg-muted) sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}
