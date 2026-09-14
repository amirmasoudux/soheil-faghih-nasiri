const FRET_COUNT = 13;
const FRET_X = Array.from({ length: FRET_COUNT }, (_, i) => 6 + i * 6.8);
const MARKER_X = [25, 45, 65, 85];
const MARKER_LABELS = ["III", "V", "VII", "IX"];
const STRING_Y = [12, 26.4, 40.8, 55.2, 69.6, 84];
const STRING_HEIGHTS = [0.8, 1.3, 1.8, 2.3, 2.8, 3.3];

/**
 * Decorative guitar fretboard diagram: horizontal "strings" (thickness
 * increasing low-to-high like real string gauges), vertical "frets", and
 * position-marker dots labelled with their fret number — not a generic grid.
 * Values matched to the provided reference design. `isolate` on the parent
 * (see Hero) is what makes this actually render — without it, the negative
 * z-index here can escape to the wrong stacking context and disappear.
 */
export function FretboardOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {STRING_Y.map((y, i) => (
        <div
          key={y}
          className="absolute inset-x-0 bg-(--color-fg)/13"
          style={{ top: `${y}%`, height: `${STRING_HEIGHTS[i]}px` }}
        />
      ))}

      {FRET_X.map((x) => (
        <div
          key={x}
          className="absolute inset-y-0 bg-(--color-fg)/11"
          style={{ left: `${x}%`, width: "1.5px" }}
        />
      ))}

      {MARKER_X.map((x) => (
        <span
          key={x}
          className="absolute h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-fg)/12"
          style={{ left: `${x}%`, top: `${(STRING_Y[2] + STRING_Y[3]) / 2}%` }}
        />
      ))}

      <div className="font-mono-label absolute inset-x-0 bottom-8 text-[11px] uppercase tracking-[0.2em] text-(--color-fg)/26">
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
