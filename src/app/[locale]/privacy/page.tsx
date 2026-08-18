import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const content = {
  en: {
    title: "Privacy Policy",
    intro:
      "This site is built to collect as little personal data as possible. This page explains what is and isn't collected, and how the few third-party services in use handle data.",
    sections: [
      {
        heading: "Data controller",
        body: "Soheil Faghih Nasiri is the data controller for this website. [Contact email] for any privacy request. [Legal entity / address to be completed.]",
      },
      {
        heading: "No analytics or advertising trackers",
        body: "This site does not use analytics cookies, advertising trackers, or third-party marketing pixels. No visitor profile is built from your browsing on this site.",
      },
      {
        heading: "Embedded content",
        body: "Video thumbnails are shown as static images; the YouTube player (via youtube-nocookie.com, YouTube's privacy-enhanced mode) only loads if you actively click play, at which point YouTube may set cookies per its own policy. Links to Spotify, Apple Music, Amazon Music, Instagram, and Threads take you to those platforms directly — this site does not control their data practices.",
      },
      {
        heading: "Shop & payments",
        body: "If you purchase a melody, checkout is handled entirely by Stripe. This site does not receive, process, or store your card details — Stripe processes payment data under its own privacy policy and PCI-DSS compliance obligations. This site only receives confirmation that an order was completed.",
      },
      {
        heading: "Your rights (GDPR)",
        body: "Under the EU General Data Protection Regulation, you have the right to access, correct, delete, or export any personal data held about you, and to object to its processing. To exercise these rights, contact [Contact email]. You may also lodge a complaint with your national data protection authority (in France, the CNIL).",
      },
      {
        heading: "Changes to this policy",
        body: "This policy may be updated as the site evolves, for example if a contact form or analytics tool is added in the future. Material changes will be reflected on this page.",
      },
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    intro:
      "Ce site est conçu pour collecter le moins de données personnelles possible. Cette page explique ce qui est collecté (ou non), et comment les quelques services tiers utilisés traitent les données.",
    sections: [
      {
        heading: "Responsable du traitement",
        body: "Soheil Faghih Nasiri est responsable du traitement des données de ce site. [E-mail de contact] pour toute demande liée à la confidentialité. [Entité juridique / adresse à compléter.]",
      },
      {
        heading: "Aucun traceur publicitaire ou analytique",
        body: "Ce site n'utilise pas de cookies analytiques, de traceurs publicitaires ni de pixels marketing tiers. Aucun profil de visiteur n'est constitué à partir de votre navigation sur ce site.",
      },
      {
        heading: "Contenus intégrés",
        body: "Les vignettes vidéo sont affichées sous forme d'images statiques ; le lecteur YouTube (via youtube-nocookie.com, le mode respectueux de la vie privée de YouTube) ne se charge que si vous cliquez activement sur lecture, moment où YouTube peut déposer des cookies selon sa propre politique. Les liens vers Spotify, Apple Music, Amazon Music, Instagram et Threads vous redirigent directement vers ces plateformes — ce site ne contrôle pas leurs pratiques en matière de données.",
      },
      {
        heading: "Boutique et paiements",
        body: "Si vous achetez une mélodie, le paiement est intégralement géré par Stripe. Ce site ne reçoit, ne traite ni ne stocke vos données bancaires — Stripe traite les données de paiement selon sa propre politique de confidentialité et ses obligations de conformité PCI-DSS. Ce site reçoit uniquement la confirmation qu'une commande a été finalisée.",
      },
      {
        heading: "Vos droits (RGPD)",
        body: "Conformément au Règlement Général sur la Protection des Données, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles, ainsi que d'un droit d'opposition à leur traitement. Pour exercer ces droits, contactez [E-mail de contact]. Vous pouvez également déposer une plainte auprès de la CNIL.",
      },
      {
        heading: "Modifications de cette politique",
        body: "Cette politique peut être mise à jour à mesure que le site évolue, par exemple si un formulaire de contact ou un outil analytique est ajouté. Les changements importants seront reflétés sur cette page.",
      },
    ],
  },
} as const;

export default async function PrivacyPage({
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
            <p className="mt-2 text-sm text-(--color-fg-muted)">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
