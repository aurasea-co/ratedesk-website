/**
 * KX2 — the Khao Yai page's dates, Asia/Bangkok. Thai uses Buddhist-era years, English CE. Fixed name lists, not Intl:
 * Node's and the browser's ICU spell Thai weekdays differently, which broke hydration (KhaoYaiIndex).
 */
export type Lang = 'th' | 'en';

const WD_SHORT = { th: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'], en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] };
const WD_LONG = {
  th: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
const MON_SHORT = {
  th: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};
const MON_LONG = {
  th: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

const parts = (date: string) => { const d = new Date(`${date}T00:00:00Z`); return { wd: d.getUTCDay(), day: d.getUTCDate(), m: d.getUTCMonth(), y: d.getUTCFullYear() }; };
const year = (y: number, lang: Lang) => (lang === 'th' ? y + 543 : y);

/** Tables: "ส. 5 ธ.ค. 2569" / "Sat 5 Dec 2026". */
export function shortDate(date: string, lang: Lang): string {
  const p = parts(date);
  return `${WD_SHORT[lang][p.wd]} ${p.day} ${MON_SHORT[lang][p.m]} ${year(p.y, lang)}`;
}
/** Cards: "วันเสาร์ที่ 5 ธันวาคม 2569" / "Saturday 5 December 2026". */
export function longDate(date: string, lang: Lang): string {
  const p = parts(date);
  return lang === 'th' ? `${WD_LONG.th[p.wd]}ที่ ${p.day} ${MON_LONG.th[p.m]} ${year(p.y, lang)}` : `${WD_LONG.en[p.wd]} ${p.day} ${MON_LONG.en[p.m]} ${p.y}`;
}
/** A Bangkok calendar date and time from an ISO timestamp. */
export function bangkokParts(iso: string): { date: string; time: string } {
  const b = new Date(Date.parse(iso) + 7 * 3600_000).toISOString();
  return { date: b.slice(0, 10), time: b.slice(11, 16) };
}
/** "อัปเดตล่าสุด: วันพฤหัสบดีที่ 19 พฤศจิกายน 2569 เวลา 03:00 น." / "Last updated: Thursday 19 November 2026, 03:00 (Bangkok time)". */
export function updatedLine(iso: string, lang: Lang): string {
  const { date, time } = bangkokParts(iso);
  return lang === 'th' ? `อัปเดตล่าสุด: ${longDate(date, lang)} เวลา ${time} น.` : `Last updated: ${longDate(date, lang)}, ${time} (Bangkok time)`;
}
