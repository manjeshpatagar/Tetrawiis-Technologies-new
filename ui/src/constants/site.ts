export const siteConfig = {
  name: 'Tetrawiis Technologies',
  description:
    'Digital engineering and technology solutions that move ambitious businesses forward.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  email: 'hello@tetrawiis.com',
  phone: '+91 98765 43210',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const services = [
  {
    title: 'Digital Engineering',
    description: 'Resilient web and mobile products built for scale.',
    icon: 'Code2',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Secure cloud platforms with reliable delivery pipelines.',
    icon: 'Cloud',
  },
  {
    title: 'Data & AI',
    description: 'Decision intelligence that turns data into measurable value.',
    icon: 'BrainCircuit',
  },
  {
    title: 'Cybersecurity',
    description: 'Pragmatic protection embedded across your technology estate.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Enterprise Platforms',
    description: 'Connected systems that simplify complex operations.',
    icon: 'Blocks',
  },
  {
    title: 'Technology Consulting',
    description: 'Clear roadmaps aligned to business outcomes.',
    icon: 'Lightbulb',
  },
] as const;

export const solutions = [
  {
    title: 'Retail Intelligence',
    description: 'Unified commerce experiences powered by real-time insight.',
    tag: 'Retail',
  },
  {
    title: 'Connected Healthcare',
    description: 'Secure, human-centered platforms for better care delivery.',
    tag: 'Healthcare',
  },
  {
    title: 'Smart Manufacturing',
    description: 'Visible and adaptive operations from plant to enterprise.',
    tag: 'Industry 4.0',
  },
] as const;
