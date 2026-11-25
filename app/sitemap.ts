import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://royaltouch-cs.com',
      lastModified: new Date('2026-11-25'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}