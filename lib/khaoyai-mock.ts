import type { KhaoYaiFeed, KhaoYaiNight } from '@/lib/khaoyai';

/**
 * A FABRICATED Khao Yai Index feed with IX2's schema, for building and previewing
 * the section while IX2 waits on DataForSEO's terms. Every figure is invented
 * (a seeded pattern, not a measurement). Only loaded when KHAOYAI_INDEX_MOCK=1.
 */

const HOLIDAYS: Record<string, [string, string]> = {
  '2026-12-05': ['วันพ่อแห่งชาติ', 'Father’s Day'],
  '2026-12-07': ['วันหยุดชดเชยวันพ่อ', 'Father’s Day (substitute)'],
  '2026-12-10': ['วันรัฐธรรมนูญ', 'Constitution Day'],
  '2026-12-31': ['วันสิ้นปี', 'New Year’s Eve'],
  '2027-01-01': ['วันขึ้นปีใหม่', 'New Year’s Day'],
};

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };
}

/** Rounded to ฿10, and never one of the figures the price guard watches for. */
function baht(x: number): number {
  let v = Math.round(x / 10) * 10;
  while ([890, 990, 590, 390, 290, 190].includes(v)) v += 10;
  return v;
}

function bangkokDate(d: Date): string {
  return new Date(d.getTime() + 7 * 3600_000).toISOString().slice(0, 10);
}

export function mockKhaoYaiFeed(now: Date): KhaoYaiFeed {
  const start = bangkokDate(now);
  const zones = [
    { id: 'pakchong', nameTh: 'ปากช่อง', nameEn: 'Pak Chong', base: 1150, properties: 15 },
    { id: 'thanarat', nameTh: 'ธนะรัชต์', nameEn: 'Thanarat', base: 2350, properties: 15 },
    { id: 'musi', nameTh: 'หมูสี', nameEn: 'Mu Si', base: 2700, properties: 15 },
  ];
  return {
    updatedAt: new Date(Date.parse(`${start}T03:10:00+07:00`)).toISOString(),
    minPriced: 6,
    zones: zones.map((z, zi) => {
      const rnd = seeded(97 + zi * 31);
      const nights: KhaoYaiNight[] = [];
      for (let i = 0; i < 30; i++) {
        const date = new Date(Date.parse(`${start}T00:00:00Z`) + i * 86400_000).toISOString().slice(0, 10);
        const dow = new Date(`${date}T00:00:00Z`).getUTCDay();
        const weekend = dow === 5 || dow === 6;
        const hol = HOLIDAYS[date] ?? null;
        const lift = (dow === 6 ? 1.38 : dow === 5 ? 1.18 : 1) * (hol ? 1.22 : 1);
        const median = z.base * lift * (0.95 + rnd() * 0.1);
        const full = dow === 6 && rnd() < 0.35;
        const priced = full ? 4 : 7 + Math.floor(rnd() * 7);
        const known = priced >= 6;
        nights.push({
          date,
          median: known ? baht(median) : null,
          p25: known ? baht(median * 0.78) : null,
          p75: known ? baht(median * 1.3) : null,
          priced,
          raised7d: Math.round((weekend ? 0.25 + rnd() * 0.3 : rnd() * 0.15) * 100) / 100,
          noPrice: Math.round((z.properties - priced) / z.properties * 100) / 100,
          weekend,
          holidayTh: hol?.[0] ?? null,
          holidayEn: hol?.[1] ?? null,
        });
      }
      return {
        id: z.id,
        nameTh: z.nameTh,
        nameEn: z.nameEn,
        properties: z.properties,
        summaryTh: `ตัวอย่างข้อมูล: คืนวันเสาร์ราคากลางสูงกว่าวันธรรมดาราว 40% ในโซน${z.nameTh}`,
        summaryEn: `Sample data: Saturday nights run about 40% above weekdays in ${z.nameEn}.`,
        nights,
      };
    }),
  };
}
