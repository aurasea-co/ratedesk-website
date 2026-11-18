'use client';

// WS4 (Bo, 18 Nov 2026) — what this page counts, with NO cookie and NO personal data: one page view, each <section id>
// the first time its top reaches the upper 60% of the screen (a % of the SECTION would never fire on a tall one), and every tap on a [data-cta] button. Taps on the LINE add-friend link go
// through the app's counting redirect (same LINE account, nothing changes for the person); sign-up links keep the
// ad's utm_source / utm_campaign. Counts are stored per day by the Aurasea app (website_events_daily) — never who.

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SITE = 'ratedesk';
const APP = 'https://app.auraseaos.com';
const LINE = 'https://lin.ee/ydDaqx8l';
const UTM_KEY = 'ws4.utm';

const slug = (v: string | null | undefined) => (v && /^[a-z0-9_.-]{1,40}$/i.test(v) ? v.toLowerCase() : '');

function utm(): { utmSource: string; utmCampaign: string } {
  try {
    const q = new URLSearchParams(window.location.search);
    const fresh = { utmSource: slug(q.get('utm_source')), utmCampaign: slug(q.get('utm_campaign')) };
    if (fresh.utmSource) { sessionStorage.setItem(UTM_KEY, JSON.stringify(fresh)); return fresh; }
    return JSON.parse(sessionStorage.getItem(UTM_KEY) ?? 'null') ?? { utmSource: '', utmCampaign: '' };
  } catch { return { utmSource: '', utmCampaign: '' }; }
}

function send(kind: string, extra: Record<string, string> = {}) {
  try {
    const body = JSON.stringify({ site: SITE, kind, page: window.location.pathname, ...utm(), ...extra });
    const blob = new Blob([body], { type: 'text/plain' });
    if (!navigator.sendBeacon?.(`${APP}/api/public/site-event`, blob)) {
      void fetch(`${APP}/api/public/site-event`, { method: 'POST', body, keepalive: true, mode: 'cors' }).catch(() => {});
    }
  } catch { /* counting never breaks the page */ }
}

const sectionOf = (el: Element | null) => (el?.closest('section[id]')?.id ?? '').toLowerCase().replace(/[^a-z0-9_]/g, '_').slice(0, 40);

export function SiteMeasure() {
  const path = usePathname();
  useEffect(() => {
    send('view');
    const seen = new Set<string>();
    const io = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver((entries) => {
      for (const e of entries) {
        const id = sectionOf(e.target);
        if (e.isIntersecting && id && !seen.has(id)) { seen.add(id); send('section_seen', { section: id }); }
      }
    }, { threshold: 0, rootMargin: '0px 0px -40% 0px' });
    document.querySelectorAll('section[id]').forEach((s) => io?.observe(s));
    return () => io?.disconnect();
  }, [path]);

  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const section = sectionOf(a);
      const placement = (a.getAttribute('data-cta') ?? '').toLowerCase().replace(/[^a-z0-9_]/g, '_').slice(0, 40);
      const u = utm();
      if (a.href.startsWith(LINE)) {
        // counted by the redirect itself (so a blocked beacon still counts); the person lands on the same LINE link
        const q = new URLSearchParams({ s: SITE, c: placement || section, p: window.location.pathname, us: u.utmSource, uc: u.utmCampaign });
        a.href = `${APP}/api/public/go-line?${q.toString()}`;
        return;
      }
      if (placement) send('cta_click', { section, placement });
      if (a.href.startsWith(`${APP}/signup`) && u.utmSource) {
        const url = new URL(a.href);
        url.searchParams.set('utm_source', u.utmSource);
        if (u.utmCampaign) url.searchParams.set('utm_campaign', u.utmCampaign);
        a.href = url.toString();
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
  return null;
}
