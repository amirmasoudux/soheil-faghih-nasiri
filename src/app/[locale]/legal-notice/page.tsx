import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice",
};

const content = {
  en: {
    title: "Legal Notice",
    intro:
      "This page identifies who publishes this website, as required for sites operating in France and the EU. Fields marked in brackets are placeholders to be completed with real registration details before launch.",
    sections: [
      {
        heading: "Site publisher",
        body: [
          "Soheil Faghih Nasiri",
          "[Legal status — individual / auto-entrepreneur / company name]",
          "[Registered address]",
          "[SIRET / business registration number, if applicable]",
          "[Contact email]",
        ],
      },
      {
        heading: "Publication director",
        body: ["Soheil Faghih Nasiri"],
      },
      {
        heading: "Hosting",
        body: [
          "[Hosting provider name]",
          "[Hosting provider address]",
          "[Hosting provider contact]",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "All music, images, and content on this site belong to Soheil Faghih Nasiri unless otherwise credited. Reproduction without permission is not authorized.",
        ],
      },
    ],
  },
  fr: {
    title: "Mentions légales",
    intro:
      "Cette page identifie l'éditeur de ce site, conformément aux obligations applicables aux sites opérant en France et dans l'UE. Les champs entre crochets sont des espaces réservés à compléter avec les informations réelles avant la mise en ligne.",
    sections: [
      {
        heading: "Éditeur du site",
        body: [
          "Soheil Faghih Nasiri",
          "[Statut juridique — particulier / auto-entrepreneur / société]",
          "[Adresse]",
          "[Numéro SIRET, le cas échéant]",
          "[E-mail de contact]",
        ],
      },
      {
        heading: "Directeur de la publication",
        body: ["Soheil Faghih Nasiri"],
      },
      {
        heading: "Hébergement",
        body: [
          "[Nom de l'hébergeur]",
          "[Adresse de l'hébergeur]",
          "[Contact de l'hébergeur]",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        body: [
          "L'ensemble des musiques, images et contenus de ce site appartient à Soheil Faghih Nasiri, sauf mention contraire. Toute reproduction sans autorisation est interdite.",
        ],
      },
    ],
  },
} as const;

export default async function LegalNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = locale === "fr" ? content.fr : content.en;

  return (
    <div className="container-editorial max-w-2xl py-16 sm:py-24">
      <h1 className="font-display text-3xl sm:text-4xl">{c.title}</h1>
      <p className="mt-6 text-(--color-fg-muted)">{c.intro}</p>
      <div className="mt-10 space-y-8">
        {c.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-lg">{section.heading}</h2>
            <div className="mt-2 space-y-1 text-sm text-(--color-fg-muted)">
              {section.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
