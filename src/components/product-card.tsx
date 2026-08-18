"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Product } from "@/content/shop";
import { formatPrice } from "@/lib/format";
import { AudioPlayer } from "@/components/audio-player";

export function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("shop");
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, locale }),
      });
      if (!res.ok) throw new Error("checkout_failed");
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("no_url");
      }
    } catch {
      setError(t("checkoutError"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) transition-all duration-300 ease-[var(--ease-editorial)] hover:-translate-y-1.5 hover:border-(--color-accent) hover:shadow-xl hover:shadow-black/10">
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-gradient-to-br from-(--color-bg-raised) to-(--color-surface)">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="text-(--color-accent)/60"
        >
          <path
            fill="currentColor"
            d="M9 3v10.55A4 4 0 1 0 11 17V7h8V3H9Z"
          />
        </svg>
        {product.comingSoon && (
          <span className="absolute left-4 top-4 rounded-full bg-(--color-accent) px-3 py-1 text-xs font-semibold text-(--color-accent-contrast)">
            {t("comingSoon")}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg leading-snug">
            {product.title}
          </h3>
          <p className="mt-1 text-sm text-(--color-fg-muted)">
            {product.genre}
          </p>
        </div>

        <p className="text-sm text-(--color-fg-muted)">
          {product.description}
        </p>

        {product.previewAudioUrl ? (
          <AudioPlayer src={product.previewAudioUrl} title={product.title} />
        ) : (
          <p className="rounded-full border border-dashed border-(--color-border-strong) px-3 py-2 text-center text-xs text-(--color-fg-subtle)">
            {t("previewUnavailable")}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-lg">
            {formatPrice(product.priceCents, product.currency, locale)}
          </span>
          <button
            type="button"
            disabled={product.comingSoon || loading}
            onClick={handleBuy}
            className="rounded-full bg-(--color-accent) px-5 py-2 text-sm font-medium text-(--color-accent-contrast) transition-colors hover:bg-(--color-accent-strong) disabled:opacity-40"
          >
            {t("buy")}
          </button>
        </div>
        {error && <p className="text-xs text-(--color-accent-strong)">{error}</p>}
      </div>
    </div>
  );
}
