// IMPORTANT: No real melodies-for-sale were found in research — Soheil's
// verified public presence does not list specific products or prices.
// These are clearly-marked placeholder entries defining the data shape for
// the shop. Replace with real titles, artwork, preview audio, and prices
// before launch; keep `comingSoon: true` until real files + Stripe price IDs
// exist.

export type Product = {
  id: string;
  title: string;
  description: string;
  genre: string;
  durationLabel: string;
  priceCents: number;
  currency: "EUR";
  previewAudioUrl?: string;
  comingSoon: boolean;
  /** Stripe Price ID — set once a real Stripe product exists. */
  stripePriceId?: string;
};

export const products: Product[] = [
  {
    id: "placeholder-melody-1",
    title: "[Sample] Untitled Melody No. 1",
    description:
      "Placeholder listing — replace with a real composition title, description, and artwork.",
    genre: "Classical Guitar",
    durationLabel: "—",
    priceCents: 900,
    currency: "EUR",
    comingSoon: true,
  },
  {
    id: "placeholder-melody-2",
    title: "[Sample] Untitled Melody No. 2",
    description:
      "Placeholder listing — replace with a real composition title, description, and artwork.",
    genre: "Persian-Classical Fusion",
    durationLabel: "—",
    priceCents: 1200,
    currency: "EUR",
    comingSoon: true,
  },
  {
    id: "placeholder-melody-3",
    title: "[Sample] Untitled Melody No. 3",
    description:
      "Placeholder listing — replace with a real composition title, description, and artwork.",
    genre: "Instrumental",
    durationLabel: "—",
    priceCents: 900,
    currency: "EUR",
    comingSoon: true,
  },
];

// Verified real service, from Soheil's Instagram bio: "Guitar & Music
// Classes | DM for details and registration."
export const lessonsOffer = {
  available: true,
  contactUrl: "https://www.instagram.com/soheilfaghihnasiri/",
};
