import { content, LINE_URL, type Lang } from '@/lib/content';
import { TrackedLink } from '@/components/TrackedLink';

/** The LINE button fixed to the bottom of a phone screen (W1-B4). Hidden from md up. */
export function StickyLine({ lang }: { lang: Lang }) {
  const font = lang === 'th' ? 'font-thai' : 'font-sans';
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 backdrop-blur px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <TrackedLink
        href={LINE_URL}
        placement="sticky"
        lang={lang}
        className={`${font} flex w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-3.5 text-base font-medium text-cta-ink`}
      >
        {content[lang].cta.primary}
        <span aria-hidden>→</span>
      </TrackedLink>
    </div>
  );
}
