import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ratedesk.ai'),
  title: {
    default: 'RateDesk — ราคาห้องที่ควรขายทุกเช้าใน LINE สำหรับโรงแรมและรีสอร์ทอิสระ',
    template: '%s · RateDesk',
  },
  description:
    'ทุกเช้า 7 โมง RateDesk ส่งราคาที่ควรขายของทุกประเภทห้องเข้า LINE พร้อมเหตุผล ราคาโรงแรมแถวนี้ และ 3 เรื่องที่ควรทำวันนี้',
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
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter+Tight:wght@300;400;500;600&family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
