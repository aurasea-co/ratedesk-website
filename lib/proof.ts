/**
 * WS1 (18 Nov 2026): the real-proof pieces, read from the app's public endpoint
 * (GET https://app.auraseaos.com/api/public/proof). This site keeps NO copy: it
 * reads on the server with hourly ISR. Unlike the Khao Yai feed, a failure here
 * never breaks the page — every proof component simply hides (or drops its
 * number) when the data is missing. Nothing in it can name a property: the app
 * re-picks every field and refuses names before anything is published.
 *
 *   PROOF_URL=…   override the endpoint (preview / local); default production.
 */

export type ProofLine =
  | { kind: 'text'; text: string; bold: boolean; muted: boolean; size: 'sm' | 'md' | 'lg' }
  | { kind: 'separator' };

export type Proof = {
  trackedProperties: { total: number; night: string; byArea: Array<{ key: string; nameTh: string; nameEn: string; count: number }> } | null;
  liveAreas: Array<{ key: string; nameTh: string; nameEn: string }>;
  messageSnapshot: { labelTh: string; labelEn: string; sentAt: string; lines: ProofLine[] } | null;
  quotes: Array<{ textTh: string; textEn: string | null; labelTh: string; labelEn: string | null }>;
  pilotResults: null | { [k: string]: unknown };
  flags: Record<string, 'live' | 'soon' | 'hidden'>;
};

export const PROOF_REVALIDATE_SECONDS = 3600;
const DEFAULT_URL = 'https://app.auraseaos.com/api/public/proof';

export async function getProof(): Promise<Proof | null> {
  try {
    const res = await fetch(process.env.PROOF_URL || DEFAULT_URL, { next: { revalidate: PROOF_REVALIDATE_SECONDS } });
    if (!res.ok) return null;
    return asProof(await res.json());
  } catch {
    return null;
  }
}

/** Accepts only the agreed shape; anything else counts as "no data". */
export function asProof(x: unknown): Proof | null {
  const p = x as Proof;
  if (!p || typeof p !== 'object' || !Array.isArray(p.liveAreas) || !Array.isArray(p.quotes) || typeof p.flags !== 'object') return null;
  return p;
}

/** A flag the endpoint does not know (or no data) counts as hidden. */
export function flagOf(proof: Proof | null, key: string): 'live' | 'soon' | 'hidden' {
  return proof?.flags?.[key] ?? 'hidden';
}

export function sentDate(iso: string, lang: 'th' | 'en'): string {
  return new Date(iso).toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-GB', {
    timeZone: 'Asia/Bangkok', day: 'numeric', month: 'short', year: 'numeric',
  });
}
