import { khaoYaiOgImage, ogSize } from '@/lib/khaoyai-og';

export const revalidate = 3600;
export const size = ogSize;
export const contentType = 'image/png';
export const alt = 'Khao Yai Index';

export default function Image() {
  return khaoYaiOgImage();
}
