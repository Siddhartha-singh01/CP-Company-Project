export const WHATSAPP_NUMBER = "+91 7357227345";
export const WHATSAPP_LINK = "https://wa.me/917357227345";

export function getWhatsAppLink(message?: string): string {
  if (!message) return WHATSAPP_LINK;
  return `https://wa.me/917357227345?text=${encodeURIComponent(message)}`;
}

export const CALENDLY_LINK = "https://calendly.com/scaleupsocial7/30min";
export const SITE_NAME = "ScaleUpSocial";
export const SITE_URL = "https://scaleupsocial.in";

export const brands = [
  "Apex Dynamics",
  "Nova D2C Brands",
  "Zenith SaaS",
  "Forge Leadership",
  "Pulse Fitness & Health",
  "Lumen AI Labs",
  "Orbit Consulting",
  "Aether Studios",
  "Kinetic Ventures",
  "Velvet Commerce",
];

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/results", label: "Results" },
  { href: "/creators", label: "Creators" },
  { href: "/faq", label: "FAQ" },
];

export const services = [
  {
    slug: "content-creation",
    title: "Content Creation Agency",
    body: "Viral short form Reels, carousels, and high impact visual assets engineered for startups, companies, and ambitious entrepreneurs who need consistent publishing.",
    detail:
      "We research hooks, produce or edit high performing weekly batches, and keep every asset on brand so your social channels constantly command attention and drive pipeline.",
    points: ["High retention Reel scripting & editing", "Authority building carousels & visuals", "Strategic monthly content calendar"],
    icon: "reel" as const,
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    body: "Full service Instagram, LinkedIn, and multi channel social management for modern teams and founders: daily publishing, community replies, and executive reporting.",
    detail:
      "Built for fast moving startups, established companies, and busy entrepreneurs in India and globally who want an omnipresent brand presence without hiring a full in house team.",
    points: ["End to end scheduling & publishing", "Active DM & community engagement", "Weekly growth & conversion scorecards"],
    icon: "creator" as const,
  },
  {
    slug: "instagram-marketing",
    title: "Instagram Marketing",
    body: "Profile architecture, high converting offer creatives, and audience growth loops that turn passive viewers into paying customers and inbound qualified leads.",
    detail:
      "Ideal for businesses with proven products or services that lack the social engine they deserve. We bridge the gap between your real-world quality and your online reach.",
    points: ["Bio optimization & highlight funnels", "High converting offer & explainer Reels", "Viral organic distribution & local/global angles"],
    icon: "leads" as const,
  },
  {
    slug: "social-media-strategy",
    title: "Social Media Strategy",
    body: "A battle tested growth playbook tailored to your specific market: tech startups, D2C brands, B2B services, and visionary entrepreneurs.",
    detail:
      "You receive defined positioning pillars, content distribution cadences, and a 30 day execution roadmap before production begins, so every post is backed by data and ROI.",
    points: ["Category & competitor positioning", "30 day content shipping roadmap", "Revenue & inquiry focused KPIs"],
    icon: "paid" as const,
  },
];

