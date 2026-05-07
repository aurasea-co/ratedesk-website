import { content, type Lang } from '@/lib/content';

export function Integrations({ lang }: { lang: Lang }) {
  const c = content[lang];
  const isThai = lang === 'th';

  return (
    <section id="integrations" className="relative py-24 md:py-32">
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
            <p
              className={`${
                isThai ? 'font-thai' : 'font-sans'
              } mt-6 text-base md:text-lg text-ink-muted leading-[1.7] max-w-md text-pretty`}
            >
              {c.integrations.lead}
            </p>
            <p
              className={`${
                isThai ? 'font-thai' : 'font-sans'
              } mt-6 text-sm text-ink-subtle italic max-w-md`}
            >
              {c.integrations.note}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-2 gap-px bg-ink/10 border border-ink/10">
              {c.integrations.partners.map((partner, i) => (
                <div
                  key={partner}
                  className="bg-paper aspect-[1.6/1] flex flex-col items-center justify-center p-6 group hover:bg-sea-pale/50 transition-colors duration-500"
                >
                  <span className="display-serif text-[1.5rem] md:text-[1.8rem] text-ink-soft group-hover:text-sea-deep transition-colors tracking-tight">
                    {partner}
                  </span>
                  <span className="mt-2 text-[0.65rem] tracking-wide-soft uppercase text-ink-subtle">
                    {partnerType(partner)}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-subtle tracking-wide-soft uppercase text-right">
              {isThai ? 'และอื่นๆ ตามคำขอของลูกค้า' : '& more, on customer demand'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function partnerType(name: string): string {
  if (name === 'Easyfo' || name === 'Cloudbeds' || name === 'Little Hotelier') {
    return 'PMS';
  }
  if (name === 'SiteMinder') return 'CHANNEL MANAGER';
  return 'PARTNER';
}
