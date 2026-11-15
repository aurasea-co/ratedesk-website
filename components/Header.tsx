import Link from 'next/link';
import { content, LINE_URL, type Lang } from '@/lib/content';
import { TrackedLink } from '@/components/TrackedLink';

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
            RateDesk<span className="text-sea-mid">.ai</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          <a href={`/${lang}#how`} className="nav-link link-underline">
            {c.nav.howItWorks}
          </a>
          <a href={`/${lang}#integrations`} className="nav-link link-underline">
            {c.nav.integrations}
          </a>
          <a href={`/${lang}#faq`} className="nav-link link-underline">
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
          <TrackedLink
            href={LINE_URL}
            placement="header"
            lang={lang}
            className={`${
              lang === 'th' ? 'font-thai' : 'font-sans'
            } hidden sm:inline-flex items-center gap-1.5 rounded-full bg-cta px-4 py-2 text-sm text-cta-ink hover:bg-cta-hover transition`}
          >
            {c.cta.primary}
            <span aria-hidden>→</span>
          </TrackedLink>
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
      className="text-sea-deep transition-transform duration-500 group-hover:rotate-[8deg]"
    >
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1" />
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
