'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { track } from '@vercel/analytics';
import type { KhaoYaiNight, KhaoYaiZone } from '@/lib/khaoyai';

/**
 * The Khao Yai Index chart, zone tabs and table (W1-A1). Its copy arrives as
 * props (never import lib/content here — see FAQ.tsx). Rendered on the server
 * too, so every figure is in the HTML.
 */
export type IndexCopy = {
  zones: string;
  legend: { median: string; band: string; weekend: string; holiday: string; gap: string };
  today: string;
  gapTip: string;
  priced: string;
  columns: readonly string[];
  tableNote: string;
};

type Lang = 'th' | 'en';

const baht = (v: number) => `฿${v.toLocaleString('en-US')}`;
const pct = (v: number | null) => (v == null ? '—' : `${Math.round(v * 100)}%`);

// Fixed name lists, not Intl: Node's and the browser's ICU spell Thai weekdays
// differently ("จ." vs "จันทร์"), which broke hydration.
const WD = {
  th: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};
const MON = {
  th: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

function nightLabel(date: string, lang: Lang, withWeekday = true): string {
  const d = new Date(`${date}T00:00:00Z`);
  const dm = `${d.getUTCDate()} ${MON[lang][d.getUTCMonth()]}`;
  return withWeekday ? `${WD[lang][d.getUTCDay()]} ${dm}` : dm;
}

/** Contiguous runs of nights that have a median. */
function runs(nights: KhaoYaiNight[]): number[][] {
  const out: number[][] = [];
  let cur: number[] = [];
  nights.forEach((n, i) => {
    if (n.median != null) cur.push(i);
    else if (cur.length) {
      out.push(cur);
      cur = [];
    }
  });
  if (cur.length) out.push(cur);
  return out;
}

function niceTicks(lo: number, hi: number): number[] {
  const span = hi - lo;
  const step = span > 3000 ? 1000 : span > 1200 ? 500 : 250;
  const ticks: number[] = [];
  for (let v = Math.ceil(lo / step) * step; v <= hi; v += step) ticks.push(v);
  return ticks;
}

export function KhaoYaiIndexView({
  zones,
  lang,
  copy,
  footers,
}: {
  zones: KhaoYaiZone[];
  lang: Lang;
  copy: IndexCopy;
  /** The footer line per zone id, built on the server. */
  footers: Record<string, string>;
}) {
  const [zoneId, setZoneId] = useState(zones[0]?.id);
  const zone = zones.find((z) => z.id === zoneId) ?? zones[0];
  const font = lang === 'th' ? 'font-thai' : 'font-sans';
  if (!zone) return null;
  const name = (z: KhaoYaiZone) => (lang === 'th' ? z.nameTh : z.nameEn);
  const summary = lang === 'th' ? zone.summaryTh : zone.summaryEn;

  return (
    <div className={font}>
      {zones.length > 1 && (
        <div role="tablist" aria-label={copy.zones} className="flex flex-wrap gap-2">
          {zones.map((z) => {
            const on = z.id === zone.id;
            return (
              <button
                key={z.id}
                role="tab"
                aria-selected={on}
                onClick={() => {
                  setZoneId(z.id);
                  track('khaoyai_zone', { zone: z.id, lang });
                }}
                className={`min-h-[44px] rounded-full px-5 text-sm font-medium border transition ${
                  on
                    ? 'bg-cta text-cta-ink border-transparent'
                    : 'border-ink/20 text-ink-soft hover:border-ink/50'
                }`}
              >
                {name(z)}
              </button>
            );
          })}
        </div>
      )}

      <p className="mt-6 text-lg text-ink-soft text-pretty">{summary}</p>

      <Chart zone={zone} lang={lang} copy={copy} />
      <Legend copy={copy} />

      <div className="mt-10 overflow-x-auto">
        <p className="text-sm text-ink-muted">{copy.tableNote}</p>
        <table className="mt-3 w-full min-w-[560px] text-sm tabular-nums whitespace-nowrap">
          <thead>
            <tr className="text-left text-ink-muted border-b border-ink/15">
              {copy.columns.map((c, i) => (
                <th key={c} className={`py-2 pr-4 font-normal ${i > 0 ? 'text-right' : ''}`}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows(zone).map((n) => {
              const hol = lang === 'th' ? n.holidayTh : n.holidayEn;
              return (
                <tr key={n.date} className="border-b border-ink/10">
                  <td className="py-2.5 pr-3 text-ink">
                    {nightLabel(n.date, lang)}
                    {hol && <span className="block text-xs text-ink-muted">{hol}</span>}
                  </td>
                  <td className="py-2.5 pr-3 text-right font-semibold text-ink">
                    {n.median != null ? baht(n.median) : copy.legend.gap}
                  </td>
                  <td className="py-2.5 pr-3 text-right text-ink-soft">
                    {n.p25 != null && n.p75 != null ? `${baht(n.p25)}–${baht(n.p75)}` : '—'}
                  </td>
                  <td className="py-2.5 pr-3 text-right text-ink-soft">{pct(n.raised7d)}</td>
                  <td className="py-2.5 text-right text-ink-soft">{pct(n.noPrice)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-ink-muted leading-relaxed">{footers[zone.id]}</p>
    </div>
  );
}

function tableRows(zone: KhaoYaiZone): KhaoYaiNight[] {
  const sat = zone.nights.filter((n) => new Date(`${n.date}T00:00:00Z`).getUTCDay() === 6).slice(0, 4);
  const hol = zone.nights.filter((n) => n.holidayTh || n.holidayEn);
  const m = new Map<string, KhaoYaiNight>();
  for (const n of [...sat, ...hol]) m.set(n.date, n);
  return [...m.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function Legend({ copy }: { copy: IndexCopy }) {
  const item = 'flex items-center gap-2';
  return (
    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-muted">
      <li className={item}>
        <span aria-hidden className="block h-0.5 w-5 bg-brand-navy" />
        {copy.legend.median}
      </li>
      <li className={item}>
        <span aria-hidden className="block h-3 w-5 rounded-sm bg-brand-trust/25" />
        {copy.legend.band}
      </li>
      <li className={item}>
        <span aria-hidden className="block h-3 w-5 rounded-sm" style={{ background: 'rgb(var(--c-wkend))' }} />
        {copy.legend.weekend}
      </li>
      <li className={item}>
        <span aria-hidden className="block h-3 w-5 rounded-sm" style={{ background: 'rgb(var(--c-hol))' }} />
        {copy.legend.holiday}
      </li>
      <li className={item}>
        <span aria-hidden className="block h-3 w-0 border-l-2 border-dashed border-ink-subtle" />
        {copy.legend.gap}
      </li>
    </ul>
  );
}

function Chart({ zone, lang, copy }: { zone: KhaoYaiZone; lang: Lang; copy: IndexCopy }) {
  const box = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(720);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(Math.max(300, Math.round(e.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const nights = zone.nights;
  const phone = width < 560;
  const H = phone ? 230 : 280;
  const padL = 46;
  const padR = 10;
  const padT = 34;
  const padB = 30;
  const colW = (width - padL - padR) / nights.length;
  const x = (i: number) => padL + (i + 0.5) * colW;

  const { ticks, y } = useMemo(() => {
    const vals = nights.flatMap((n) => [n.p25, n.p75, n.median]).filter((v): v is number => v != null);
    const lo = Math.min(...vals) * 0.92;
    const hi = Math.max(...vals) * 1.04;
    return {
      ticks: niceTicks(lo, hi),
      y: (v: number) => padT + (1 - (v - lo) / (hi - lo)) * (H - padT - padB),
    };
  }, [nights, H]);

  // Holiday labels: drop one that would collide with the one before it.
  let lastLabelX = -1e9;
  const holidayLabels = nights.map((n, i) => {
    const t = lang === 'th' ? n.holidayTh : n.holidayEn;
    if (!t || x(i) - lastLabelX < (phone ? 70 : 96)) return null;
    lastLabelX = x(i);
    return { i, t };
  });

  const a = active != null ? nights[active] : null;

  return (
    <div ref={box} className="relative mt-6">
      <svg
        viewBox={`0 0 ${width} ${H}`}
        width="100%"
        role="group"
        aria-label={copy.legend.median}
        className="block h-auto select-none"
      >
        {nights.map((n, i) =>
          n.holidayTh || n.holidayEn ? (
            <rect key={`h${i}`} x={x(i) - colW / 2} y={padT} width={colW} height={H - padT - padB} style={{ fill: 'rgb(var(--c-hol))' }} />
          ) : n.weekend ? (
            <rect key={`w${i}`} x={x(i) - colW / 2} y={padT} width={colW} height={H - padT - padB} style={{ fill: 'rgb(var(--c-wkend))' }} />
          ) : null,
        )}

        {ticks.map((v) => (
          <g key={v}>
            <line x1={padL} x2={width - padR} y1={y(v)} y2={y(v)} className="stroke-ink/10" />
            <text x={padL - 6} y={y(v) + 4} textAnchor="end" className="fill-ink-muted" fontSize={11}>
              {baht(v)}
            </text>
          </g>
        ))}

        {runs(nights).map((r) => {
          const top = r.map((i) => `${x(i)},${y(nights[i].p75!)}`);
          const bot = [...r].reverse().map((i) => `${x(i)},${y(nights[i].p25!)}`);
          return (
            <g key={r[0]}>
              <polygon points={[...top, ...bot].join(' ')} className="fill-brand-trust/20" />
              <polyline
                points={r.map((i) => `${x(i)},${y(nights[i].median!)}`).join(' ')}
                className="stroke-brand-navy"
                fill="none"
                strokeWidth={2.5}
                strokeLinejoin="round"
              />
              {r.length === 1 && <circle cx={x(r[0])} cy={y(nights[r[0]].median!)} r={3} className="fill-brand-navy" />}
            </g>
          );
        })}

        {nights.map((n, i) =>
          n.median == null ? (
            <line key={`g${i}`} x1={x(i)} x2={x(i)} y1={padT + 6} y2={H - padB} className="stroke-ink-subtle" strokeDasharray="3 4" />
          ) : null,
        )}

        {holidayLabels.map((l) =>
          l ? (
            <text key={`hl${l.i}`} x={x(l.i)} y={padT - 10} textAnchor="middle" fontSize={11} className="fill-ink-soft">
              {l.t.length > (phone ? 10 : 16) ? `${l.t.slice(0, phone ? 9 : 15)}…` : l.t}
            </text>
          ) : null,
        )}

        <line x1={x(0)} x2={x(0)} y1={padT} y2={H - padB} className="stroke-ink/40" strokeDasharray="2 3" />
        {nights.map((n, i) =>
          i === 0 || i % 7 === 0 ? (
            <text key={`x${i}`} x={x(i)} y={H - 10} textAnchor="middle" fontSize={11} className="fill-ink-muted">
              {i === 0 ? copy.today : nightLabel(n.date, lang, false)}
            </text>
          ) : null,
        )}

        {active != null && <line x1={x(active)} x2={x(active)} y1={padT} y2={H - padB} className="stroke-ink/50" />}

        {nights.map((n, i) => (
          <rect
            key={`hit${i}`}
            x={x(i) - colW / 2}
            y={padT}
            width={colW}
            height={H - padT - padB}
            fill="transparent"
            tabIndex={0}
            role="button"
            aria-label={`${nightLabel(n.date, lang)} ${n.median != null ? baht(n.median) : copy.legend.gap}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="cursor-pointer outline-none focus:stroke-brand-trust"
          />
        ))}
      </svg>

      {a && active != null && (
        <div
          role="status"
          className="pointer-events-none absolute top-0 z-10 w-[220px] rounded-xl border border-ink/15 bg-paper-soft p-3 text-sm shadow-lg"
          style={{ left: Math.min(Math.max(x(active) - 110, 0), width - 220) }}
        >
          <p className="font-semibold text-ink">{nightLabel(a.date, lang)}</p>
          {(a.holidayTh || a.holidayEn) && (
            <p className="text-xs text-ink-muted">{lang === 'th' ? a.holidayTh : a.holidayEn}</p>
          )}
          {a.median != null ? (
            <>
              <p className="mt-1 text-ink">
                {copy.legend.median} <span className="font-semibold">{baht(a.median)}</span>
              </p>
              <p className="text-ink-soft">
                {copy.legend.band} {baht(a.p25!)}–{baht(a.p75!)}
              </p>
            </>
          ) : (
            <p className="mt-1 text-ink-soft">{copy.gapTip}</p>
          )}
          <p className="text-xs text-ink-muted">{copy.priced.replace('{n}', String(a.priced))}</p>
        </div>
      )}
    </div>
  );
}
