import { getKhaoYaiIndex } from '@/lib/khaoyai';

// KX2 — the Khao Yai Stay Index aggregates as CSV: one row per zone × night, with n. No property name, id or single
// property's price — the feed carries none (assertFeed refuses any other field). Hourly, like the page.
export const revalidate = 3600;

const COLS = ['zone', 'date', 'median_baht', 'common_range_low_baht', 'common_range_high_baht', 'likely_full_share', 'priced', 'properties', 'min_priced', 'updated_at'] as const;

export async function GET() {
  const feed = await getKhaoYaiIndex();
  if (!feed) return new Response('Not found', { status: 404 });
  const lines = [COLS.join(',')];
  for (const z of feed.zones) for (const n of z.nights) {
    lines.push([z.id, n.date, n.median ?? '', n.p25 ?? '', n.p75 ?? '', n.noPrice ?? '', n.priced, z.properties, feed.minPriced, feed.updatedAt].join(','));
  }
  return new Response('﻿' + lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="khao-yai-stay-index.csv"' },
  });
}
