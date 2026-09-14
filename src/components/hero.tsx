"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FretboardOverlay } from "@/components/fretboard-overlay";
import { artist } from "@/content/artist";

export function Hero() {
  const t = useTranslations("hero");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-(--color-bg)">
      <div className="grid lg:grid-cols-[620fr_820fr]">
        <motion.div
          className="relative h-[46svh] sm:h-[56svh] lg:h-[90vh]"
          initial={{ scale: 1 }}
          animate={shouldReduceMotion ? undefined : { scale: 1.06 }}
          transition={{ duration: 18, ease: "linear" }}
        >
          <Image
            src={artist.soloImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 43vw, 100vw"
            className="object-cover"
            style={{
              objectPosition: "34% 40%",
              filter: "saturate(0.68) contrast(1.05)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-(--color-bg) via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:from-0% lg:via-66% lg:to-(--color-bg) lg:to-100%" />
        </motion.div>

        <div className="relative isolate flex flex-col justify-center bg-(--color-bg) px-6 py-14 sm:px-10 sm:py-20 lg:py-[76px] lg:pl-20 lg:pr-[72px]">
          <FretboardOverlay />

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono-label flex flex-wrap gap-x-7 gap-y-1 text-xs uppercase tracking-[0.2em]"
          >
            {t("kicker")
              .split(" · ")
              .concat(t("basedIn"))
              .map((segment, i) => (
                <span
                  key={segment}
                  className={i === 0 ? "text-(--color-accent)" : "text-(--color-fg-subtle)"}
                >
                  {segment}
                </span>
              ))}
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-5 text-5xl font-bold uppercase leading-[0.88] text-(--color-fg) sm:text-7xl lg:text-8xl"
          >
            Soheil
            <br />
            Faghih Nasiri
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-base text-(--color-fg-muted) sm:text-lg"
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
      </div>
    </section>
  );
}
