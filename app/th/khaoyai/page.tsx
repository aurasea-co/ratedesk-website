import type { Metadata } from 'next';
import { content } from '@/lib/content';
import { KhaoYaiPage } from '@/components/KhaoYaiPage';

export const revalidate = 3600;

const c = content.th.index.page;

export const metadata: Metadata = {
  title: { absolute: c.seoTitle },
  description: c.description,
  alternates: {
    canonical: '/th/khaoyai',
    languages: { th: '/th/khaoyai', en: '/en/khaoyai', 'x-default': '/th/khaoyai' },
  },
  openGraph: { locale: 'th_TH', url: '/th/khaoyai', siteName: 'RateDesk', type: 'website', title: c.seoTitle, description: c.description },
};

export default function Page() {
  return <KhaoYaiPage lang="th" />;
}
