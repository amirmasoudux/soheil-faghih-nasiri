// Verified releases from Soheil's Spotify artist profile
// (open.spotify.com/artist/3h3P14AKjGMm3dqewYMYa2). Release years are as
// shown on Spotify; where a precise date wasn't available, only the year is
// used — nothing here is invented.

export type MusicRelease = {
  id: string;
  title: string;
  type: "single" | "album";
  year?: number;
  spotifyUrl: string;
  appleMusicUrl?: string;
  amazonMusicUrl?: string;
};

export const musicReleases: MusicRelease[] = [
  {
    id: "the-moment-of-encounter",
    title: "The Moment of Encounter",
    type: "single",
    year: 2022,
    spotifyUrl: "https://open.spotify.com/artist/3h3P14AKjGMm3dqewYMYa2",
    appleMusicUrl:
      "https://music.apple.com/us/artist/soheil-faghih-nasiri/1593360802",
  },
  {
    id: "of-both-worlds",
    title: "Of Both Worlds",
    type: "album",
    year: 2021,
    spotifyUrl: "https://open.spotify.com/artist/3h3P14AKjGMm3dqewYMYa2",
    appleMusicUrl:
      "https://music.apple.com/us/artist/soheil-faghih-nasiri/1593360802",
  },
  {
    id: "in-niz-bogzarad",
    title: "In Niz Bogzarad",
    type: "single",
    spotifyUrl: "https://open.spotify.com/track/4aDubTtcGdNMVamlTtOaZs",
  },
];
