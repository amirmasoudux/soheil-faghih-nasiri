"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", key: "home" },
  { href: "/music", key: "music" },
  { href: "/videos", key: "videos" },
  { href: "/shop", key: "shop" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function SiteHeader() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg)/85 backdrop-blur-md">
      <div className="container-editorial flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg tracking-tight sm:gap-3 sm:text-xl"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-accent) sm:h-10 sm:w-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.5 3.5c2 2 2.3 4.8.8 6.9l-7 9.7a2.1 2.1 0 0 1-3.4-2.4l6.6-9.9c1.4-2.1 1-4.9-1-6.8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="7" cy="18.2" r="1.6" fill="currentColor" />
            </svg>
          </span>
          <span>Soheil Faghih Nasiri</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="group relative py-1 text-sm font-medium text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
            >
              {t(item.key)}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-(--color-accent) transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Button href="/shop" size="md">
            {t("shop")}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t("close") : t("menu")}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? t("close") : t("menu")}</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            aria-hidden="true"
            className="text-(--color-fg)"
          >
            {open ? (
              <path
                d="M2 2L16 16M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M1 4H17M1 9H17M1 14H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Primary"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-(--color-border) bg-(--color-bg) lg:hidden"
          >
            <ul className="flex flex-col divide-y divide-(--color-border) px-5 pt-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.key}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-base font-medium text-(--color-fg)"
                  >
                    {t(item.key)}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center justify-between px-5 pb-6 pt-4">
              <LanguageSwitcher />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
