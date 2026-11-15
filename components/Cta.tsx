import { content, LINE_URL, type Lang } from '@/lib/content';
import { TrackedLink } from '@/components/TrackedLink';

/**
 * Primary (start the trial on LINE) + secondary (the free market chart, also
 * on LINE) buttons, used in the hero and the final CTA. Each is tracked by
 * placement (W1-B5).
 */
export function CtaButtons({
  lang,
  dark = false,
  where,
}: {
  lang: Lang;
  dark?: boolean;
  where: 'hero' | 'final';
}) {
  const c = content[lang];
  const font = lang === 'th' ? 'font-thai' : 'font-sans';
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
      <TrackedLink
        href={LINE_URL}
        placement={`${where}_primary`}
        lang={lang}
        className={`${font} inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-medium transition ${
          dark
            ? 'bg-brand-mint text-brand-deep hover:bg-white'
            : 'bg-cta text-cta-ink hover:bg-cta-hover'
        }`}
      >
        {c.cta.primary}
        <span aria-hidden>→</span>
      </TrackedLink>
      <TrackedLink
        href={LINE_URL}
        placement={`${where}_secondary`}
        lang={lang}
        className={`${font} inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base border transition ${
          dark
            ? 'border-white/40 text-white hover:border-white'
            : 'border-brand-navy/30 text-brand-navy hover:border-brand-navy'
        }`}
      >
        {c.cta.secondary}
      </TrackedLink>
    </div>
  );
}
