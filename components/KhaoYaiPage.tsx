import { notFound } from 'next/navigation';
import { content, LINE_URL, type Lang } from '@/lib/content';
import { getKhaoYaiIndex } from '@/lib/khaoyai';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { KhaoYaiSection } from '@/components/KhaoYaiSection';
import { StickyLine } from '@/components/StickyLine';
import { TrackedLink } from '@/components/TrackedLink';

/** /th/khaoyai and /en/khaoyai (W1-A2). 404 while the index is switched off. */
export async function KhaoYaiPage({ lang }: { lang: Lang }) {
  const feed = await getKhaoYaiIndex();
  if (!feed) notFound();
  const c = content[lang].index.page;
  const isThai = lang === 'th';
  const font = isThai ? 'font-thai' : 'font-sans';
  const h2 = isThai ? 'display-thai text-[1.5rem]' : 'display-serif text-[1.8rem]';
  return (
    <main className="min-h-screen">
      <Header lang={lang} />
      <section className="pt-36 md:pt-44 pb-4">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h1 className={`${isThai ? 'display-thai text-[2.4rem] md:text-[3.4rem]' : 'display-serif text-[2.8rem] md:text-[4rem]'} text-ink text-balance`}>
            {c.h1}
          </h1>
          <p className={`${font} mt-5 text-lg md:text-xl text-ink-soft`}>{c.lead}</p>
        </div>
      </section>
      <KhaoYaiSection lang={lang} feed={feed} variant="page" />
      <section className="pb-24 border-t border-ink/10 pt-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className={`${h2} text-brand-navy`}>{c.howToReadTitle}</h2>
            <ul className={`${font} mt-5 space-y-3 text-ink-soft leading-relaxed list-disc pl-5`}>
              {c.howToRead.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={`${h2} text-brand-navy`}>{c.methodTitle}</h2>
            <ul className={`${font} mt-5 space-y-3 text-ink-soft leading-relaxed list-disc pl-5`}>
              {c.method.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-14">
          <div className="rounded-2xl bg-brand-deep p-8 md:p-10 md:flex md:items-center md:justify-between md:gap-8">
            <p className={`${font} text-lg md:text-xl text-white text-pretty`}>{c.monthly}</p>
            <TrackedLink
              href={LINE_URL}
              placement="khaoyai_monthly"
              lang={lang}
              className={`${font} mt-5 md:mt-0 shrink-0 inline-flex items-center justify-center rounded-full bg-brand-mint px-6 py-3.5 text-base font-medium text-brand-deep hover:bg-white transition`}
            >
              {c.monthlyButton}
            </TrackedLink>
          </div>
        </div>
      </section>
      <Footer lang={lang} />
      <StickyLine lang={lang} />
    </main>
  );
}
