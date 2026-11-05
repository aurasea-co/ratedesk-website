import { Landing } from '@/components/Landing';
import { content } from '@/lib/content';
import type { Metadata } from 'next';

const m = content.en.meta;

export const metadata: Metadata = {
  title: { absolute: m.title },
  description: m.description,
  alternates: {
    canonical: '/en',
    languages: { th: '/th', en: '/en', 'x-default': '/th' },
  },
  openGraph: {
    locale: 'en_US',
    url: '/en',
    siteName: 'RateDesk',
    type: 'website',
    title: m.title,
    description: m.description,
  },
};

export default function EnglishPage() {
  return <Landing lang="en" />;
}
