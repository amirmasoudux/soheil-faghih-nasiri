"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RotatingBadge } from "@/components/rotating-badge";
import { artist } from "@/content/artist";

export function Hero() {
  const t = useTranslations("hero");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-(--color-bg)">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={shouldReduceMotion ? undefined : { scale: 1.08 }}
        transition={{ duration: 16, ease: "linear" }}
      >
        <Image
          src={artist.avatarImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 20%", filter: "saturate(0.9)" }}
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,3,2,0.55) 0%, rgba(4,3,2,0.55) 40%, rgba(4,3,2,0.88) 75%, var(--color-bg) 98%)",
        }}
      />
      <div className="absolute right-5 top-20 z-10 hidden text-white/90 sm:right-8 sm:top-28 sm:block lg:right-12">
        <RotatingBadge text={`${t("kicker")} • ${artist.name} • `} />
      </div>
      <div className="relative container-editorial flex min-h-[88svh] flex-col justify-end pb-16 pt-40 sm:pb-24 sm:pt-52">
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-(--color-accent-strong)"
        >
          {t("kicker")} · {t("basedIn")}
        </motion.p>
        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-5xl leading-[0.98] text-balance text-white sm:text-7xl lg:text-8xl"
        >
          {artist.name}
        </motion.h1>
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl"
        >
          {t("statement")}
        </motion.p>
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Button href="/music" size="lg">
            {t("listenNow")}
          </Button>
          <Button href="/videos" size="lg" variant="secondary">
            {t("watchLatest")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
