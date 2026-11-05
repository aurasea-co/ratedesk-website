import { content, type Lang } from '@/lib/content';

/** "ยิ่งใช้ ยิ่งแม่น" — the honest setup timeline (WEB2-6). */
export function Timeline({ lang }: { lang: Lang }) {
  const t = content[lang].timeline;
  const isThai = lang === 'th';
  const font = isThai ? 'font-thai' : 'font-sans';
  return (
    <section className="relative py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className={`${isThai ? 'display-thai text-[1.9rem] md:text-[2.4rem]' : 'display-serif text-[2.4rem] md:text-[3rem]'} mt-5 text-brand-navy text-balance leading-[1.15]`}>
          {t.title}
        </h2>
        <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {t.steps.map((s, i) => (
            <li key={s.when} className={`relative md:px-8 ${i > 0 ? 'md:border-l border-ink/15' : 'md:pl-0'}`}>
              <span className="inline-block rounded-full bg-brand-trust/10 px-3 py-1 text-sm font-semibold text-brand-trust">{s.when}</span>
              <p className={`${font} mt-4 text-lg leading-relaxed text-ink-soft text-pretty`}>{s.body}</p>
            </li>
          ))}
        </ol>
        <p className={`${font} mt-10 text-sm text-ink-muted`}>{t.footnote}</p>
      </div>
    </section>
  );
}
