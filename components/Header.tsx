import Link from 'next/link';
import { content, type Lang } from '@/lib/content';

export function Header({ lang }: { lang: Lang }) {
  const c = content[lang];
  const otherLang = c.other;
  const otherLabel = otherLang.toUpperCase();

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-7 flex items-center justify-between">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 group"
          aria-label="RateDesk.ai home"
        >
          <RateDeskMark />
          <span className="display-serif text-[1.35rem] tracking-tight text-ink">
            RateDesk<span className="text-sea-aura">.ai</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          <a href="#how" className="nav-link link-underline">
            {c.nav.howItWorks}
          </a>
          <a href="#integrations" className="nav-link link-underline">
            {c.nav.integrations}
          </a>
          <a href="#pricing" className="nav-link link-underline">
            {c.nav.pricing}
          </a>
          <a href="#faq" className="nav-link link-underline">
            {c.nav.faq}
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href={`/${otherLang}`}
            className="text-xs font-medium tracking-wide-soft text-ink-muted hover:text-ink transition"
            aria-label={`Switch to ${otherLabel}`}
          >
            {otherLabel}
          </Link>
          <a
            href="mailto:hello@ratedesk.ai"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-ink hover:text-sea-aura transition border-b border-ink/40 hover:border-sea-aura pb-0.5"
          >
            {c.cta.contact}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function RateDeskMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="transition-transform duration-500 group-hover:rotate-[8deg]"
    >
      <circle cx="14" cy="14" r="13" stroke="#0F2A3F" strokeWidth="1" />
      <path
        d="M3 14 Q 8 10.5, 14 14 T 25 14"
        stroke="#3A7CA5"
        strokeWidth="1.25"
        fill="none"
      />
      <path
        d="M3 18 Q 8 15, 14 18 T 25 18"
        stroke="#3A7CA5"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <circle cx="14" cy="14" r="1.6" fill="#B8924A" />
    </svg>
  );
}
