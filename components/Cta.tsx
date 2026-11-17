import { content, LINE_URL, type Lang } from '@/lib/content';
import { flagOf, type Proof } from '@/lib/proof';
import { TrackedLink } from '@/components/TrackedLink';

/**
 * The ONE call to action (WS2, 18 Nov 2026), used in the hero and the final
 * section. Its wording follows the app's flags: the 5-minute health check once
 * GR11 is live, else the free 30-night chart on LINE. Tracked by placement.
 */
export function primaryCtaText(lang: Lang, proof: Proof | null): string {
  const c = content[lang].cta;
  return flagOf(proof, 'healthCheck') === 'live' ? c.primaryHealthCheck : c.primary;
}

export function CtaButtons({
  lang,
  proof,
  dark = false,
  where,
}: {
  lang: Lang;
  proof: Proof | null;
  dark?: boolean;
  where: 'hero' | 'final';
}) {
  const font = lang === 'th' ? 'font-thai' : 'font-sans';
  return (
    <TrackedLink
      href={LINE_URL}
      placement={`${where}_primary`}
      lang={lang}
      className={`${font} inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-medium text-center transition ${
        dark ? 'bg-brand-mint text-brand-deep hover:bg-white' : 'bg-cta text-cta-ink hover:bg-cta-hover'
      }`}
    >
      {primaryCtaText(lang, proof)}
      <span aria-hidden>→</span>
    </TrackedLink>
  );
}
