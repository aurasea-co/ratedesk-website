import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Fraunces, Inter_Tight, IBM_Plex_Sans_Thai } from 'next/font/google';
import './globals.css';

// WS2 (18 Nov 2026): fonts self-hosted by next/font — the Google Fonts stylesheet was render-blocking and cost
// ~0.5 s of first paint on a phone. The faces are exposed as --nf-* and globals.css builds its stacks from them
// (a stack naming the family literally matches nothing next/font registers — the app's O7 lesson).
const serif = Fraunces({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--nf-serif', display: 'swap' });
const sans = Inter_Tight({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--nf-sans', display: 'swap' });
const thai = IBM_Plex_Sans_Thai({ subsets: ['thai', 'latin'], weight: ['300', '400', '500', '600', '700'], variable: '--nf-thai', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ratedesk.ai'),
  title: {
    default: 'RateDesk — ราคาห้องที่ควรขายทุกเช้าใน LINE สำหรับโรงแรมและรีสอร์ทอิสระ',
    template: '%s · RateDesk',
  },
  description:
    'RateDesk ดูราคาที่พักรอบตัวคุณทุกคืน แล้วส่งราคาแนะนำเข้า LINE ทุกเช้า พร้อมเหตุผลและราคาที่พักแถวนี้',
  openGraph: {
    siteName: 'RateDesk',
    type: 'website',
  },
  alternates: {
    languages: {
      th: '/th',
      en: '/en',
      'x-default': '/th',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${serif.variable} ${sans.variable} ${thai.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
        {/* Cookieless page views + one event per CTA and zone tab (W1). */}
        <Analytics />
      </body>
    </html>
  );
}
