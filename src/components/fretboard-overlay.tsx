// Positions matched exactly to the provided reference (percentages derived
// from its 820px-wide / 660px-tall grid zone spec) rather than approximated —
// note the fret spacing decreases toward the right, same as a real
// fretboard's decreasing fret gaps.
const FRET_X = [
  10.27, 19.96, 29.11, 37.73, 45.89, 53.57, 60.84, 67.7, 74.16, 80.27, 86.02,
  91.46, 96.6,
];
const FRET_TOP = 15.76;
const FRET_HEIGHT = 67.12;

const MARKER_X = [24.54, 41.82, 57.21, 70.93];
const MARKER_LABELS = ["III", "V", "VII", "IX"];

const STRING_Y = [15.76, 29.09, 42.42, 55.76, 69.09, 82.42];
const STRING_HEIGHTS = [0.8, 1.3, 1.8, 2.3, 2.8, 3.3];

/**
 * Decorative guitar fretboard diagram: horizontal "strings" (thickness
 * increasing low-to-high like real string gauges), vertical "frets"
 * (decreasing spacing, like a real neck), and position-marker dots labelled
 * with their fret number — not a generic grid.
 * `isolate` on the parent (see Hero) is what makes this actually render —
 * without it the negative z-index here can escape to the wrong stacking
 * context and disappear entirely.
 */
export function FretboardOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
    >
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
          className="absolute bg-(--color-fg)/11"
          style={{
            left: `${x}%`,
            top: `${FRET_TOP}%`,
            height: `${FRET_HEIGHT}%`,
            width: "1.5px",
          }}
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
