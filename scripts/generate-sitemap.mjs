import fs from "node:fs";
const configured =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "");
let origin;
try {
  const url = new URL(configured);
  if (/^https?:$/.test(url.protocol)) origin = url.origin;
} catch {}
if (!origin) {
  fs.writeFileSync(
    "public/sitemap.xml",
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n',
  );
  console.log("Sitemap: set NEXT_PUBLIC_SITE_URL to include production URLs.");
} else {
  const prerender = JSON.parse(
    fs.readFileSync(".next/prerender-manifest.json", "utf8"),
  );
  const routes = [
    "/",
    "/about",
    "/projects",
    "/contact",
    ...Object.keys(prerender.routes).filter((route) =>
      route.startsWith("/projects/"),
    ),
  ];
  const escapeXml = (value) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  fs.writeFileSync(
    "public/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(routes)].map((route) => `  <url><loc>${escapeXml(origin + route)}</loc></url>`).join("\n")}\n</urlset>\n`,
  );
  console.log(`Sitemap: ${routes.length} routes generated for ${origin}.`);
}
