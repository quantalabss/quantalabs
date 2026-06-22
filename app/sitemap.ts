import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.quantalabs.cc'

  const routes = [
    '',
    '/solutions/cbom-audit',
    '/solutions/pqc-migration',
    '/solutions/engineering',
    '/products/quantachain',
    '/products/quantacipher',
    '/ecosystem/quanta-wallet',
    '/ecosystem/quascan',
    '/ecosystem/algo-pqc-kit',
    '/ecosystem/ornyx',
    '/ecosystem/falcon-multisig',
    '/about',
    '/research',
    '/blog',
    '/careers',
    '/contact',
    '/privacy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
