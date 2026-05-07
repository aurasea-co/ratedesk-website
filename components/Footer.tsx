import Link from 'next/link';
import { content, type Lang } from '@/lib/content';

export function Footer({ lang }: { lang: Lang }) {
  const c = content[lang];
  const isThai = lang === 'th';
  const f = c.footer;

  return (
    <footer className="relative bg-paper-warm border-t border-ink/15 pt-20 md:pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Brand block */}
          <div className="col-span-12 md:col-span-5">
            <Link
              href={`/${lang}`}
              className="display-serif text-[1.6rem] tracking-tight text-ink"
            >
              RateDesk<span className="text-sea-aura">.ai</span>
            </Link>
            <p
              className={`${
                isThai ? 'font-thai' : 'font-sans'
              } mt-5 text-base text-ink-muted leading-relaxed max-w-sm text-pretty`}
            >
              {f.tagline}
            </p>
            <p
              className={`${
                isThai ? 'font-thai' : 'font-sans'
              } mt-8 text-sm text-ink-subtle leading-relaxed max-w-md italic text-pretty`}
            >
              {f.crosslink}
            </p>
          </div>

          {/* Product links */}
          <div className="col-span-6 md:col-span-2">
            <h4
              className={`eyebrow mb-5`}
            >
              {f.sections.product.title}
            </h4>
            <ul className="space-y-3">
              {f.sections.product.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`${
                      isThai ? 'font-thai' : 'font-sans'
                    } text-sm text-ink-soft hover:text-sea-deep transition`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="eyebrow mb-5">{f.sections.ecosystem.title}</h4>
            <ul className="space-y-3">
              {f.sections.ecosystem.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      isThai ? 'font-thai' : 'font-sans'
                    } text-sm text-ink-soft hover:text-sea-deep transition`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-3">
            <h4 className="eyebrow mb-5">{f.sections.contact.title}</h4>
            <a
              href={`mailto:${f.sections.contact.email}`}
              className="block display-serif text-[1.15rem] text-ink hover:text-sea-aura transition mb-3"
            >
              {f.sections.contact.email}
            </a>
            <p
              className={`${
                isThai ? 'font-thai' : 'font-sans'
              } text-sm text-ink-muted leading-relaxed`}
            >
              {f.sections.contact.location}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs tracking-wide-soft text-ink-subtle">
            {f.copyright}
          </p>
          <div className="flex items-center gap-5 text-xs tracking-wide-soft uppercase text-ink-subtle">
            <Link
              href={`/${lang === 'th' ? 'en' : 'th'}`}
              className="hover:text-ink transition"
            >
              {lang === 'th' ? 'EN' : 'TH'}
            </Link>
            <span className="block w-px h-3 bg-ink/20" />
            <a
              href="https://www.aurasea.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition"
            >
              Aurasea ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
