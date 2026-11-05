import { content, type Lang } from '@/lib/content';

/** Founder — text only, no photo, no hotel name (WEB3-E). */
export function Founder({ lang }: { lang: Lang }) {
  const c = content[lang].founder;
  const isThai = lang === 'th';
  return (
    <section className="relative py-24 md:py-32 bg-sea-deep text-paper overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-2">
            <span className="block text-gold-soft eyebrow">{c.eyebrow}</span>
            <span className="block w-12 h-px bg-gold-soft/50 mt-4" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              className={`${
                isThai ? 'display-thai text-[2rem] md:text-[2.6rem]' : 'display-serif text-[2.4rem] md:text-[3.2rem] font-light'
              } text-paper text-balance leading-[1.1]`}
            >
              {c.title}
            </h2>
            <p
              className={`${
                isThai ? 'font-thai' : 'font-sans'
              } mt-7 text-lg md:text-xl text-paper/80 leading-[1.65] max-w-2xl text-pretty`}
            >
              {c.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
