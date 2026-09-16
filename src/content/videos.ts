// Verified real videos, provided directly by Soheil (titles fetched via
// YouTube's own oEmbed endpoint). Order matches what Soheil specified.

export type Video = {
  id: string;
  youtubeId: string;
  title: string;
  approxDate: string;
  durationLabel: string;
};

export const videos: Video[] = [
  {
    id: "gary-moore-parisienne-walkways",
    youtubeId: "oN3MTiAZvXo",
    title: "Gary Moore — Parisienne Walkways (Guitar Cover)",
    approxDate: "2026-07",
    durationLabel: "3:28",
  },
  {
    id: "antonio-lauro-vals-venezolano-no-2",
    youtubeId: "aQI-vGSs2l8",
    title: "Antonio Lauro — Vals Venezolano No. 2 (Classical Guitar)",
    approxDate: "2026-08",
    durationLabel: "0:46",
  },
  {
    id: "karvansara-concert-parastoo-ahmadi",
    youtubeId: "oYcaDHEnhbU",
    title: "Karvansara Concert — with Parastoo Ahmadi",
    approxDate: "2024-12",
    durationLabel: "27:37",
  },
  {
    id: "song-7-parastoo-ahmadi",
    youtubeId: "kUeJUtJdUNg",
    title: "Song 7 — with Parastoo Ahmadi",
    approxDate: "2024-03",
    durationLabel: "3:19",
  },
];

export const youtubeChannelUrl = "https://www.youtube.com/@soheilfaghihnasiri";

export function youtubeThumbnail(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}
