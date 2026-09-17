"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FretboardOverlay } from "@/components/fretboard-overlay";
import { artist } from "@/content/artist";

const items = [
  "font-mono-label flex flex-wrap gap-x-7 gap-y-1 text-xs uppercase tracking-[0.2em]",
  "font-display mt-5 text-5xl font-bold uppercase leading-[0.88] text-(--color-fg) sm:text-7xl lg:text-8xl",
  "mt-6 max-w-md text-base text-(--color-fg-muted) sm:text-lg",
  "mt-9 flex flex-wrap gap-4",
] as const;

function revealClass(mounted: boolean) {
  return `transition-all duration-700 ease-[var(--ease-editorial)] ${
    mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
  }`;
}

export function Hero() {
  const t = useTranslations("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-(--color-bg)">
      <div className="grid lg:grid-cols-[620fr_820fr]">
        <div className="animate-hero-zoom relative h-[46svh] sm:h-[56svh] lg:h-[90vh]">
          <Image
            src={artist.soloImage}
            alt="Soheil Faghih Nasiri playing electric guitar"
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
        </div>

        <div className="relative isolate flex flex-col justify-center bg-(--color-bg) px-6 py-14 sm:px-10 sm:py-20 lg:py-[76px] lg:pl-20 lg:pr-[72px]">
          <FretboardOverlay />

          <div className={`${items[0]} ${revealClass(mounted)}`}>
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
          </div>

          <h1
            className={`${items[1]} ${revealClass(mounted)}`}
            style={{ transitionDelay: mounted ? "0.1s" : "0s" }}
          >
            Soheil
            <br />
            Faghih Nasiri
          </h1>

          <p
            className={`${items[2]} ${revealClass(mounted)}`}
            style={{ transitionDelay: mounted ? "0.2s" : "0s" }}
          >
            {t("statement")}
          </p>

          <div
            className={`${items[3]} ${revealClass(mounted)}`}
            style={{ transitionDelay: mounted ? "0.3s" : "0s" }}
          >
            <Button href="#music" size="lg">
              {t("listenNow")}
            </Button>
            <Button href="#videos" size="lg" variant="secondary">
              {t("watchLatest")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
