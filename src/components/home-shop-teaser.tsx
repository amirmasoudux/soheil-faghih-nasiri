"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { products } from "@/content/shop";

export function HomeShopTeaser() {
  const t = useTranslations("shop");

  return (
    <section className="border-t border-(--color-border) py-20 sm:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading kicker={t("kicker")} title={t("title")} intro={t("intro")} />
            <Button href="/shop" size="md" variant="secondary">
              {t("pageTitle")}
            </Button>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
