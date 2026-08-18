import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/content/shop";

// Stripe Checkout Sessions: the site never touches card details — Stripe
// hosts the payment page and returns a redirect URL. Requires a real
// STRIPE_SECRET_KEY and each product's `stripePriceId` (set once real
// products exist in the Stripe Dashboard) before this becomes live.

export async function POST(request: Request) {
  const { productId, locale } = await request.json();

  const product = products.find((p) => p.id === productId);
  if (!product) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  if (product.comingSoon || !product.stripePriceId) {
    return NextResponse.json(
      { error: "not_available" },
      { status: 400 },
    );
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "stripe_not_configured" },
      { status: 501 },
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://soheilfaghihnasiri.com";
  const stripe = new Stripe(secretKey);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: product.stripePriceId, quantity: 1 }],
    success_url: `${siteUrl}/${locale}/shop?checkout=success`,
    cancel_url: `${siteUrl}/${locale}/shop?checkout=cancelled`,
    metadata: { productId: product.id },
  });

  return NextResponse.json({ url: session.url });
}
