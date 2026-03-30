import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alupvcorlovic.com';
  const locales = ['hr', 'en'];

  const entries: MetadataRoute.Sitemap = [];

  // Main pages per locale
  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          hr: `${baseUrl}/hr`,
          en: `${baseUrl}/en`,
        },
      },
    });
  }

  return entries;
}
