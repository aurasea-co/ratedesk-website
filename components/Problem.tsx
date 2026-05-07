import { content, type Lang } from '@/lib/content';

export function Problem({ lang }: { lang: Lang }) {
  const c = content[lang];
  const isThai = lang === 'th';

  return (
    <section
      id="problem"
      className="relative py-24 md:py-32 border-t border-ink/10"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">{c.problem.eyebrow}</p>
            <h2
              className={`${
                isThai
                  ? 'display-thai text-[1.7rem] md:text-[2rem]'
                  : 'display-serif text-[2rem] md:text-[2.6rem]'
              } mt-5 text-ink text-balance leading-[1.15]`}
            >
              {c.problem.title.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div
              className={`space-y-6 ${
                isThai ? 'font-thai' : 'font-sans'
              } text-[1.05rem] md:text-lg leading-[1.7] text-ink-soft text-pretty`}
            >
              {c.problem.body.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'first-letter:display-serif first-letter:text-[3.5rem] first-letter:leading-[1] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-sea-deep first-letter:font-medium'
                      : ''
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
