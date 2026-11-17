import { content, SIGNUP_URL, type Lang } from '@/lib/content';
import { flagOf, type Proof } from '@/lib/proof';
import { RealMessage } from '@/components/proof/RealMessage';
import { Quotes } from '@/components/proof/Quotes';
import { PilotResults } from '@/components/proof/PilotResults';
import { TrackedLink } from '@/components/TrackedLink';

// WS2 (18 Nov 2026) — the rebuilt ratedesk.ai sections between the Khao Yai Index and the FAQ. Copy in lib/content;
// feature blocks and the step wording follow the app's flags (/api/public/proof). No illustrative numbers anywhere:
// what is dated or counted comes from live data, and a block with no data is not drawn.

const h2 = (th: boolean) =>
  `${th ? 'display-thai text-[1.9rem] md:text-[2.4rem]' : 'display-serif text-[2.4rem] md:text-[3rem]'} mt-5 text-brand-navy text-balance leading-[1.15]`;
const fontOf = (lang: Lang) => (lang === 'th' ? 'font-thai' : 'font-sans');

export function RealMessageSection({ lang, proof }: { lang: Lang; proof: Proof | null }) {
  if (!proof?.messageSnapshot?.lines.length) return null;
  const c = content[lang].realMessage;
  return (
    <section id="message" className="relative py-24 md:py-32 bg-brand-sand border-t border-ink/10 scroll-mt-6">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-y-10 md:gap-14 items-center">
        <div className="col-span-12 md:col-span-6">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className={h2(lang === 'th')}>{c.title}</h2>
          <p className={`${fontOf(lang)} mt-6 text-lg text-ink-soft text-pretty`}>{c.lead}</p>
        </div>
        <div className="col-span-12 md:col-span-6 min-w-0">
          <RealMessage proof={proof} lang={lang} />
        </div>
      </div>
    </section>
  );
}

