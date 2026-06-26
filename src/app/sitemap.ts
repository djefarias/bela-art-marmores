import type { MetadataRoute } from 'next';

const BLOG_POSTS = [
  'cuidados-bancada-granito',
  'granito-vs-quartzo',
  'tendencias-marmores-2026',
  'como-escolher-bancada-cozinha',
  'cuidados-marmore-branco',
  'escadas-granito-seguranca-e-estilo',
  'bancada-quartzo-vantagens',
  'area-gourmet-projeto-pedra',
  'selagem-granito-guia',
  'revestimento-pedra-fachada',
  'granito-preto-sao-gabriel',
  'cuidados-bancada-quartzo',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://belaartmarmoraria.com.br';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${baseUrl}/servicos`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/projetos`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/sobre`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contato`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/orcamento`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  const blogPages = BLOG_POSTS.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
