// Verified real videos from Soheil's YouTube channel
// (youtube.com/@soheilfaghihnasiri, 40 videos as of research date).
// Dates are approximate, derived from YouTube's relative "time ago" label
// at the time of research (Aug 2026) — not exact upload timestamps.

export type Video = {
  id: string;
  youtubeId: string;
  title: string;
  approxDate: string;
  durationLabel: string;
};

export const videos: Video[] = [
  {
    id: "una-mattina",
    youtubeId: "yfYUkV9YYG4",
    title: "Una Mattina (Intouchables Soundtrack) — Classical Guitar Solo",
    approxDate: "2026-08",
    durationLabel: "2:31",
  },
  {
    id: "gary-moore-parisienne-walkways",
    youtubeId: "oN3MTiAZvXo",
    title: "Gary Moore — Parisienne Walkways (Guitar Cover)",
    approxDate: "2026-07",
    durationLabel: "3:28",
  },
  {
    id: "evocacion-jose-luis-merlin",
    youtubeId: "Zov89il61MY",
    title: "Evocación — José Luis Merlin (Classical Guitar Performance)",
    approxDate: "2026-06",
    durationLabel: "1:27",
  },
];

export const youtubeChannelUrl = "https://www.youtube.com/@soheilfaghihnasiri";

export function youtubeThumbnail(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}
