// Verified public data only — sourced from Soheil's official Spotify, YouTube,
// and Instagram profiles. Do not add unverified biographical claims here.

export const artist = {
  name: "Soheil Faghih Nasiri",
  roles: ["Guitarist", "Composer", "Music Instructor"] as const,
  location: "France",
  // Real avatar + banner pulled directly from Soheil's own public YouTube channel.
  avatarImage:
    "https://yt3.googleusercontent.com/XD6_pOAEsEtNqxl98wvRF4teyNhzo3KwopMT7Rr2p2N05LrAeGSNQJ71nd76PlWSH6tM5_k=s900-c-k-c0x00ffffff-no-rj",
  bannerImage:
    "https://yt3.googleusercontent.com/UNtJkPjq5Bv2IEz4kGZQYHMbWKEZewEOwHhE1QN-BhhUhRqUQ_P-FC8jldm3UZH0CByV6lhG26M=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
} as const;

export const socialLinks = {
  instagram: {
    label: "Instagram",
    url: "https://www.instagram.com/soheilfaghihnasiri/",
    handle: "@soheilfaghihnasiri",
    followers: 7773,
  },
  youtube: {
    label: "YouTube",
    url: "https://www.youtube.com/@soheilfaghihnasiri",
    handle: "@soheilfaghihnasiri",
    subscribers: 23,
  },
  spotify: {
    label: "Spotify",
    url: "https://open.spotify.com/artist/3h3P14AKjGMm3dqewYMYa2",
    monthlyListeners: 61,
  },
  appleMusic: {
    label: "Apple Music",
    url: "https://music.apple.com/us/artist/soheil-faghih-nasiri/1593360802",
  },
  amazonMusic: {
    label: "Amazon Music",
    url: "https://music.amazon.com/artists/B099WZKFPP/soheil-faghih-nasiri",
  },
  threads: {
    label: "Threads",
    url: "https://www.threads.com/@soheilfaghihnasiri",
  },
} as const;

export type SocialPlatform = keyof typeof socialLinks;
