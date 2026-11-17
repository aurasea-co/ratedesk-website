import type { Lang } from '@/lib/content';
import type { Proof } from '@/lib/proof';

/**
 * WS1: "ติดตามราคา {N} ที่พักใน{areas} ทุกคืน". The number and areas come from
 * last night's real run; with no data it says the same thing without a number
 * (never a made-up one).
 */
export function LiveCount({ proof, lang, className = '' }: { proof: Proof | null; lang: Lang; className?: string }) {
  const t = proof?.trackedProperties;
  const areas = (t?.byArea ?? []).map((a) => (lang === 'th' ? a.nameTh : a.nameEn));
  const where = areas.length ? (lang === 'th' ? `ใน${areas.join(' ')}` : ` in ${joinEn(areas)}`) : '';
  const text = t
    ? lang === 'th'
      ? `ติดตามราคา ${t.total.toLocaleString('th-TH')} ที่พัก${where} ทุกคืน`
      : `Tracking ${t.total.toLocaleString('en-US')} properties${where} every night`
    : lang === 'th'
      ? 'ติดตามราคาที่พักรอบตัวคุณทุกคืน'
      : 'Tracking the properties around you every night';
  return (
    <p data-proof="live-count" className={`${lang === 'th' ? 'font-thai' : 'font-sans'} text-sm text-ink-muted ${className}`}>
      <span aria-hidden className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-forest align-middle" />
      {text}
    </p>
  );
}

function joinEn(xs: string[]): string {
  return xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`;
}
