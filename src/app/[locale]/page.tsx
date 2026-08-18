import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/hero";
import { HomeMarquee } from "@/components/home-marquee";
import { HomeMusicSection } from "@/components/home-music-section";
import { HomeVideosSection } from "@/components/home-videos-section";
import { DiscoverySection } from "@/components/discovery-section";
import { HomeShopTeaser } from "@/components/home-shop-teaser";
import { HomeAboutSection } from "@/components/home-about-section";
import { HomeContactSection } from "@/components/home-contact-section";
import { artist, socialLinks } from "@/content/artist";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: artist.name,
    genre: ["Classical Guitar", "Instrumental"],
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://soheilfaghihnasiri.com",
    image: artist.avatarImage,
    sameAs: [
      socialLinks.instagram.url,
      socialLinks.youtube.url,
      socialLinks.spotify.url,
      socialLinks.appleMusic.url,
      socialLinks.amazonMusic.url,
      socialLinks.threads.url,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <HomeMarquee />
      <HomeMusicSection />
      <HomeVideosSection />
      <DiscoverySection />
      <HomeShopTeaser />
      <HomeAboutSection />
      <HomeContactSection />
    </>
  );
}
