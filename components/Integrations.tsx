import { content, type Lang } from '@/lib/content';

/**
 * "ใช้กับระบบเดิม" — how a hotel's numbers get in. No PMS, POS or channel
 * manager is named: none is a live connection; hotels upload an export or
 * type the figures (WEB3-D).
 */
export function Integrations({ lang }: { lang: Lang }) {
  const c = content[lang];
  const isThai = lang === 'th';
  const font = isThai ? 'font-thai' : 'font-sans';

  return (
    <section id="integrations" className="relative py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">{c.integrations.eyebrow}</p>
            <h2
              className={`${
                isThai
                  ? 'display-thai text-[1.9rem] md:text-[2.4rem]'
                  : 'display-serif text-[2.4rem] md:text-[3rem]'
              } mt-5 text-ink text-balance leading-[1.15]`}
            >
              {c.integrations.title}
            </h2>
            <p className={`${font} mt-6 text-base md:text-lg text-ink-muted leading-[1.7] max-w-md text-pretty`}>
              {c.integrations.lead}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-1 gap-px bg-ink/10 border border-ink/10">
              {c.integrations.points.map((p) => (
                <div key={p.title} className="bg-paper p-6 md:p-8">
                  <p className={`${isThai ? 'display-thai' : 'display-serif'} text-[1.3rem] text-brand-navy`}>{p.title}</p>
                  <p className={`${font} mt-2 text-base text-ink-muted leading-relaxed`}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
