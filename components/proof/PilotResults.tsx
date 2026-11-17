import type { Lang } from '@/lib/content';
import type { Proof } from '@/lib/proof';

/**
 * WS1: the pilot results card. GR1 has not produced any, so the app always
 * answers null and this renders nothing. When GR1 ships, every figure must
 * carry "จาก {n} คืน" — build that here against its real shape, not before.
 */
export function PilotResults({ proof }: { proof: Proof | null; lang: Lang }) {
  if (!proof?.pilotResults) return null;
  return null;
}
