const FRET_X = [10, 25, 40, 55, 70, 85, 94];
const MARKER_X = [25, 45, 65, 85];
const MARKER_LABELS = ["III", "V", "VII", "IX"];
const STRING_Y = [12, 26.4, 40.8, 55.2, 69.6, 84];

/**
 * Decorative guitar fretboard diagram: horizontal "strings" (thickness
 * increasing low-to-high like real string gauges), vertical "frets", and
 * position-marker dots labelled with their fret number — not a generic grid.
 */
export function FretboardOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {STRING_Y.map((y, i) => (
        <div
          key={y}
          className="absolute inset-x-0 bg-(--color-fg)"
          style={{
            top: `${y}%`,
            height: `${1 + i * 0.4}px`,
            opacity: 0.1 + i * 0.02,
          }}
        />
      ))}

      {FRET_X.map((x) => (
        <div
          key={x}
          className="absolute inset-y-0 w-px bg-(--color-fg)/10"
          style={{ left: `${x}%` }}
        />
      ))}

      {MARKER_X.map((x) => (
        <span
          key={x}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-fg)/15"
          style={{ left: `${x}%`, top: `${(STRING_Y[2] + STRING_Y[3]) / 2}%` }}
        />
      ))}

      <div className="font-mono-label absolute inset-x-0 bottom-8 text-xs uppercase tracking-[0.2em] text-(--color-fg)/25">
        {MARKER_X.map((x, i) => (
          <span
            key={x}
            className="absolute -translate-x-1/2"
            style={{ left: `${x}%` }}
          >
            {MARKER_LABELS[i]}
          </span>
        ))}
      </div>
    </div>
  );
}
