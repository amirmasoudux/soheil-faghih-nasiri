"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { scrollToHash } from "@/lib/scroll-to-hash";

const navItems = [
  { href: "/", key: "home" },
  { href: "#music", key: "music" },
  { href: "#videos", key: "videos" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" },
] as const;

export function SiteHeader() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg)/85 backdrop-blur-md">
      <div className="container-editorial flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-display text-lg tracking-tight sm:text-xl"
        >
          Soheil Faghih Nasiri
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => scrollToHash(e, item.href)}
                className="group relative py-1 text-sm font-medium text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
              >
                {t(item.key)}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-(--color-accent) transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:scale-x-100" />
              </a>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className="group relative py-1 text-sm font-medium text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
              >
                {t(item.key)}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-(--color-accent) transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:scale-x-100" />
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Button href="#music" size="md">
            {t("music")}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--color-border) lg:hidden"
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

      <nav
        id="mobile-nav"
        aria-label="Primary"
        aria-hidden={!open}
        className={`grid overflow-hidden border-(--color-border) bg-(--color-bg) transition-[grid-template-rows,border-top-width] duration-300 ease-[var(--ease-editorial)] lg:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col divide-y divide-(--color-border) px-5 pt-2">
            {navItems.map((item, i) => (
              <li
                key={item.key}
                className={`transition-all duration-300 ease-[var(--ease-editorial)] ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${i * 0.04}s` : "0s" }}
              >
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      scrollToHash(e, item.href);
                      setOpen(false);
                    }}
                    tabIndex={open ? undefined : -1}
                    className="block py-3.5 text-base font-medium text-(--color-fg)"
                  >
                    {t(item.key)}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? undefined : -1}
                    className="block py-3.5 text-base font-medium text-(--color-fg)"
                  >
                    {t(item.key)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between px-5 pb-6 pt-4">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
