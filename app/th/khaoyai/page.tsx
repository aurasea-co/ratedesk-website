import type { Metadata } from 'next';
import { indexCopy } from '@/lib/khaoyai-copy';
import { KhaoYaiPage } from '@/components/KhaoYaiPage';

export const revalidate = 3600;

const c = indexCopy.th;

export const metadata: Metadata = {
  title: { absolute: c.seoTitle },
  description: c.description,
  alternates: {
    canonical: '/th/khaoyai',
    languages: { th: '/th/khaoyai', en: '/en/khaoyai', 'x-default': '/th/khaoyai' },
  },
  openGraph: { locale: 'th_TH', url: '/th/khaoyai', siteName: c.brand, type: 'website', title: c.seoTitle, description: c.description },
};

export default function Page() {
  return <KhaoYaiPage lang="th" />;
}
