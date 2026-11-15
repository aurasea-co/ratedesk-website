import type { MetadataRoute } from 'next';
import { indexEnabled } from '@/lib/khaoyai';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ratedesk.ai';
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    {
      url: `${base}/th`,
      lastModified,
      priority: 1,
      changeFrequency: 'weekly',
      alternates: { languages: { th: `${base}/th`, en: `${base}/en` } },
    },
    {
      url: `${base}/en`,
      lastModified,
      priority: 0.9,
      changeFrequency: 'weekly',
      alternates: { languages: { th: `${base}/th`, en: `${base}/en` } },
    },
  ];
  if (indexEnabled()) {
    for (const l of ['th', 'en'] as const) {
      pages.push({
        url: `${base}/${l}/khaoyai`,
        lastModified,
        priority: 0.8,
        changeFrequency: 'daily',
        alternates: { languages: { th: `${base}/th/khaoyai`, en: `${base}/en/khaoyai` } },
      });
    }
  }
  return pages;
}
