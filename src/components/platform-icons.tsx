import type { SVGProps } from "react";

export function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M7 10c3.5-1 7-.6 10 1.1M7.3 13.2c2.8-.8 5.7-.5 8.2.9M7.7 16c2.2-.6 4.5-.4 6.5.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5Z" fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function AppleMusicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M15.5 8v6.4a2.1 2.1 0 1 1-1.3-1.94V9.9L10 11v4.4a2.1 2.1 0 1 1-1.3-1.94V9.3L15.5 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function AmazonMusicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="11" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 8.3v5.4l4.6-2.7L10 8.3Z" fill="currentColor" />
      <path
        d="M6 18.3c3.6 1.9 8.4 1.9 12 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M17 17.6l1.6 1-1.9.7.3-1.7Z" fill="currentColor" />
    </svg>
  );
}

export function ThreadsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 21c-4.6 0-7.4-2.8-7.4-9S7.4 3 12 3c4 0 6.6 2 7.2 5.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M9.8 11c4.6-.7 6.7.6 6.7 3.1 0 2.2-1.8 3.5-4.3 3.5-2 0-3.4-.9-3.4-2.5 0-2.1 2.6-2.8 6.2-2.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
