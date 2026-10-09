export interface ProjectMedia {
  src: string;
  alt: string;
  caption: string;
  source: string;
}
export interface Project {
  media?: ProjectMedia;
  supportingMedia?: ProjectMedia[];
  slug: string;
  title: string;
  category: string;
  year: string;
  headline: string;
  description: string;
  tags: string[];
  accent: string;
  problem: string;
  contribution: string;
  approach: string[];
  outcome: string;
  flow: string[];
  link?: string;
}
export const featuredProjects: Project[] = [
  {
    slug: "simplecx",
    title: "simplecx",
    media: {
      src: "/projects/simplecx-studio.webp",
      alt: "Actual simplecx Content Studio interface with creative brief inputs and generation workflow",
      caption: "Content Studio / product walkthrough",
      source: "Local simplecx product walkthrough",
    },
    supportingMedia: [
      {
        src: "/projects/simplecx-public.webp",
        alt: "Actual simplecx public website and campaign prompt interface",
        caption: "Public website / captured October 2026",
        source: "https://simplecx.retink.io/",
      },
    ],
    category: "AI MEDIA & ORCHESTRATION",
    year: "2025 — PRESENT",
    headline: "From an idea to a whole content engine.",
    description:
      "AI media workflows, connected from the first prompt to the finished product.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    accent: "orange",
    problem:
      "Creating AI content involves more than a model call. People need a usable workspace that connects generation, content history, billing, and processing.",
    contribution:
      "As AI / Full-Stack Engineer and Technical Lead at Retink Media, I contribute across the React/Next.js product and Node.js services, while guiding architecture, reviews, and releases with a team of 5–6 developers.",
    approach: [
      "Connect user-facing workflows to typed APIs and persistent content history.",
      "Integrate AI providers and backend processing with product and billing workflows.",
      "Use PostgreSQL, Drizzle, and Redis within a TypeScript monorepo.",
      "Own production delivery and improve the infrastructure behind the product.",
    ],
    outcome:
      "A product spanning frontend, APIs, integrations, and operations. At Retink, infrastructure and deployment improvements reduced monthly cloud costs from approximately $5,000 to $300.",
    flow: [
      "Creative brief",
      "API & validation",
      "AI processing",
      "Content library",
    ],
  },
  {
    slug: "drapon",
    title: "DrapOn",
    media: {
      src: "/projects/drapon-cutout.webp",
      alt: "Dress cutout produced by DrapOn’s garment ingestion demo",
      caption: "Garment extraction / actual local demo output",
      source: "DrapOn local demo pipeline assets",
    },
    supportingMedia: [
      {
        src: "/projects/drapon-input.webp",
        alt: "Original dress photograph used as input to the DrapOn demo pipeline",
        caption: "Original input / local demo asset",
        source: "DrapOn local demo pipeline assets",
      },
    ],
    category: "FASHION × AI SYSTEMS",
    year: "SELECTED WORK",
    headline: "A wardrobe with a little more intelligence.",
    description:
      "Fashion tooling connecting a wardrobe, styling workflows, and virtual try-on infrastructure.",
    tags: ["Next.js", "React Native", "tRPC", "Drizzle", "Python"],
    accent: "lavender",
    problem:
      "A fashion experience needs to connect visual interactions, wardrobe data, and asynchronous image processing across web and mobile.",
    contribution:
      "My work on DrapOn spans the product interface and the service boundaries supporting wardrobe and AI-assisted fashion workflows.",
    approach: [
      "Share validation and typed API contracts across web and mobile.",
      "Model wardrobe items and processing jobs in a persistent data layer.",
      "Connect the product to image-processing services through explicit job states.",
      "Keep provider configuration and processing failures visible in the workflow.",
    ],
    outcome:
      "A fashion application with shared web/mobile infrastructure and a clear boundary between the interactive product and its processing services.",
    flow: ["Wardrobe input", "Typed API", "Image processing", "Result view"],
  },
  {
    slug: "alswap",
    title: "alswap",
    category: "COMMERCE & BACKEND",
    year: "SELECTED WORK",
    headline: "The storefront is only the beginning.",
    description:
      "Commerce, inventory, and payment workflows with a usable product at the front.",
    tags: ["Next.js", "tRPC", "PostgreSQL", "Drizzle", "Paystack"],
    accent: "lime",
    problem:
      "A commerce platform has to keep the customer journey connected to the operational reality of inventory, orders, and payments.",
    contribution:
      "My work on alswap connects storefront experiences with inventory and backend commerce workflows.",
    approach: [
      "Build responsive product and shopping interfaces.",
      "Connect typed application APIs to PostgreSQL through Drizzle.",
      "Handle payment and order transitions in backend services.",
      "Support product discoverability with structured storefront content.",
    ],
    outcome:
      "An integrated commerce application bringing customer-facing pages and operational workflows into one system.",
    flow: ["Storefront", "Order API", "Payment event", "Inventory update"],
  },
  {
    slug: "atlas-dao",
    title: "Atlas DAO",
    category: "WEB3 & PRODUCT UI",
    year: "2022 — 2024",
    headline: "Making decentralized tools feel approachable.",
    description:
      "Interface design and type-safe frontend/backend communication for a DAO product.",
    tags: ["React", "Next.js", "TypeScript", "tRPC"],
    accent: "blue",
    problem:
      "Decentralized products still need interfaces that people can understand and navigate with confidence.",
    contribution:
      "As a contract Full-Stack Developer, I worked on frontend/backend communication with tRPC and redesigned interfaces in collaboration with design and business teams.",
    approach: [
      "Use typed contracts to connect frontend interactions and backend procedures.",
      "Translate product requirements into clearer user interfaces.",
      "Collaborate across engineering, design, and business on usability.",
      "Develop the public Atlas DAO interface in TypeScript and Next.js.",
    ],
    outcome:
      "A redesigned product interface supported by type-safe communication between the client and backend.",
    flow: [
      "User action",
      "tRPC contract",
      "Application logic",
      "Interface update",
    ],
    link: "https://github.com/prince-hope1975/atlas-dao-ui",
  },
];
export const experience = [
  {
    company: "Retink Media",
    role: "AI / Full-Stack Engineer · Technical Lead",
    dates: "JUL 2025 — PRESENT",
    detail:
      "AI media products, hands-on architecture, and engineering delivery.",
  },
  {
    company: "Nash FintechX",
    role: "Lead Software Engineer",
    dates: "MAY 2025 — JAN 2026",
    detail:
      "Sustainability platforms, APIs, data workflows, and cloud delivery.",
  },
  {
    company: "Nash FintechX / Client Platforms",
    role: "Senior Full-Stack Engineer",
    dates: "FEB 2024 — MAY 2025",
    detail:
      "React and Python modernization with Next.js and full-stack integrations.",
  },
  {
    company: "Atlas DAO",
    role: "Full-Stack Developer · Contract",
    dates: "SEP 2022 — APR 2024",
    detail: "Type-safe APIs and redesigned decentralized product interfaces.",
  },
  {
    company: "Earlier chapters",
    role: "3BuxStudios · Cashbuddy · Choice Coin DAO",
    dates: "2021 — 2023",
    detail:
      "Digital-asset tooling, React Native applications, and voting software.",
  },
];
