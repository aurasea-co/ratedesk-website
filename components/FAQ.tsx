'use client';

import { useState } from 'react';
import type { Lang } from '@/lib/content';

/**
 * Takes its copy as PROPS rather than importing lib/content.
 *
 * This used to `import { content }`, and because this is a client component
 * that pulled the ENTIRE content object — both locales, every section — into
 * .next/static/chunks/705-*.js, downloaded by every visitor, while the
 * rendered HTML was clean. scripts/check-no-pricing.mjs caught it; an
 * HTML-only check never would have, because it was never in the HTML.
 *
 * A runtime strip did not fix it either: the raw object stays in the bundle
 * as long as anything references it. The data has to not be imported here at
 * all, which is what props achieve — the server passes only the items that
 * survive filtering.
 */
export type FaqItem = { q: string; a: string };

export function FAQ({
  lang,
  eyebrow,
  title,
  items,
}: {
  lang: Lang;
  eyebrow: string;
  title: string;
  items: readonly FaqItem[];
}) {
  const isThai = lang === 'th';
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">{eyebrow}</p>
            <h2
              className={`${
                isThai
                  ? 'display-thai text-[1.9rem] md:text-[2.4rem]'
                  : 'display-serif text-[2.4rem] md:text-[3rem]'
              } mt-5 text-ink text-balance leading-[1.15] md:sticky md:top-24`}
            >
              {title}
            </h2>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-ink/15 border-t border-ink/15">
              {items.map((item, idx) => {
                const isOpen = open === idx;
                return (
                  <li key={idx}>
                    <button
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`${
                          isThai ? 'display-thai' : 'display-serif'
                        } text-[1.1rem] md:text-[1.3rem] text-ink leading-snug pr-4 group-hover:text-sea-deep transition-colors`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 mt-1 w-7 h-7 flex items-center justify-center border border-ink/30 rounded-full text-ink-muted transition-all duration-300 ${
                          isOpen
                            ? 'rotate-45 bg-sea-deep border-sea-deep text-paper'
                            : 'group-hover:border-ink'
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100 pb-7'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`${
                            isThai ? 'font-thai' : 'font-sans'
                          } text-[1rem] md:text-[1.05rem] text-ink-muted leading-[1.7] max-w-prose pr-12 text-pretty`}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
