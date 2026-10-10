const configuredOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "");
let origin;
try {
  const url = new URL(configuredOrigin);
  if (/^https?:$/.test(url.protocol)) origin = url.origin;
} catch {}
const title = "Prince Charles — Full-stack engineer & technical lead";
const description =
  "Senior full-stack engineer and technical lead building expressive interfaces, backend services, and AI workflows.";
const SEO = {
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_NG",
    title,
    description,
    ...(origin
      ? {
          url: origin,
          images: [
            {
              url: `${origin}/og-image.png`,
              width: 1200,
              height: 630,
              alt: "Prince Charles — Full-stack engineer & technical lead",
            },
          ],
        }
      : {}),
  },
  twitter: { cardType: "summary_large_image" },
};
export default SEO;
