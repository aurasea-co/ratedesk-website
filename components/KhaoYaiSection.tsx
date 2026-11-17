import { content, LINE_URL, type Lang } from '@/lib/content';
import { isStale, zonesWithData, type KhaoYaiFeed } from '@/lib/khaoyai';
import { KhaoYaiIndexView } from '@/components/KhaoYaiIndex';
import { TrackedLink } from '@/components/TrackedLink';

function updatedText(lang: Lang, updatedAt: string, now: Date): string {
  const c = content[lang].index;
  const d = new Date(updatedAt);
  const locale = lang === 'th' ? 'th-TH' : 'en-GB';
  if (isStale(updatedAt, now)) {
    const date = new Intl.DateTimeFormat(locale, { timeZone: 'Asia/Bangkok', day: 'numeric', month: 'short', year: 'numeric' }).format(d);
    return c.stale.replace('{date}', date);
  }
  const time = new Intl.DateTimeFormat(locale, {
    timeZone: 'Asia/Bangkok',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d);
  return c.updated.replace('{time}', lang === 'th' ? `${time} น.` : time);
}

/**
 * The Khao Yai Index block (W1-A): on the home page right after the sample
 * message, and the body of /th/khaoyai and /en/khaoyai. Renders nothing at all
 * without a feed — never an empty chart.
 */
export function KhaoYaiSection({
  lang,
  feed,
  variant,
}: {
  lang: Lang;
  feed: KhaoYaiFeed | null;
  variant: 'home' | 'page';
}) {
  if (!feed) return null;
  const zones = zonesWithData(feed);
  if (zones.length === 0) return null;
  const c = content[lang].index;
  const isThai = lang === 'th';
  const font = isThai ? 'font-thai' : 'font-sans';
  const updated = updatedText(lang, feed.updatedAt, new Date());
  const footers = Object.fromEntries(
    zones.map((z) => [
      z.id,
      c.footer.replace('{updated}', updated).replace('{n}', String(z.properties)),
    ]),
  );

  return (
    <section id="khaoyai" data-market-index="" className={`relative scroll-mt-6 ${variant === 'home' ? 'py-24 md:py-32 border-t border-ink/10' : 'pb-16'}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {variant === 'home' && (
          <>
            <p className="eyebrow">{c.homeEyebrow}</p>
            <h2 className={`${isThai ? 'display-thai text-[1.9rem] md:text-[2.4rem]' : 'display-serif text-[2.4rem] md:text-[3rem]'} mt-5 text-brand-navy text-balance leading-[1.15]`}>
              {c.title}
            </h2>
          </>
        )}
        <div className="mt-8">
          <KhaoYaiIndexView
            zones={zones}
            lang={lang}
            footers={footers}
            copy={{
              zones: c.zones,
              legend: c.legend,
              today: c.today,
              gapTip: c.gapTip,
              priced: c.priced,
              columns: c.columns,
              tableNote: c.tableNote,
            }}
          />
        </div>

        <div className="mt-10 rounded-2xl border-2 border-dashed border-brand-trust bg-brand-trust/5 p-6 md:p-8 md:flex md:items-center md:justify-between md:gap-8">
          <p className={`${font} text-base md:text-lg text-ink-soft text-pretty`}>{c.cta}</p>
          <TrackedLink
            href={LINE_URL}
            placement={variant === 'home' ? 'index' : 'index_page'}
            lang={lang}
            className={`${font} mt-5 md:mt-0 shrink-0 inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3.5 text-base font-medium text-white hover:bg-brand-deep transition`}
          >
            {c.ctaButton}
          </TrackedLink>
        </div>

        {variant === 'home' && (
          <a href={`/${lang}/khaoyai`} className={`${font} mt-6 inline-block text-brand-trust underline underline-offset-4 hover:text-brand-navy`}>
            {c.seeAll} →
          </a>
        )}
      </div>
    </section>
  );
}
