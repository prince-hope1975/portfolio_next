const title = "Prince Charles - Senior Blockchain & Fullstack Engineer"
const description = "The personal portfolio for Prince Charles, a Senior Blockchain and Fullstack Engineer specializing in decentralized applications and modern web experiences."

const SEO = {
  title,
  description,
  canonical: "https://your-domain.com", // Replace with your actual domain
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://your-domain.com', // Replace with your actual domain
    title,
    description,
    images: [
      {
        url: 'https://your-domain.com/og-image.png', // Replace with your actual domain and image path
        width: 1200,
        height: 630,
        alt: 'Prince Charles Portfolio',
      },
    ],
  },
  twitter: {
    handle: '@prince_redeyes',
    site: '@prince_redeyes',
    cardType: 'summary_large_image',
  },
};

export default SEO; 