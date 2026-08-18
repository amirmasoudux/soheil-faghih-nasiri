import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { socialLinks } from "@/content/artist";

const platformLinks = [
  socialLinks.spotify,
  socialLinks.youtube,
  socialLinks.appleMusic,
  socialLinks.amazonMusic,
] as const;

const socialOnlyLinks = [socialLinks.instagram, socialLinks.threads] as const;

export function SiteFooter() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--color-border) bg-(--color-bg-raised)">
      <div className="container-editorial grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-lg">Soheil Faghih Nasiri</p>
          <p className="mt-3 max-w-[26ch] text-sm text-(--color-fg-muted)">
            {t("hero.kicker")}
          </p>
        </div>

        <nav aria-label={t("footer.sitemap")}>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
            {t("footer.sitemap")}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                href="/music"
                className="text-(--color-fg-muted) hover:text-(--color-fg)"
              >
                {t("nav.music")}
              </Link>
            </li>
            <li>
              <Link
                href="/videos"
                className="text-(--color-fg-muted) hover:text-(--color-fg)"
              >
                {t("nav.videos")}
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-(--color-fg-muted) hover:text-(--color-fg)"
              >
                {t("nav.shop")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-(--color-fg-muted) hover:text-(--color-fg)"
              >
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-(--color-fg-muted) hover:text-(--color-fg)"
              >
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label={t("footer.platforms")}>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
            {t("footer.platforms")}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {platformLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-fg-muted) hover:text-(--color-fg)"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t("footer.social")}>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
            {t("footer.social")}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {socialOnlyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-fg-muted) hover:text-(--color-fg)"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-(--color-border)">
        <div className="container-editorial flex flex-col gap-3 py-6 text-xs text-(--color-fg-subtle) sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Soheil Faghih Nasiri. {t("footer.rights")}
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-(--color-fg)">
              {t("footer.privacy")}
            </Link>
            <Link href="/legal-notice" className="hover:text-(--color-fg)">
              {t("footer.legal")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
