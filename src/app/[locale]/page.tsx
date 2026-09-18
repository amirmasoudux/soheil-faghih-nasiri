import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { HomeConcertSection } from "@/components/home-concert-section";
import { HomeMusicSection } from "@/components/home-music-section";
import { HomeVideosSection } from "@/components/home-videos-section";
import { DiscoverySection } from "@/components/discovery-section";
import { HomeAboutSection } from "@/components/home-about-section";
import { HomeContactSection } from "@/components/home-contact-section";
import { artist, socialLinks } from "@/content/artist";
import { localizedAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: localizedAlternates(locale, "") };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://soheilfaghihnasiri.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artist.name,
    jobTitle: "Guitarist, Composer, Music Instructor",
    description:
      "Iranian composer and classical & electric guitarist, born in Nowshahr, Iran, currently based in France.",
    nationality: "Iranian",
    birthPlace: "Nowshahr, Iran",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Art University of Tehran",
    },
    worksFor: {
      "@type": "Organization",
      name: "Goshtasb Music Academy",
      url: "https://goshtasbmusic.com/en/",
    },
    url: siteUrl,
    image: `${siteUrl}/images/soheil-solo.jpg`,
    sameAs: [
      socialLinks.spotify.url,
      socialLinks.youtube.url,
      socialLinks.instagram.url,
      socialLinks.appleMusic.url,
      socialLinks.amazonMusic.url,
      socialLinks.threads.url,
      "https://goshtasbmusic.com/en/",
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
      <HomeConcertSection />
      <HomeMusicSection />
      <HomeVideosSection />
      <DiscoverySection />
      <HomeAboutSection />
      <HomeContactSection />
    </>
  );
}
