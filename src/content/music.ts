// Verified releases from Soheil's Spotify artist profile
// (open.spotify.com/artist/3h3P14AKjGMm3dqewYMYa2). Titles, URLs, and cover
// art are as provided by Soheil / fetched via Spotify's own oEmbed endpoint
// — nothing here is invented. Order matches what Soheil specified.

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
    id: "che-sazam",
    title: "Che Sazam (Concert Version)",
    type: "single",
    spotifyUrl: "https://open.spotify.com/track/4jwPSpgIQeqSukQVDmZjZH",
    coverImage:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024edd6fefa4b556712e179199",
  },
  {
    id: "lahze-didar",
    title: "Lahze Didar (Concert Version)",
    type: "single",
    spotifyUrl: "https://open.spotify.com/track/3sA1oES4KGGjeJlkNq3lrk",
    coverImage:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024edd6fefa4b556712e179199",
  },
  {
    id: "iranie-azadeh",
    title: "Iranie Azadeh",
    type: "single",
    spotifyUrl: "https://open.spotify.com/track/6o4fvbmFdU3kLpAGvkBOpp",
    coverImage:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02337bfba06f7c3c3a954322db",
  },
  {
    id: "me-jaan",
    title: "Me Jaan",
    type: "single",
    spotifyUrl: "https://open.spotify.com/track/0vCC08PCIzaObXxu0bczKR",
    coverImage:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ab5cadf82eb64cca2cad8905",
  },
];
