import { content, type Lang } from '@/lib/content';

export function HowItWorks({ lang }: { lang: Lang }) {
  const c = content[lang];
  const isThai = lang === 'th';

  return (
    <section
      id="how"
      className="relative py-24 md:py-32 bg-sea-pale/40 border-y border-ink/10 grain"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">{c.how.eyebrow}</p>
          <h2
            className={`${
              isThai
                ? 'display-thai text-[1.9rem] md:text-[2.6rem]'
                : 'display-serif text-[2.4rem] md:text-[3.2rem]'
            } mt-5 text-ink text-balance leading-[1.1]`}
          >
            {c.how.title}
          </h2>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {c.how.steps.map((step, idx) => (
            <article
              key={step.n}
              className={`relative p-8 md:p-10 ${
                idx > 0 ? 'md:border-l border-ink/15' : ''
              } md:hover:bg-paper transition-colors duration-500 group`}
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="display-serif text-[3.5rem] md:text-[4rem] leading-none text-sea-mid font-light">
                  {step.n}
                </span>
                <span className="block w-10 h-px bg-gold mt-2 group-hover:w-16 transition-all duration-500" />
              </div>
              <h3
                className={`${
                  isThai ? 'display-thai' : 'display-serif'
                } text-[1.4rem] md:text-[1.55rem] text-ink mb-4 leading-tight`}
              >
                {step.title}
              </h3>
              <p
                className={`${
                  isThai ? 'font-thai' : 'font-sans'
                } text-[0.98rem] md:text-base text-ink-muted leading-[1.7] text-pretty`}
              >
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
