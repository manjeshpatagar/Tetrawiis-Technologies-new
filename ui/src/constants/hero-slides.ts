export interface HeroSlide {
  id: number;
  badge: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
  imageAlt: string;
}

export const heroSlides: readonly HeroSlide[] = [
  {
    id: 1,
    badge: 'Enterprise infrastructure expertise',
    title:
      'Reliable IT Infrastructure. Built for Performance. Designed for Growth.',
    description:
      'Empower your business with secure, scalable, and future-ready IT infrastructure solutions. From cloud services and network management to cybersecurity and data center support, we help organizations optimize technology, reduce downtime, and accelerate digital transformation.',
    primaryCta: { label: 'Book IT Consultation', href: '/contact' },
    secondaryCta: { label: 'Our Services', href: '/services' },
    image: '/images/hero/infrastructure.png',
    imageAlt: 'Illuminated server racks in a modern enterprise data center',
  },
  {
    id: 2,
    badge: 'Cloud that moves business forward',
    title: 'The Backbone of Your Digital Evolution.',
    description:
      'We design, build, and manage secure, scalable IT infrastructure so your business can move at the speed of innovation.',
    primaryCta: { label: 'Explore Solutions', href: '/solutions' },
    secondaryCta: { label: 'Contact Us', href: '/contact' },
    image: '/images/hero/cloud-network.png',
    imageAlt: 'Secure cloud network connecting modern enterprise offices',
  },
  {
    id: 3,
    badge: 'Expertise you can depend on',
    title: 'Your Trusted Technology Partner',
    description:
      "At Tetrawiis Technologies, we deliver end-to-end IT infrastructure services that keep your business running smoothly. Our team of certified experts designs, implements, monitors, and manages technology environments tailored to your organization's goals. Whether you're a growing business or a large enterprise, we provide the expertise and support needed to maintain a resilient and high-performing IT ecosystem.",
    primaryCta: { label: 'About Us', href: '/about' },
    secondaryCta: { label: 'Get Started', href: '/contact' },
    image: '/images/hero/noc-team.png',
    imageAlt: 'IT engineers collaborating in a network operations center',
  },
  {
    id: 4,
    badge: 'Specialized IT staffing',
    title: 'Connecting Top Talent with Forward-Thinking Companies',
    description:
      'Build high-performing technology teams faster with specialized IT staffing solutions. Whether you need contract professionals, permanent hires, project-based consultants, or entire development teams, we connect you with skilled technology talent that drives business success.',
    primaryCta: { label: 'Hire Talent', href: '/contact' },
    secondaryCta: { label: 'View Careers', href: '/careers' },
    image: '/images/hero/talent-partnership.png',
    imageAlt: 'Technology professionals collaborating in a modern office',
  },
  {
    id: 5,
    badge: 'Talent on demand',
    title: 'Top-Tier Tech Talent. Right When You Need It.',
    description:
      'We connect forward-thinking enterprises with vetted IT professionals—from contract developers to executive tech leaders.',
    primaryCta: { label: 'Find Talent', href: '/careers' },
    secondaryCta: { label: 'Talk to an Expert', href: '/contact' },
    image: '/images/hero/tech-talent.png',
    imageAlt: 'Software developers working beside enterprise digital displays',
  },
] as const;

export const heroTrustBadges = [
  'Enterprise IT Solutions',
  '24/7 Support',
  'Cloud Experts',
  'Cyber Security',
  'Managed Services',
] as const;
