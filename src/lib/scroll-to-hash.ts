import type { MouseEvent } from "react";

/**
 * Next.js App Router's client-side navigation intercepts same-page hash
 * anchor clicks and resets scroll to top instead of letting the browser's
 * native "jump to fragment" behavior run. This manually scrolls to the
 * target instead, leaving the real href in place so the link still works
 * via plain browser navigation before JS hydrates.
 *
 * Deliberately does NOT call history.pushState to reflect the hash in the
 * URL bar — doing so triggers Next's router to react to the URL change and
 * reset the scroll it just performed, undoing the fix.
 */
export function scrollToHash(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
