import { site } from "@/lib/site";

// Temporary mark until the client approves a logo.
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="var(--green)" />
      <path d="M9 26a11 11 0 0 1 22 0" fill="none" stroke="var(--lime)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M21.5 9 15 21h5l-1.5 10L25 19h-5l1.5-10Z" fill="#fff" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="brand">
      <LogoMark />
      <span className="brand-text">
        <span>{site.shortName}</span>
        <small>Company</small>
      </span>
    </span>
  );
}
