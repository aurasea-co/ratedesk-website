import { Landing } from '@/components/Landing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RateDesk.ai — ระบบบริหารรายได้ AI สำหรับโรงแรมในเอเชียตะวันออกเฉียงใต้',
  description:
    'RateDesk.ai เป็นระบบบริหารรายได้ AI ออกแบบมาเพื่อโรงแรมและรีสอร์ทอิสระในเอเชียตะวันออกเฉียงใต้ — แนะนำราคาที่เหมาะสมทุกเช้า ผ่าน LINE',
  openGraph: {
    locale: 'th_TH',
    title: 'RateDesk.ai — ระบบบริหารรายได้ AI สำหรับโรงแรม',
    description: 'AI revenue management built for SEA independent hotels.',
  },
};

export default function ThaiPage() {
  return <Landing lang="th" />;
}
