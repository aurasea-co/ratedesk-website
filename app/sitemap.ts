import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ratedesk.ai';
  const lastModified = new Date();

  return [
    { url: `${base}/th`, lastModified, priority: 1, changeFrequency: 'weekly' },
    { url: `${base}/en`, lastModified, priority: 0.9, changeFrequency: 'weekly' },
  ];
}
