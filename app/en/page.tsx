import { Landing } from '@/components/Landing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RateDesk.ai — Automated Revenue Management for SEA Hotels',
  description:
    'RateDesk.ai is automated revenue management built for independent hotels and resorts across Southeast Asia — the right rate recommendation, every morning, on LINE.',
  openGraph: {
    locale: 'en_US',
    title: 'RateDesk.ai — Automated Revenue Management for SEA Hotels',
    description:
      'Automated revenue management for independent hotels and resorts in Southeast Asia.',
  },
};

export default function EnglishPage() {
  return <Landing lang="en" />;
}
