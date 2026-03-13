import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fraviz.com';

  const blogSlugs = [
    'zasto-ai-automatizacija-nije-samo-za-velike-firme',
    '5-procesa-koje-mozete-automatizirati-danas',
    'kako-sam-scrapao-1000-kontakata-u-sat-vremena',
  ];

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
