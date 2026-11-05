import { content, LINE_URL, type Lang } from '@/lib/content';

/** The competitor rate report offer (WEB2-9), dashed trust-blue box. */
export function CompetitorReport({ lang }: { lang: Lang }) {
  const r = content[lang].report;
  const isThai = lang === 'th';
  const font = isThai ? 'font-thai' : 'font-sans';
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="rounded-2xl border-2 border-dashed border-brand-trust bg-brand-trust/5 p-8 md:p-12 md:flex md:items-center md:justify-between md:gap-10">
          <div>
            <h2 className={`${isThai ? 'display-thai text-[1.5rem] md:text-[1.8rem]' : 'display-serif text-[1.8rem] md:text-[2.2rem]'} text-brand-navy text-balance leading-[1.25]`}>
              {r.title}
            </h2>
            <p className={`${font} mt-4 text-base md:text-lg text-ink-soft leading-relaxed text-pretty`}>{r.body}</p>
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${font} mt-6 md:mt-0 shrink-0 inline-flex items-center justify-center rounded-full bg-brand-trust px-6 py-3.5 text-base font-medium text-white hover:bg-brand-navy transition`}
          >
            {r.button}
          </a>
        </div>
      </div>
    </section>
  );
}
