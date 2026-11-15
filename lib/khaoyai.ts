/**
 * The Khao Yai Index feed (W1-A). The data comes from the app's public IX2 route;
 * this site keeps NO copy of it. It is read on the server with hourly ISR, so the
 * figures are in the HTML and the page refreshes itself after each nightly run.
 *
 * Switches (all server-only env vars):
 *   KHAOYAI_INDEX_ENABLED=1   show the section and the /khaoyai pages (off → nothing)
 *   KHAOYAI_INDEX_URL=…       the IX2 feed (JSON, the schema below)
 *   KHAOYAI_INDEX_MOCK=1      use a fabricated feed instead — PREVIEW ONLY. Its
 *                             figures are invented; never enable it in production.
 *
 * A feed that fails or is malformed THROWS: under ISR the last good page keeps
 * being served with its own date, and a build fails rather than publish an empty
 * chart. IX2 must serve exactly this schema.
 */

export type KhaoYaiNight = {
  /** YYYY-MM-DD, Asia/Bangkok. */
  date: string;
  /** Whole baht; null when fewer than `minPriced` properties are priced. */
  median: number | null;
  p25: number | null;
  p75: number | null;
  priced: number;
  /** 0–1: share of properties that raised their rate within 7 days. */
  raised7d: number | null;
  /** 0–1: share of properties with no price on Google that night. */
  noPrice: number | null;
  weekend: boolean;
  holidayTh: string | null;
  holidayEn: string | null;
};

export type KhaoYaiZone = {
  id: string;
  nameTh: string;
  nameEn: string;
  properties: number;
  summaryTh: string;
  summaryEn: string;
  nights: KhaoYaiNight[];
};

export type KhaoYaiFeed = {
  /** ISO timestamp of the index run. */
  updatedAt: string;
  minPriced: number;
  zones: KhaoYaiZone[];
};

export const INDEX_REVALIDATE_SECONDS = 3600;

export function indexEnabled(): boolean {
  return process.env.KHAOYAI_INDEX_ENABLED === '1';
}

export async function getKhaoYaiIndex(): Promise<KhaoYaiFeed | null> {
  if (!indexEnabled()) return null;
  if (process.env.KHAOYAI_INDEX_MOCK === '1') {
    const { mockKhaoYaiFeed } = await import('@/lib/khaoyai-mock');
    return mockKhaoYaiFeed(new Date());
  }
  const url = process.env.KHAOYAI_INDEX_URL;
  if (!url) throw new Error('KHAOYAI_INDEX_URL is not set');
  const res = await fetch(url, { next: { revalidate: INDEX_REVALIDATE_SECONDS } });
  if (!res.ok) throw new Error(`Khao Yai Index feed answered ${res.status}`);
  return assertFeed(await res.json());
}

/** Refuses a feed that is not the agreed shape, or that could name a property. */
export function assertFeed(x: unknown): KhaoYaiFeed {
  const f = x as KhaoYaiFeed;
  if (!f || typeof f.updatedAt !== 'string' || Number.isNaN(Date.parse(f.updatedAt))) {
    throw new Error('feed: bad updatedAt');
  }
  if (!Array.isArray(f.zones) || typeof f.minPriced !== 'number') throw new Error('feed: bad shape');
  const allowed = new Set([
    'date', 'median', 'p25', 'p75', 'priced', 'raised7d', 'noPrice', 'weekend', 'holidayTh', 'holidayEn',
  ]);
  for (const z of f.zones) {
    if (!Array.isArray(z.nights)) throw new Error('feed: zone without nights');
    for (const n of z.nights) {
      for (const k of Object.keys(n)) if (!allowed.has(k)) throw new Error(`feed: unexpected field ${k}`);
      if (n.median != null && n.priced < f.minPriced) throw new Error('feed: median below the minimum');
    }
  }
  return f;
}

/** Zones that have at least one night with a median. */
export function zonesWithData(feed: KhaoYaiFeed): KhaoYaiZone[] {
  return feed.zones.filter((z) => z.nights.some((n) => n.median != null));
}

/** Older than 36 hours → "latest data <date>", never implying it is today's (W1-A4). */
export const STALE_AFTER_HOURS = 36;
export function isStale(updatedAt: string, now: Date): boolean {
  return now.getTime() - Date.parse(updatedAt) > STALE_AFTER_HOURS * 3600_000;
}
