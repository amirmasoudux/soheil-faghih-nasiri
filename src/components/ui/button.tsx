import { type ComponentPropsWithoutRef } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium transition-colors duration-200 ease-[var(--ease-editorial)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-(--color-accent) text-(--color-accent-contrast) hover:bg-(--color-accent-strong)",
  secondary:
    "border border-(--color-border-strong) text-(--color-fg) hover:border-(--color-accent) hover:text-(--color-accent-strong)",
  ghost: "text-(--color-fg-muted) hover:text-(--color-fg)",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
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

  if ("href" in rest) {
    return <Link className={classes} {...(rest as ButtonAsLink)} />;
  }

  return <button className={classes} {...(rest as ButtonAsButton)} />;
}
