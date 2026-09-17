import { type ComponentPropsWithoutRef } from "react";
import { Link } from "@/i18n/navigation";
import { scrollToHash } from "@/lib/scroll-to-hash";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-display font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ease-[var(--ease-editorial)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-(--color-accent) text-(--color-accent-contrast) hover:opacity-85",
  secondary:
    "border border-(--color-border-strong) text-(--color-fg) hover:bg-(--color-fg)/10",
  ghost: "text-(--color-fg-muted) hover:text-(--color-fg)",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = CommonProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonAsAnchor = CommonProps &
  ComponentPropsWithoutRef<"a"> & { href: string; external: true };

type ButtonAsButton = CommonProps & ComponentPropsWithoutRef<"button">;

export function Button(props: ButtonAsLink | ButtonAsAnchor | ButtonAsButton) {
  const { variant = "primary", size = "md", className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in rest && "external" in rest) {
    const anchorProps = { ...(rest as ButtonAsAnchor) };
    delete (anchorProps as { external?: boolean }).external;
    return (
      <a
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...anchorProps}
      />
    );
  }

  if ("href" in rest && rest.href.startsWith("#")) {
    // Same-page section anchor: plain native <a> so it still works via
    // browser default behavior before JS hydrates (matters in constrained
    // in-app browsers like Instagram's). The onClick handles scrolling
    // once hydrated, since Next's router otherwise resets scroll on hash
    // navigation instead of letting the native jump happen.
    const { href } = rest as ButtonAsAnchor;
    return (
      <a
        className={classes}
        {...(rest as ButtonAsAnchor)}
        onClick={(e) => scrollToHash(e, href)}
      />
    );
  }

  if ("href" in rest) {
    return <Link className={classes} {...(rest as ButtonAsLink)} />;
  }

  return <button className={classes} {...(rest as ButtonAsButton)} />;
}
