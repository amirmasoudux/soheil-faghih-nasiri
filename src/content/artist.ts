// Verified public data only — sourced from Soheil's official Spotify, YouTube,
// and Instagram profiles. Do not add unverified biographical claims here.

export const artist = {
  name: "Soheil Faghih Nasiri",
  roles: ["Guitarist", "Composer", "Music Instructor"] as const,
  location: "France",
  // Real avatar pulled from Soheil's own public YouTube channel.
  avatarImage:
    "https://yt3.googleusercontent.com/XD6_pOAEsEtNqxl98wvRF4teyNhzo3KwopMT7Rr2p2N05LrAeGSNQJ71nd76PlWSH6tM5_k=s900-c-k-c0x00ffffff-no-rj",
  // Hero photo — supplied directly by Soheil/his team.
  heroImage: "/images/hero-group.jpg",
  soloImage: "/images/soheil-solo.jpg",
  // About-section portrait — supplied directly by Soheil.
  aboutImage: "/images/soheil-about.jpg",
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
