import type { Lang } from '@/lib/content';
import type { Proof } from '@/lib/proof';

/** WS1: approved customer quotes (consent recorded in the app). Hidden when there are none. */
export function Quotes({ proof, lang }: { proof: Proof | null; lang: Lang }) {
  const qs = (proof?.quotes ?? [])
    .map((q) => ({ text: lang === 'en' ? q.textEn ?? '' : q.textTh, label: lang === 'en' ? q.labelEn ?? '' : q.labelTh }))
    .filter((q) => q.text && q.label);
  if (!qs.length) return null;
  const font = lang === 'th' ? 'font-thai' : 'font-sans';
  return (
    <ul data-proof="quotes" className={`${font} grid gap-6 md:grid-cols-2`}>
      {qs.map((q, i) => (
        <li key={i} className="rounded-2xl border border-ink/10 bg-paper-soft p-6">
          <blockquote className="text-lg leading-relaxed text-ink-soft">“{q.text}”</blockquote>
          <p className="mt-3 text-sm text-ink-muted">— {q.label}</p>
        </li>
      ))}
    </ul>
  );
}
