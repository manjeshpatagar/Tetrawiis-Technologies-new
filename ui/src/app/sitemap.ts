import type { MetadataRoute } from 'next';
import { siteConfig } from '@/constants/site';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/services',
    '/solutions',
    '/careers',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path ? 'monthly' : 'weekly',
    priority: path ? 0.8 : 1,
  }));
}
