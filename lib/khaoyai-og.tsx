import { ImageResponse } from 'next/og';
import { getKhaoYaiIndex, zonesWithData } from '@/lib/khaoyai';

/**
 * The share image for /khaoyai: the first zone's 30-night median line. Text is
 * Latin only — Satori drops Thai tone marks after an upper vowel ("ที่" → "ที"),
 * learned in the app's WC3.
 */
export const ogSize = { width: 1200, height: 630 };

export async function khaoYaiOgImage() {
  const feed = await getKhaoYaiIndex();
  const zone = feed ? zonesWithData(feed)[0] : undefined;
  const pts = zone?.nights.map((n, i) => ({ i, v: n.median })) ?? [];
  const vals = pts.map((p) => p.v).filter((v): v is number => v != null);
  const lo = vals.length ? Math.min(...vals) * 0.9 : 0;
  const hi = vals.length ? Math.max(...vals) * 1.05 : 1;
  const W = 1040;
  const H = 300;
  const x = (i: number) => (i / Math.max(1, pts.length - 1)) * W;
  const y = (v: number) => H - ((v - lo) / (hi - lo)) * H;
  const d = pts
    .map((p, k) => (p.v == null ? null : `${k === 0 || pts[k - 1].v == null ? 'M' : 'L'}${x(p.i).toFixed(1)},${y(p.v).toFixed(1)}`))
    .filter(Boolean)
    .join(' ');
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#FBF9F4', padding: 80 }}>
        <div style={{ fontSize: 30, color: '#1F5E9E', letterSpacing: 4 }}>RATEDESK</div>
        <div style={{ fontSize: 64, color: '#042C53', fontWeight: 700, marginTop: 12 }}>Khao Yai Index</div>
        <div style={{ fontSize: 30, color: '#4A5568', marginTop: 8 }}>
          {zone ? `${zone.nameEn} · median room rate, next 30 nights` : 'Room rates, next 30 nights'}
        </div>
        <svg width={W} height={H} style={{ marginTop: 40 }}>
          <path d={d} stroke="#042C53" strokeWidth={6} fill="none" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    ogSize,
  );
}
