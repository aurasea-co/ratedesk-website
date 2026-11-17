import { ImageResponse } from 'next/og';
import { getProof } from '@/lib/proof';

/**
 * The home page share image (WS2, 18 Nov 2026). Latin only, on purpose — Satori
 * drops Thai tone marks after an upper vowel ("ที่" → "ที"), so the real Thai
 * message cannot be drawn here. The count comes from last night's real run; with
 * no data the line is left out, never a made-up number.
 */
export const homeOgSize = { width: 1200, height: 630 };

export async function homeOgImage() {
  const proof = await getProof();
  const total = proof?.trackedProperties?.total;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#FBF9F4' }}>
        <div style={{ fontSize: 30, color: '#1F5E9E', letterSpacing: 4 }}>RATEDESK</div>
        <div style={{ fontSize: 66, color: '#042C53', fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>The rate to sell, every night, on LINE</div>
        <div style={{ fontSize: 32, color: '#4A5568', marginTop: 24 }}>For small hotels and resorts in Thailand · You decide</div>
        {total ? (
          <div style={{ display: 'flex', alignItems: 'center', fontSize: 30, color: '#0F6E56', marginTop: 48 }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, background: '#1D9E75', marginRight: 16 }} />
            {`Tracking ${total} properties every night`}
          </div>
        ) : null}
      </div>
    ),
    homeOgSize,
  );
}
