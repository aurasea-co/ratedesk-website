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

        {/* Pricing cards.
            Two, not three. The annual (฿575) and Founding Member (฿490) cards
            are gone with the prices behind them: bible §12 quotes monthly only
            and has no founding tier, so both were offers nobody could be sold.
            Checked before removing — every FOUNDING invitation ever issued
            went to press@/hello@aurasea.ai and none was accepted, so the
            "locked for life" promise bound no real customer. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {/* The price */}
          <div className="relative border-2 border-sea-deep rounded-2xl p-8 bg-paper flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <span className={`${bodyFont} text-xs tracking-wide-soft uppercase text-sea-deep font-medium`}>
                {p.standard.label}
              </span>
              <span className="text-xs bg-sea-deep text-paper px-2.5 py-1 rounded-full tracking-wide-soft uppercase font-medium">
                {p.standard.badge}
              </span>
            </div>
            <div className="mb-2">
              <span className={`${displayFont} text-[3rem] md:text-[3.5rem] text-ink leading-none`}>
                {p.standard.price}
              </span>
              <span className={`${bodyFont} text-sm text-ink-muted ml-2`}>{p.standard.unit}</span>
            </div>
            <p className={`${bodyFont} text-sm text-ink-muted mb-8`}>{p.standard.note}</p>
            <a
              href="mailto:hello@ratedesk.ai"
              className={`${bodyFont} mt-auto block text-center bg-sea-deep text-paper py-3.5 rounded-xl text-sm font-medium hover:bg-sea-deep/90 transition-colors`}
            >
              {p.cta}
            </a>
          </div>

          {/* The bundle — a real §12 offer, unlike the two cards it replaces */}
          <div className="relative border border-ink/15 rounded-2xl p-8 bg-paper flex flex-col">
            <div className="mb-6">
              <span className={`${bodyFont} text-xs tracking-wide-soft uppercase text-ink-muted font-medium`}>
                {p.bundle.label}
              </span>
            </div>
            <div className="mb-2">
              <span className={`${displayFont} text-[3rem] md:text-[3.5rem] text-ink leading-none`}>
                {p.bundle.price}
              </span>
              <span className={`${bodyFont} text-sm text-ink-muted ml-2`}>{p.bundle.unit}</span>
            </div>
            <p className={`${bodyFont} text-sm text-ink-muted mb-8`}>{p.bundle.note}</p>
            <a
              href="mailto:hello@ratedesk.ai"
              className={`${bodyFont} mt-auto block text-center border border-ink/20 text-ink py-3.5 rounded-xl text-sm font-medium hover:border-ink/50 transition-colors`}
            >
              {p.ctaSecondary}
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

        {/* What is paid for and not yet working.
            Sits with the inclusions deliberately. Auto Push is inside the
            ฿890 either way — §12 puts it there — but every PMS adapter is
            supportsWriteBack: false, so listing it beside the working
            features without saying so sold something that has never fired. */}
        <div className="border-t border-ink/10 pt-12 mb-12">
          <p className={`${bodyFont} text-xs tracking-wide-soft uppercase text-amber-700 font-medium mb-4`}>
            {p.notYet.label}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {p.notYet.items.map((item, i) => (
              <div key={i} className={`${bodyFont} flex items-start gap-3 text-[0.95rem] text-ink-muted`}>
                <span className="shrink-0 mt-0.5 text-amber-700">◦</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Promotions strip */}
        <div className="border-t border-ink/10 pt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
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
