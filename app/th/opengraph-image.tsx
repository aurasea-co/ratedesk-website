import { homeOgImage, homeOgSize } from '@/lib/home-og';

export const revalidate = 3600;
export const size = homeOgSize;
export const contentType = 'image/png';
export const alt = 'RateDesk — the rate to sell, every night, on LINE';

export default function Image() {
  return homeOgImage();
}
