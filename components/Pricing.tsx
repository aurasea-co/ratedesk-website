import { content, type Lang } from '@/lib/content';

export function Pricing({ lang }: { lang: Lang }) {
  const c = content[lang];
  const p = c.pricing;
  const isThai = lang === 'th';
  const bodyFont = isThai ? 'font-thai' : 'font-sans';
  const displayFont = isThai ? 'display-thai' : 'display-serif';

  return (
    <section id="pricing" className="relative py-24 md:py-32 border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">{p.eyebrow}</p>
            <h2 className={`${displayFont} text-[2.2rem] md:text-[3rem] mt-5 text-ink text-balance leading-[1.1]`}>
              {p.title}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-14">
            <p className={`${bodyFont} text-lg text-ink-soft leading-[1.7] text-pretty`}>
              {p.lead}
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* Annual */}
          <div className="relative border-2 border-sea-deep rounded-2xl p-8 bg-paper flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <span className={`${bodyFont} text-xs tracking-wide-soft uppercase text-sea-deep font-medium`}>
                {p.annual.label}
              </span>
              <span className="text-xs bg-sea-deep text-paper px-2.5 py-1 rounded-full tracking-wide-soft uppercase font-medium">
                {p.annual.badge}
              </span>
            </div>
            <div className="mb-2">
              <span className={`${displayFont} text-[3rem] md:text-[3.5rem] text-ink leading-none`}>
                {p.annual.price}
              </span>
              <span className={`${bodyFont} text-sm text-ink-muted ml-2`}>{p.annual.unit}</span>
            </div>
            <p className={`${bodyFont} text-sm text-ink-muted mb-8`}>{p.annual.note}</p>
            <a
              href="mailto:hello@ratedesk.ai"
              className={`${bodyFont} mt-auto block text-center bg-sea-deep text-paper py-3.5 rounded-xl text-sm font-medium hover:bg-sea-deep/90 transition-colors`}
            >
              {p.cta}
            </a>
          </div>

          {/* Founding Members */}
          <div className="relative border border-gold rounded-2xl p-8 bg-[#FEFAF0] flex flex-col order-first md:order-none">
            <div className="flex items-start justify-between mb-6">
              <span className={`${bodyFont} text-xs tracking-wide-soft uppercase text-amber-700 font-medium`}>
                {p.founding.label}
              </span>
              <span className="text-xs bg-gold text-ink px-2.5 py-1 rounded-full tracking-wide-soft uppercase font-medium">
                {p.founding.badge}
              </span>
            </div>
            <div className="mb-2">
              <span className={`${displayFont} text-[3rem] md:text-[3.5rem] text-ink leading-none`}>
                {p.founding.price}
              </span>
              <span className={`${bodyFont} text-sm text-ink-muted ml-2`}>{p.founding.unit}</span>
            </div>
            <p className={`${bodyFont} text-sm text-amber-700 mb-6 font-medium`}>{p.founding.note}</p>
            <ul className="space-y-2 mb-8">
              {p.founding.perks.map((perk, i) => (
                <li key={i} className={`${bodyFont} flex items-start gap-2.5 text-sm text-ink-soft`}>
                  <span className="shrink-0 mt-0.5 text-gold">✦</span>
                  {perk}
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@ratedesk.ai"
              className={`${bodyFont} mt-auto block text-center border-2 border-gold text-ink py-3.5 rounded-xl text-sm font-medium hover:bg-gold/20 transition-colors`}
            >
              {p.ctaSecondary}
            </a>
          </div>

          {/* Monthly */}
          <div className="relative border border-ink/15 rounded-2xl p-8 bg-paper flex flex-col">
            <div className="mb-6">
              <span className={`${bodyFont} text-xs tracking-wide-soft uppercase text-ink-muted font-medium`}>
                {p.monthly.label}
              </span>
            </div>
            <div className="mb-2">
              <span className={`${displayFont} text-[3rem] md:text-[3.5rem] text-ink leading-none`}>
                {p.monthly.price}
              </span>
              <span className={`${bodyFont} text-sm text-ink-muted ml-2`}>{p.monthly.unit}</span>
            </div>
            <p className={`${bodyFont} text-sm text-ink-muted mb-8`}>{p.monthly.note}</p>
            <a
              href="mailto:hello@ratedesk.ai"
              className={`${bodyFont} mt-auto block text-center border border-ink/20 text-ink py-3.5 rounded-xl text-sm font-medium hover:border-ink/50 transition-colors`}
            >
              {p.cta}
            </a>
          </div>
        </div>

        {/* What's included */}
        <div className="border-t border-ink/10 pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {p.includes.map((item, i) => (
              <div key={i} className={`${bodyFont} flex items-start gap-3 text-[0.95rem] text-ink-soft`}>
                <span className="shrink-0 mt-0.5 text-sea-deep">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Promotions strip */}
        <div className="border-t border-ink/10 pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {p.promos.map((promo, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center">
                <span className="text-[0.65rem] font-bold text-sea-deep tracking-tight leading-none text-center">{promo.icon}</span>
              </div>
              <p className={`${bodyFont} text-sm text-ink-soft leading-[1.6] text-pretty`}>{promo.text}</p>
            </div>
          ))}
        </div>

        {/* MenuDesk footnote */}
        <p className={`${bodyFont} text-xs text-ink-muted border-t border-ink/10 pt-6`}>
          {p.menudesk}
        </p>

      </div>
    </section>
  );
}
