export const plans = [
  {
    id: 'starter',
    title: 'Starter',
    price: '₹25,000',
    description: 'For local businesses and startups that need a professional website.',
    features: [
      'Custom design, up to 5 pages',
      'Works on mobile, tablet and desktop',
      'Basic SEO setup',
      'Contact form that sends leads to your inbox',
      'Fast loading pages built with Next.js',
      '1 month of support after launch',
      'Delivery in 2 to 3 weeks',
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    price: '₹60,000',
    description: 'For growing brands that want more pages and to edit content themselves.',
    popular: true,
    features: [
      'Everything in Starter',
      'Custom design, up to 15 pages',
      'CMS so you can edit text, images and blogs',
      'Advanced SEO and Google rich results',
      'Analytics and conversion tracking',
      'Custom animations',
      '3 months of priority support',
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: 'Custom',
    description: 'For web apps, online stores and platforms with custom features.',
    features: [
      'Unlimited pages',
      'Custom backend and API integrations',
      'Online store and payment gateway',
      'Logins, dashboards and client portals',
      'Security and performance reviews',
      'A dedicated project manager',
      'Ongoing support and monitoring',
    ],
  },
];

export const budgets = [
  { value: 'Starter (₹25,000)', plan: 'starter' },
  { value: 'Professional (₹60,000)', plan: 'professional' },
  { value: 'Enterprise (custom quote)', plan: 'enterprise' },
  { value: 'Not sure yet', plan: '' },
];

export const socials: { name: string; url: string }[] = [
  { name: 'Instagram', url: '' },
  { name: 'LinkedIn', url: '' },
  { name: 'X (Twitter)', url: '' },
].filter((s) => s.url);

export const contactEmail = 'hello@pixential.in';

export const portalEnabled = Boolean(process.env.NEXT_PUBLIC_API_URL);
