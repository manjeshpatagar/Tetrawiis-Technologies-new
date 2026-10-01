export const siteConfig = {
  name: 'Tetrawiis Technologies',
  description:
    'Digital engineering and technology solutions that move ambitious businesses forward.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  email: 'sales@tetrawiis.com',
  infoEmail: 'info@tetrawiis.com',
  careersEmail: 'hr@tetrawiis.com',
  phone: '+91 7483023034',
  phones: ['+91 7483023034', '+91 7483023030', '+91 7483023032'],
  mapsUrl:
    'https://www.google.com/maps/place/Tetrawiis+Technologies+Private+Limited/@12.9239904,77.5605378,81m/data=!3m1!1e3!4m7!3m6!1s0x3bae3d48323b406d:0x8ecd5a2814185e3e!4b1!8m2!3d12.9240851!4d77.5604998!16s%2Fg%2F11h25b0m_g',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=12.9240851,77.5604998&z=18&output=embed',
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

export const solutionCapabilities = [
  {
    id: 'cyber-security-solutions',
    title: 'Cyber Security Solutions',
    description: 'Enterprise security solutions to protect your organization.',
  },
  {
    id: 'it-infrastructure-solutions',
    title: 'IT Infrastructure Solutions',
    description:
      'Reliable compute, storage, cloud, and network infrastructure.',
  },
  {
    id: 'other-it-solutions',
    title: 'Other IT Solutions',
    description:
      'Backup, monitoring, applications, and IT maintenance services.',
  },
] as const;