export const pricingPlans = [
  {
    id: "starter-growth",
    name: "Starter Growth",
    price: "₹9,999",
    period: "/ month",
    blurb: "Ideal for small and local businesses building an authentic, consistent presence.",
    bestFor: "Small/local businesses",
    featured: false,
    badge: null as string | null,
    whatsappMessage: "Hi ScaleUpSocial team! 👋 I'm interested in getting started with the Starter Growth plan (₹9,999/month). Here is our brand/Instagram link to review: ",
    whatsappLink: getWhatsAppLink("Hi ScaleUpSocial team! 👋 I'm interested in getting started with the Starter Growth plan (₹9,999/month). Here is our brand/Instagram link to review: "),
    points: [
      "Best for: Small/local businesses",
      "8 Static posts & 2 Carousels / month",
      "4 Reels scripts / month",
      "8 Stories + Captions & Content calendar",
      "Instagram management & basic research",
      "Monthly competitor analysis & basic report",
      "1 Strategy call / month",
      "Basic content optimization",
    ],
  },
  {
    id: "growth-pro",
    name: "Growth Pro",
    price: "₹14,999",
    period: "/ month",
    blurb: "Tailored for growing businesses ready for high-retention reach and audience expansion.",
    bestFor: "Growing businesses",
    featured: true,
    badge: "MOST POPULAR",
    whatsappMessage: "Hi ScaleUpSocial team! 👋 I'd love to get started with the Growth Pro plan (₹14,999/month) for our business. Here is our brand/Instagram link: ",
    whatsappLink: getWhatsAppLink("Hi ScaleUpSocial team! 👋 I'd love to get started with the Growth Pro plan (₹14,999/month) for our business. Here is our brand/Instagram link: "),
    points: [
      "Best for: Growing businesses",
      "12 Static posts & 4 Carousels / month",
      "8 Reels scripts / month",
      "12 Stories + Captions & Content calendar",
      "Instagram & basic community management",
      "Advanced hashtag & keyword research",
      "Monthly competitor analysis & detailed report",
      "1 Strategy call / month + Priority support",
      "Full content optimization included",
    ],
  },
  {
    id: "brand-accelerator",
    name: "Brand Accelerator",
    price: "₹19,999",
    period: "/ month",
    blurb: "Designed for established businesses scaling category dominance and conversion volume.",
    bestFor: "Established businesses",
    featured: false,
    badge: "MAX IMPACT",
    whatsappMessage: "Hi ScaleUpSocial team! 👋 I'm interested in the Brand Accelerator plan (₹19,999/month) for end-to-end social management. Here is our brand/Instagram link: ",
    whatsappLink: getWhatsAppLink("Hi ScaleUpSocial team! 👋 I'm interested in the Brand Accelerator plan (₹19,999/month) for end-to-end social management. Here is our brand/Instagram link: "),
    points: [
      "Best for: Established businesses",
      "16 Static posts & 4 Carousels / month",
      "12 Reels scripts / month",
      "20 Stories + Captions & Content calendar",
      "Instagram & full community management",
      "Advanced hashtag & keyword research",
      "Bi-weekly competitor analysis & advanced report",
      "2 Strategy calls / month + Priority support",
      "Advanced growth strategy & optimization",
    ],
  },
];

export const processSteps = [
  {
    title: "Market Audit & Positioning",
    body: "We audit your market presence, audience psychology, and the core value proposition your prospects need to see in the first 3 seconds.",
    detail:
      "You get a comprehensive social media roadmap: positioning pillars, posting cadence, hook frameworks, and a 30 day action plan tailored to your industry.",
  },
  {
    title: "Build the Content Engine",
    body: "Custom scripts, batch recording guides, motion graphics, captions, and an approval dashboard before rollout.",
    detail:
      "Frictionless approvals. Founders and leadership stay visible. Your brand voice stays premium, credible, and engaging without cheesy gimmicks.",
  },
  {
    title: "Ship, Measure & Optimize",
    body: "Consistent multi week publishing backed by analytics on retention, saves, profile visits, and high intent inbound inquiries.",
    detail:
      "Cadence over chaos: systematic drop days, rapid iteration on winning formats, and actionable data rather than hollow vanity metrics.",
  },
  {
    title: "Scale the Growth Flywheel",
    body: "Winning creative angles get amplified. Weak formats get eliminated. Your brand authority compounds every single month.",
    detail:
      "Predictable pipeline compounds when high converting Reels, profile funnels, and landing pages work seamlessly together.",
  },
];

export const cases = [
  {
    featured: true,
    tag: "Tech Startup & SaaS",
    title: "From zero social footprint to consistent qualified inbound leads",
    bgVideo: "/videos/proof-case-bg.mp4",
    body: "Architected short form product explainers, founder story clips, and customer problem hooks for a fast scaling tech venture.",
    metrics: [
      { value: "4.2×", label: "Profile visits" },
      { value: "58% more", label: "Qualified DMs" },
      { value: "10d", label: "To first content live" },
    ],
  },
  {
    featured: false,
    tag: "D2C Consumer Brand",
    title: "Viral product reels driving direct checkout velocity",
    body: "Weekly aesthetic product showcases, unboxing experiences, and social proof clips generating massive organic reach.",
    metrics: [
      { value: "3.6×", label: "Content saves" },
      { value: "24", label: "Assets monthly" },
      { value: "4.9", label: "Customer trust score" },
    ],
  },
  {
    featured: false,
    tag: "Founder & Leadership",
    title: "Building high-leverage personal brand authority",
    body: "Founder led short clips, industry breakdown carousels, and thought leadership frameworks that opened enterprise doors.",
    metrics: [
      { value: "3.1×", label: "Inbound partnership replies" },
      { value: "20+", label: "High retention Reels" },
      { value: "1", label: "Dedicated growth team" },
    ],
  },
];

