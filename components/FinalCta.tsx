import { content, PHONE_DISPLAY, PHONE_TEL, type Lang } from '@/lib/content';
import { CtaButtons } from '@/components/Cta';

/** Final call to action before the footer (WEB4-7). */
export function FinalCta({ lang }: { lang: Lang }) {
  const f = content[lang].finalCta;
  const isThai = lang === 'th';
  return (
    <section className="relative py-24 md:py-28 bg-brand-forest text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className={`${isThai ? 'display-thai text-[1.9rem] md:text-[2.6rem]' : 'display-serif text-[2.4rem] md:text-[3.2rem]'} text-balance leading-[1.15] max-w-3xl`}>
          {f.title}
        </h2>
        <div className="mt-10">
          <CtaButtons lang={lang} dark />
        </div>
        <p className={`${isThai ? 'font-thai' : 'font-sans'} mt-6 text-white/80`}>
          {f.phone}{' '}
          <a href={PHONE_TEL} className="underline underline-offset-4 hover:text-brand-mint">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </section>
  );
}
