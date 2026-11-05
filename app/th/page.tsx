import { Landing } from '@/components/Landing';
import { content } from '@/lib/content';
import type { Metadata } from 'next';

const m = content.th.meta;

export const metadata: Metadata = {
  title: { absolute: m.title },
  description: m.description,
  alternates: {
    canonical: '/th',
    languages: { th: '/th', en: '/en', 'x-default': '/th' },
  },
  openGraph: {
    locale: 'th_TH',
    url: '/th',
    siteName: 'RateDesk',
    type: 'website',
    title: m.title,
    description: m.description,
  },
};

export default function ThaiPage() {
  return <Landing lang="th" />;
}
