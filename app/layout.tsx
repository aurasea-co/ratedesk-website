import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ratedesk.ai'),
  title: {
    default: 'RateDesk.ai — Automated Revenue Management for SEA Hotels',
    template: '%s · RateDesk.ai',
  },
  description:
    'Automated revenue management for independent hotels and resorts across Southeast Asia. The right rate recommendation, every morning, on LINE.',
  openGraph: {
    title: 'RateDesk.ai — Automated Revenue Management for SEA Hotels',
    description:
      'Automated revenue management for independent hotels and resorts across Southeast Asia.',
    siteName: 'RateDesk.ai',
    type: 'website',
  },
  alternates: {
    languages: {
      en: '/en',
      th: '/th',
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