export const creators = [
  { name: "Maya R.", niche: "D2C · Lifestyle & Products", reach: "182K", focus: "High converting UGC & unboxings" },
  { name: "Jordan K.", niche: "Fitness · Tech & Gadgets", reach: "96K", focus: "Dynamic feature breakdown hooks" },
  { name: "Priya S.", niche: "Startups · Business Explainers", reach: "241K", focus: "Simplifying complex value props" },
  { name: "Leo M.", niche: "Local Commerce · Studios", reach: "128K", focus: "Foot traffic & experiential clips" },
  { name: "Aisha T.", niche: "E-commerce · Consumer Goods", reach: "74K", focus: "Authentic customer testimonial formats" },
  { name: "Noah V.", niche: "Founders · Leadership & SaaS", reach: "53K", focus: "Executive thought leadership clips" },
  { name: "Elena P.", niche: "Aesthetics · Luxury Brands", reach: "160K", focus: "Sleek premium visual storytelling" },
  { name: "Chris D.", niche: "B2B · Professional Services", reach: "41K", focus: "Case study & client proof content" },
];

export const faqs = [
  {
    q: "Is ScaleUpSocial a social media management agency in India?",
    a: "Yes. We are a premier social media management and content creation agency helping startups, growing companies, entrepreneurs, and ambitious brands dominate Instagram and LinkedIn without the overhead of an in house team.",
  },
  {
    q: "What types of companies, teams, and entrepreneurs do you work with?",
    a: "We work with high growth startups, D2C consumer brands, B2B companies, visionary entrepreneurs, specialized studios, and local business leaders who want to scale their market reach and turn attention into real revenue.",
  },
  {
    q: "How is ScaleUpSocial different from generic daily post agencies?",
    a: "We don't do low-effort template spam or buy hollow vanity metrics. We engineer high retention video production, custom copywriting, and high converting marketing funnels built specifically to drive inbound leads, brand equity, and business growth.",
  },
  {
    q: "How fast can our marketing content go live?",
    a: "Most client accounts ship their first batch of custom creative in 10 to 14 days after onboarding assets and strategy alignment are finalized.",
  },
  {
    q: "What does pricing look like?",
    a: "Our transparent packages start at ₹9,999/mo for Starter Growth, ₹14,999/mo for Growth Pro (our most popular plan), and ₹19,999/mo for Brand Accelerator. We also create custom enterprise packages for multi-brand companies.",
  },
  {
    q: "Do you handle all aspects of Instagram marketing?",
    a: "Yes. From scripting, motion editing, and graphic design to scheduling, caption writing, hashtag strategy, DM management, and monthly performance reviews, we run your entire social media department.",
  },
  {
    q: "Can you guarantee viral views or direct sales?",
    a: "No honest agency guarantees specific algorithmic virality. What we guarantee is industry leading creative quality, relentless consistency, data backed hook psychology, and optimized conversion pathways that maximize your ROI.",
  },
];

export const testimonials = [
  {
    quote:
      "ScaleUpSocial transformed our brand presence. Our inbound sales conversations increased by over 40% within the first 60 days of consistent video drops.",
    name: "Aarav Mehta",
    role: "Founder & CEO, TechScale Labs",
    initials: "AM",
  },
  {
    quote:
      "Their content engine feels like a native in house creative team. The Reels look stunning, our followers are genuinely engaged, and our team saved 20+ hours a week.",
    name: "Rohan Singhal",
    role: "Head of Growth, D2C Consumer Brand",
    initials: "RS",
  },
  {
    quote:
      "As a solo entrepreneur building a consulting firm, I needed authority without burning out. ScaleUpSocial gave me omnipresence across Instagram and LinkedIn seamlessly.",
    name: "Sofia Nayak",
    role: "Executive Coach & Business Strategist",
    initials: "SN",
  },
];

export const nichePriorities = [
  {
    title: "Startups & Scaleups",
    body: "Seed to Series B tech, AI, and SaaS ventures needing rapid brand awareness and product market attention.",
    href: "/services",
  },
  {
    title: "Entrepreneurs & Founders",
    body: "Visionary leaders and executives looking to build personal authority and turn their story into a talent and client magnet.",
    href: "/services",
  },
  {
    title: "D2C & Modern Consumer Brands",
    body: "E-commerce, lifestyle, apparel, and FMCG brands aiming for viral organic Reels and customer acquisition.",
    href: "/services",
  },
  {
    title: "Growing Teams & B2B Companies",
    body: "Consulting firms, service agencies, and corporate teams wanting dependable inbound pipeline and polished reputation.",
    href: "/services",
  },
  {
    title: "Gyms & Fitness Brands",
    body: "Personal trainers, gym chains, and fitness studios looking to attract members through transformation content and community driven marketing.",
    href: "/services",
  },
  {
    title: "Clinics & Healthcare",
    body: "Dental practices, dermatology clinics, wellness centres, and medical professionals building trust and patient flow through educational content.",
    href: "/services",
  },
];
