import { content, type Lang } from '@/lib/content';

/**
 * The LINE morning-message mock-up (WEB2-2 / WEB4-1). The ฿ figures are a
 * HOTEL's illustrative room rates inside a product mock-up, not a price for
 * our service. They are chosen to avoid every figure we have ever charged, so
 * scripts/check-no-pricing.mjs passes with NO allow-list entry — keep it so.
 */
export function SampleBrief({ lang }: { lang: Lang }) {
  const s = content[lang].sample;
  const font = lang === 'th' ? 'font-thai' : 'font-sans';
  const heading = lang === 'th' ? 'display-thai text-[1.9rem] md:text-[2.4rem]' : 'display-serif text-[2.4rem] md:text-[3rem]';

  return (
    <section id="sample" className="relative py-24 md:py-32 bg-brand-sand border-t border-ink/10 scroll-mt-6">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="eyebrow">{s.eyebrow}</p>
        <h2 className={`${heading} mt-5 text-brand-navy text-balance leading-[1.15]`}>{s.title}</h2>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10 md:gap-14 items-start">
          {/* Phone-style LINE card */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 min-w-0">
            <p className={`${font} mb-3 inline-block rounded-full bg-brand-trust/10 px-3 py-1 text-xs font-medium text-brand-trust`}>
              {s.label}
            </p>
            <div className={`${font} mx-auto w-full max-w-[380px] rounded-[2rem] border-[8px] sm:border-[10px] border-brand-navy bg-[#8CABD9]/25 p-3 shadow-xl`}>
              <div className="rounded-2xl bg-white overflow-hidden text-[0.92rem] text-ink-soft">
                <div className="bg-brand-navy px-4 py-3 text-white">
                  <p className="text-xs text-white/70">{s.cardHeader}</p>
                  <p className="mt-0.5 text-base font-semibold">{s.cardTitle}</p>
                </div>
                <div className="px-4 py-3 space-y-3">
                  <Marker n={1} />
                  <p className="text-sm">{s.booked}</p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-xs text-ink-subtle">
                        {s.columns.map((h, i) => (
                          <th key={h} className={`py-1 font-normal ${i === 0 ? 'text-left' : 'text-right'}`}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.rows.map((r) => (
                        <tr
                          key={r[0]}
                          className="border-t border-ink/10 [&>td]:py-1.5 [&>td:not(:first-child)]:text-right [&>td:last-child]:text-brand-forest"
                        >
                          <td>{r[0]}</td>
                          <td className="text-ink-subtle">{r[1]}</td>
                          <td className="font-bold">{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="rounded-xl bg-brand-sand px-3 py-2.5">
                    <Marker n={2} />
                    <p className="text-xs font-semibold text-brand-navy">{s.todayTitle}</p>
                    <ol className="mt-1.5 space-y-1 text-sm">
                      {s.today.map((t, i) => (
                        <li key={t} className="flex gap-2">
                          <span className="shrink-0 font-semibold text-brand-trust">{i + 1}</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="flex items-start gap-2">
                    <Marker n={3} inline />
                    <p className="text-sm">{s.competitor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Callouts */}
          <ol className="min-w-0 col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7 space-y-6 md:pt-14">
            {s.callouts.map((t, i) => (
              <li key={t} className="flex gap-4">
                <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-brand-mint text-brand-navy font-semibold">
                  {i + 1}
                </span>
                <p className={`${font} pt-1 text-lg leading-relaxed text-ink-soft text-pretty`}>{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Small numbered dot tying a part of the card to its callout. */
function Marker({ n, inline = false }: { n: number; inline?: boolean }) {
  return (
    <span
      aria-hidden
      className={`${inline ? 'mt-0.5' : 'float-right'} flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-mint text-[0.7rem] font-semibold text-brand-navy`}
    >
      {n}
    </span>
  );
}
