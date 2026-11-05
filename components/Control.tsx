import { content, type Lang } from '@/lib/content';

/** "คุณเป็นคนคุมราคาเสมอ" — the owner stays in control (WEB2-5). */
export function Control({ lang }: { lang: Lang }) {
  const c = content[lang].control;
  const isThai = lang === 'th';
  return (
    <section className="relative py-24 md:py-28 bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow !text-brand-mint">{c.eyebrow}</p>
          <h2 className={`${isThai ? 'display-thai text-[1.9rem] md:text-[2.4rem]' : 'display-serif text-[2.4rem] md:text-[3rem]'} mt-5 text-balance leading-[1.15]`}>
            {c.title}
          </h2>
        </div>
        <ul className="col-span-12 md:col-span-7 space-y-6">
          {c.checks.map((t) => (
            <li key={t} className="flex gap-4">
              <span aria-hidden className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-mint text-brand-navy font-bold">✓</span>
              <p className={`${isThai ? 'font-thai' : 'font-sans'} pt-0.5 text-lg leading-relaxed text-white/90 text-pretty`}>{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