export function ProblemFix({ lang }: { lang: Lang }) {
  const c = content[lang].problemFix;
  const font = fontOf(lang);
  return (
    <section id="problem" className="relative py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="eyebrow">{c.eyebrow}</p>
        <h2 className={h2(lang === 'th')}>{c.title}</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {c.pairs.map((p) => (
            <li key={p.problem} className={`${font} rounded-2xl border border-ink/10 bg-paper-soft p-6`}>
              <p className="text-ink-muted line-through decoration-ink/30">{p.problem}</p>
              <p className="mt-3 text-lg font-semibold text-brand-navy">→ {p.fix}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Features({ lang, proof }: { lang: Lang; proof: Proof | null }) {
  const c = content[lang].features;
  const items = c.items
    .map((it) => ({ ...it, state: flagOf(proof, it.key) }))
    .filter((it) => it.state !== 'hidden');
  if (!items.length) return null;
  const font = fontOf(lang);
  return (
    <section id="features" className="relative py-24 md:py-32 border-t border-ink/10 scroll-mt-6">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="eyebrow">{c.eyebrow}</p>
        <h2 className={h2(lang === 'th')}>{c.title}</h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.key} data-feature={it.key} className={`${font} rounded-2xl border border-ink/10 bg-paper-soft p-6`}>
              <p className="flex flex-wrap items-center gap-2 text-lg font-semibold text-brand-navy">
                {it.title}
                {it.state === 'soon' && (
                  <span className="rounded-full bg-brand-trust/10 px-2.5 py-0.5 text-xs font-medium text-brand-trust">{c.soon}</span>
                )}
              </p>
              <p className="mt-2 text-ink-soft leading-relaxed text-pretty">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Steps({ lang, proof }: { lang: Lang; proof: Proof | null }) {
  const c = content[lang].steps;
  const items = flagOf(proof, 'healthCheck') === 'live' ? c.itemsHealthCheck : c.items;
  const font = fontOf(lang);
  return (
    <section id="steps" className="relative py-24 md:py-32 border-t border-ink/10 scroll-mt-6">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="eyebrow">{c.eyebrow}</p>
        <h2 className={h2(lang === 'th')}>{c.title}</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((t, i) => (
            <li key={t} className={`${font} flex gap-4`}>
              <span aria-hidden className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-brand-mint font-semibold text-brand-deep">{i + 1}</span>
              <p className="pt-1 text-lg leading-relaxed text-ink-soft text-pretty">
                {t}
                {i === 1 && (
                  <>
                    {' '}
                    <TrackedLink href={SIGNUP_URL} placement="steps" lang={lang} className="whitespace-nowrap font-medium text-brand-trust underline underline-offset-4">{content[lang].cta.signup} ↗</TrackedLink>
                  </>
                )}
              </p>
            </li>
          ))}
        </ol>
        <p className={`${font} mt-10 max-w-3xl text-ink-muted text-pretty`}>{c.note}</p>
      </div>
    </section>
  );
}

export function ProofSection({ lang, proof }: { lang: Lang; proof: Proof | null }) {
  const hasQuotes = (proof?.quotes ?? []).some((q) => (lang === 'en' ? q.textEn && q.labelEn : q.textTh && q.labelTh));
  if (!hasQuotes && !proof?.pilotResults) return null;
  const c = content[lang].proof;
  return (
    <section id="proof" className="relative py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="eyebrow">{c.eyebrow}</p>
        <h2 className={h2(lang === 'th')}>{c.title}</h2>
        <div className="mt-12 space-y-10">
          <PilotResults proof={proof} lang={lang} />
          <Quotes proof={proof} lang={lang} />
        </div>
      </div>
    </section>
  );
}

export function Trust({ lang, proof }: { lang: Lang; proof: Proof | null }) {
  const c = content[lang].trust;
  const isThai = lang === 'th';
  const label = proof?.messageSnapshot ? (isThai ? proof.messageSnapshot.labelTh : proof.messageSnapshot.labelEn) : '';
  const built = label ? c.builtWith.replace('{label}', isThai ? label : label.replace(/ · /g, ', ')) : c.builtFallback;
  return (
    <section id="trust" className="relative py-24 md:py-28 bg-brand-deep text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow !text-brand-mint">{c.eyebrow}</p>
          <h2 className={`${isThai ? 'display-thai text-[1.9rem] md:text-[2.4rem]' : 'display-serif text-[2.4rem] md:text-[3rem]'} mt-5 text-balance leading-[1.15]`}>{c.title}</h2>
          <p className={`${fontOf(lang)} mt-6 text-white/80`}>{built}</p>
        </div>
        <ul className="col-span-12 md:col-span-7 space-y-5">
          {c.checks.map((t) => (
            <li key={t} className="flex gap-4">
              <span aria-hidden className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-mint text-brand-deep font-bold">✓</span>
              <p className={`${fontOf(lang)} pt-0.5 text-lg leading-relaxed text-white/90 text-pretty`}>{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Compare({ lang }: { lang: Lang }) {
  const c = content[lang].compare;
  const font = fontOf(lang);
  return (
    <section id="compare" className="relative py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="eyebrow">{c.eyebrow}</p>
        <h2 className={h2(lang === 'th')}>{c.title}</h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10">
          <table className={`${font} w-full text-left`}>
            <thead className="bg-paper-warm text-sm text-ink-muted">
              <tr>
                {c.columns.map((h, i) => (
                  <th key={i} scope="col" className={`px-4 py-3 font-medium ${i === 2 ? 'text-brand-navy' : ''}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.rows.map((r) => (
                <tr key={r[0]} className="border-t border-ink/10 align-top">
                  <th scope="row" className="px-4 py-4 text-sm font-semibold text-ink-soft whitespace-nowrap">{r[0]}</th>
                  <td className="px-4 py-4 text-ink-muted">{r[1]}</td>
                  <td className="px-4 py-4 font-medium text-brand-navy">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
