import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { products, lessonsOffer } from "@/content/shop";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "shop" });
  return { title: t("pageTitle"), description: t("pageIntro") };
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("shop");

  return (
    <div className="container-editorial py-16 sm:py-24">
      <SectionHeading kicker={t("kicker")} title={t("pageTitle")} intro={t("pageIntro")} />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <p className="mt-6 text-xs text-(--color-fg-subtle)">
        {t("securePayment")}
      </p>

      {lessonsOffer.available && (
        <div className="mt-20 rounded-2xl border border-(--color-border) bg-(--color-surface) p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl sm:text-3xl">
            {t("lessonsTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-(--color-fg-muted)">
            {t("lessonsBody")}
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={lessonsOffer.contactUrl} external>
              {t("lessonsCta")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
