import { notFound } from 'next/navigation';
import { content, LINE_URL, type Lang } from '@/lib/content';
import { getKhaoYaiIndex, zonesWithData, type KhaoYaiFeed } from '@/lib/khaoyai';
import { indexCopy } from '@/lib/khaoyai-copy';
import { bangkokParts, longDate, updatedLine } from '@/lib/khaoyai-dates';
import { KhaoYaiIndexView } from '@/components/KhaoYaiIndex';
import { TrackedLink } from '@/components/TrackedLink';

/**
 * KX2 (Bo, 19 Nov 2026) — /th/khaoyai and /en/khaoyai are a NEUTRAL public index page ("ดัชนีที่พักเขาใหญ่"): no sales
 * navigation, no product footer, no sticky LINE button, one button only (the weekly summary on LINE). Aggregates only,
 * always with n; the minimum comes from the feed. 404 while the index is switched off.
 */
export async function KhaoYaiPage({ lang }: { lang: Lang }) {
  const feed = await getKhaoYaiIndex();
  if (!feed) notFound();
  const c = indexCopy[lang];
  const base = content[lang].index;
  const isThai = lang === 'th';
  const font = isThai ? 'font-thai' : 'font-sans';
  const h2 = `${isThai ? 'display-thai text-[1.5rem]' : 'display-serif text-[1.8rem]'} text-brand-navy`;
  const zones = zonesWithData(feed);
  const min = String(feed.minPriced);
  const total = feed.zones.reduce((s, z) => s + z.properties, 0);
  const updated = updatedLine(feed.updatedAt, lang);
  const dataDate = longDate(bangkokParts(feed.updatedAt).date, lang);
  const other = isThai ? 'en' : 'th';
  const footers = Object.fromEntries(zones.map((z) => [z.id, base.footer.replace('{updated}', updated).replace('{n}', String(z.properties))]));
  return (
    <main className={`khaoyai-page min-h-screen ${font}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset(feed, c.brand, c.description, lang)) }} />
      <header className="no-print border-b border-ink/10">
        <nav aria-label={c.brand} className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a href={`/${lang}/khaoyai`} className="font-semibold text-ink mr-auto">{c.brand}</a>
          <a href="#overview" className="text-ink-soft hover:text-ink">{c.nav.overview}</a>
          <a href="#holidays" className="text-ink-soft hover:text-ink">{c.nav.holidays}</a>
          <a href="#method" className="text-ink-soft hover:text-ink">{c.nav.method}</a>
          <a href="#download" className="text-ink-soft hover:text-ink">{c.nav.download}</a>
          <a href={`/${other}/khaoyai`} hrefLang={other} className="text-ink-soft hover:text-ink">{c.nav.other}</a>
        </nav>
      </header>

      <section id="overview" className="pt-12 md:pt-16 pb-4">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h1 className={`${isThai ? 'display-thai text-[2.2rem] md:text-[3rem]' : 'display-serif text-[2.6rem] md:text-[3.6rem]'} text-ink text-balance`}>{c.h1}</h1>
          <p className="mt-4 text-lg md:text-xl text-ink-soft">{c.sub}</p>
          <p className="mt-3 text-ink-soft">{c.coverage.replace('{n}', String(total))}</p>
          <p className="mt-1 text-sm text-ink-muted" data-testid="khaoyai-updated">{updated}</p>
        </div>
      </section>

      <section id="holidays" data-market-index="" className="pb-16 scroll-mt-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-6">
          <KhaoYaiIndexView
            zones={zones}
            lang={lang}
            footers={footers}
            copy={{
              zones: base.zones, legend: base.legend, today: c.chart.today,
              gapTip: base.gapTip.replace('{min}', min), priced: base.priced, columns: c.columns, tableNote: c.tableTitle,
              nearlyFull: c.chart.nearlyFull, fullTip: c.chart.fullTip, fullDates: true, pricedOf: c.pricedOf, cards: c.cards,
            }}
          />
          <p className="mt-3 text-xs text-ink-muted">{c.fullNote}</p>
        </div>
      </section>

      <section id="method" className="pb-16 border-t border-ink/10 pt-14 scroll-mt-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className={h2}>{c.howToReadTitle}</h2>
            <ul className="mt-5 space-y-3 text-ink-soft leading-relaxed list-disc pl-5">
              {c.howToRead.map((t) => <li key={t}>{t.replace('{min}', min)}</li>)}
            </ul>
          </div>
          <div>
            <h2 className={h2}>{c.methodTitle}</h2>
            <ul className="mt-5 space-y-3 text-ink-soft leading-relaxed list-disc pl-5">
              {c.method.map((t) => <li key={t}>{t.replace('{min}', min)}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="download" className="pb-16 border-t border-ink/10 pt-14 scroll-mt-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className={h2}>{c.downloadTitle}</h2>
            <p className="mt-5 no-print"><a href="/khaoyai/data.csv" download className="text-brand-trust underline underline-offset-4" data-testid="khaoyai-csv">{c.downloadCsv}</a></p>
            <p className="mt-4 text-ink-soft"><span className="text-ink-muted">{c.citeLabel}: </span>{c.cite.replace('{date}', dataDate)}</p>
          </div>
          <div>
            <h2 className={h2}>{c.correctionsTitle}</h2>
            <p className="mt-5 text-ink-soft" data-testid="khaoyai-corrections">{c.correctionsNone}</p>
          </div>
        </div>
      </section>

      <section className="pb-16 no-print">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-2xl border border-ink/15 p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className={h2}>{c.subscribeTitle}</h2>
              <p className="mt-2 text-ink-soft">{c.subscribeBody}</p>
            </div>
            <TrackedLink href={LINE_URL} placement="index_subscribe" lang={lang}
              className="mt-5 md:mt-0 shrink-0 inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3.5 text-base font-medium text-white hover:bg-brand-deep transition">
              {c.subscribeButton}
            </TrackedLink>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm text-ink-muted flex flex-wrap gap-x-4 gap-y-2">
          <span>{c.footer}</span>
          <a href={content[lang].footer.privacy.href} className="underline underline-offset-4">{c.privacy}</a>
        </div>
      </footer>
    </main>
  );
}

/** schema.org Dataset for the index (no price offer — rule 5 of check-no-pricing). */
function dataset(feed: KhaoYaiFeed, name: string, description: string, lang: Lang) {
  const nights = feed.zones.flatMap((z) => z.nights.map((n) => n.date)).sort();
  return {
    '@context': 'https://schema.org', '@type': 'Dataset', name, description, inLanguage: lang === 'th' ? 'th' : 'en',
    url: `https://www.ratedesk.ai/${lang}/khaoyai`,
    temporalCoverage: nights.length ? `${nights[0]}/${nights[nights.length - 1]}` : undefined,
    spatialCoverage: { '@type': 'Place', name: 'Khao Yai, Nakhon Ratchasima, Thailand' },
    creator: { '@type': 'Organization', name: 'Aurasea (AuraSea Co., Ltd.)', email: 'hello@aurasea.ai' },
    dateModified: feed.updatedAt,
    distribution: [{ '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: 'https://www.ratedesk.ai/khaoyai/data.csv' }],
    isAccessibleForFree: true,
    license: 'Aggregates only; cite as "Khao Yai Stay Index (Aurasea)"',
  };
}
