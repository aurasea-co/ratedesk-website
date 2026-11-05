import { content, LINE_URL, type Lang } from '@/lib/content';

/** Primary (LINE) + secondary (#sample) buttons, used in the hero and the final CTA. */
export function CtaButtons({ lang, dark = false }: { lang: Lang; dark?: boolean }) {
  const c = content[lang];
  const font = lang === 'th' ? 'font-thai' : 'font-sans';
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${font} inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-medium transition ${
          dark
            ? 'bg-brand-mint text-brand-navy hover:bg-white'
            : 'bg-brand-navy text-white hover:bg-brand-forest'
        }`}
      >
        {c.cta.primary}
        <span aria-hidden>→</span>
      </a>
      <a
        href="#sample"
        className={`${font} inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base border transition ${
          dark
            ? 'border-white/40 text-white hover:border-white'
            : 'border-brand-navy/30 text-brand-navy hover:border-brand-navy'
        }`}
      >
        {c.cta.secondary}
      </a>
    </div>
  );
}
