import type { Lang } from '@/lib/content';
import { sentDate, type Proof } from '@/lib/proof';

/**
 * WS1: a REAL RateDesk LINE message (anonymised in the app, published by hand
 * after a preview), drawn as a phone. Hidden when none is published — the site
 * never shows an illustrative sample again.
 */
export function RealMessage({ proof, lang }: { proof: Proof | null; lang: Lang }) {
  const m = proof?.messageSnapshot;
  if (!m || !m.lines.length) return null;
  const font = lang === 'th' ? 'font-thai' : 'font-sans';
  const caption = lang === 'th'
    ? `ข้อความจริง · ${m.labelTh} · ส่งเมื่อ ${sentDate(m.sentAt, 'th')} · ซ่อนชื่อที่พัก`
    : `Real message · ${m.labelEn} · sent ${sentDate(m.sentAt, 'en')} · property names hidden`;
  return (
    <figure data-proof="real-message" className="mx-auto w-full max-w-[380px]">
      <div className="rounded-[2rem] border-[8px] sm:border-[10px] border-brand-deep bg-[#8CABD9]/25 p-3 shadow-xl">
        {/* The message is Thai, as sent. */}
        <div lang="th" className="force-light font-thai rounded-2xl bg-white px-4 py-3 text-ink-soft space-y-1">
          {m.lines.map((l, i) =>
            l.kind === 'separator' ? (
              <hr key={i} className="my-2 border-ink/10" />
            ) : (
              <p
                key={i}
                className={[
                  l.size === 'lg' ? 'text-base' : l.size === 'sm' ? 'text-xs' : 'text-sm',
                  l.bold ? 'font-semibold text-brand-navy' : '',
                  l.muted ? 'text-ink-subtle' : '',
                  i === 0 ? 'text-xs' : '',
                  'leading-relaxed break-words',
                ].join(' ')}
              >
                {l.text}
              </p>
            ),
          )}
        </div>
      </div>
      <figcaption className={`${font} mt-3 text-center text-xs text-ink-subtle`}>{caption}</figcaption>
    </figure>
  );
}
