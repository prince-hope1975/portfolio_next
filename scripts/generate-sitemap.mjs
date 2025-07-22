import fs from 'fs';
import { globby } from 'globby';

async function generateSitemap() {
  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/api',
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const path = page
        .replace('pages', '')
        .replace('.tsx', '')
        .replace('/index', '');
      const route = path === '' ? '/' : path;
      return `<url><loc>${`https://your-domain.com${route}`}</loc></url>`;
    })
    .join('')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap(); 