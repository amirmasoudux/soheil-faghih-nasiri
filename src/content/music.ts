// Verified releases from Soheil's Spotify artist profile
// (open.spotify.com/artist/3h3P14AKjGMm3dqewYMYa2). Release years and cover
// art are as shown on Spotify (cover art fetched via Spotify's own oEmbed
// endpoint) — nothing here is invented.

export type MusicRelease = {
  id: string;
  title: string;
  type: "single" | "album";
  year?: number;
  spotifyUrl: string;
  appleMusicUrl?: string;
  amazonMusicUrl?: string;
  coverImage: string;
};

export const musicReleases: MusicRelease[] = [
  {
    id: "the-moment-of-encounter",
    title: "The Moment of Encounter",
    type: "single",
    year: 2022,
    spotifyUrl: "https://open.spotify.com/album/1WjuTknmztp08lxCdovevU",
    appleMusicUrl:
      "https://music.apple.com/us/artist/soheil-faghih-nasiri/1593360802",
    coverImage:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02260d8d49a306eb06fd03dadc",
  },
  {
    id: "of-both-worlds",
    title: "Of Both Worlds",
    type: "album",
    year: 2021,
    spotifyUrl: "https://open.spotify.com/album/1DLmj6UDui2Qob3rYteH4j",
    appleMusicUrl:
      "https://music.apple.com/us/artist/soheil-faghih-nasiri/1593360802",
    coverImage:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0235310a6e2296a67f9a870bb1",
  },
  {
    id: "in-niz-bogzarad",
    title: "In Niz Bogzarad",
    type: "single",
    spotifyUrl: "https://open.spotify.com/track/4aDubTtcGdNMVamlTtOaZs",
    coverImage:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0235310a6e2296a67f9a870bb1",
  },
];
