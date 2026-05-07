import { content, type Lang } from '@/lib/content';

export function Hero({ lang }: { lang: Lang }) {
  const c = content[lang];
  const isThai = lang === 'th';
  const titleClass = isThai
    ? 'display-thai text-[2.4rem] sm:text-[3.2rem] md:text-[4.4rem] leading-[1.15]'
    : 'display-serif text-[2.6rem] sm:text-[3.8rem] md:text-[5.4rem]';

  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden grain">
      {/* Atmospheric background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper to-sea-pale/50" />
        {/* Horizon arcs — subtle nod to "sea" + "rate curves" */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full horizon-anim opacity-[0.18]"
          viewBox="0 0 1600 600"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,520 Q400,440 800,470 T1600,440"
            stroke="#1F4E6F"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,540 Q400,480 800,495 T1600,470"
            stroke="#1F4E6F"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M0,560 Q400,520 800,520 T1600,500"
            stroke="#1F4E6F"
            strokeWidth="1"
            fill="none"
            opacity="0.35"
          />
        </svg>
        {/* Soft golden sun */}
        <div className="absolute top-32 right-[12%] w-[280px] h-[280px] rounded-full bg-gold-pale opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-9 lg:col-span-8">
            <p className="eyebrow reveal delay-1">{c.hero.eyebrow}</p>

            <h1
              className={`${titleClass} mt-6 text-ink text-balance reveal delay-2`}
            >
              {c.hero.title.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p
              className={`${
                isThai ? 'font-thai' : 'font-sans'
              } mt-8 md:mt-10 text-lg md:text-xl text-ink-soft max-w-prose-narrow leading-relaxed text-pretty reveal delay-3`}
            >
              {c.hero.lead}
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 lg:col-span-4 md:pt-2 flex md:justify-end">
            <div className="md:max-w-[260px] md:text-right reveal delay-4">
              <div className="hidden md:block w-12 h-px bg-ink/30 ml-auto mb-5" />
              <p
                className={`${
                  isThai ? 'font-thai' : 'font-sans'
                } text-sm text-ink-muted leading-relaxed italic`}
              >
                {c.hero.caption}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative editorial credits row */}
        <div className="mt-20 md:mt-28 flex items-end justify-between reveal delay-5">
          <div className="flex items-center gap-3 text-xs tracking-wide-soft uppercase text-ink-muted">
            <span className="block w-8 h-px bg-ink/40" />
            <span>Aurasea · Vol. 01 · 2026</span>
          </div>
          <a
            href="#problem"
            className="text-xs tracking-wide-soft uppercase text-ink-muted hover:text-ink transition flex items-center gap-2 group"
          >
            <span>{isThai ? 'อ่านต่อ' : 'Read on'}</span>
            <span className="block group-hover:translate-y-0.5 transition-transform">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
