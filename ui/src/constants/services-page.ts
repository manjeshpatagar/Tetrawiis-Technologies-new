export const serviceOfferings = [
  {
    title: 'Cloud & Hybrid Infrastructure',
    description:
      'Stop overspending on unoptimized cloud environments. We build agile, cloud-native frameworks designed for cost efficiency and infinite scale.',
    image: '/images/hero/cloud-network.png',
    imageAlt:
      'Connected enterprise cloud infrastructure across a modern business district',
    features: [
      'Cloud Architecture & Design',
      'Seamless Cloud Migration',
      'FinOps & Cost Optimization',
      'Containerization & Microservices',
    ],
  },
  {
    title: 'Next-Gen Enterprise Networking',
    description:
      'Your business is distributed; your network should be too. We eliminate latency, bottlenecks, and connectivity drops.',
    image: '/images/hero/infrastructure.png',
    imageAlt: 'High-performance enterprise servers and network infrastructure',
    features: [
      'SD-WAN Implementation',
      'Wireless & Campus Mobility',
      'Data Center Networking',
      'Virtual Private Networks (VPN)',
    ],
  },
  {
    title: 'Resilience, Cybersecurity & Compliance',
    description:
      'Infrastructure is useless if it isn’t secure. We embed security directly into the foundational layer of your IT environment.',
    image: '/images/hero/noc-team.png',
    imageAlt:
      'Cybersecurity specialists monitoring an enterprise security operations center',
    features: [
      'Zero-Trust Architecture',
      'Managed Detection & Response',
      'Backup as a Service (BaaS)',
      'Disaster Recovery as a Service (DRaaS)',
      'Regulatory Compliance Mapping',
    ],
  },
  {
    title: 'Managed IT & Infrastructure Operations',
    description:
      'Offload the day-to-day maintenance to our specialized engineering team so your internal team can focus on strategic growth.',
    image: '/images/hero/tech-talent.png',
    imageAlt:
      'IT engineers monitoring and managing enterprise technology operations',
    features: [
      '24/7/365 NOC Monitoring',
      'Patch & Lifecycle Management',
      'DevOps & Infrastructure as Code',
      'Helpdesk & Desktop Support',
    ],
  },
] as const;

export const serviceAdvantages = [
  {
    title: 'Certified Engineers',
    description:
      'Experienced specialists across cloud, network, security, and operations.',
    icon: 'BadgeCheck',
  },
  {
    title: '24/7 Monitoring',
    description:
      'Continuous visibility and rapid response for business-critical infrastructure.',
    icon: 'Radar',
  },
  {
    title: 'Enterprise Security',
    description:
      'Layered protection aligned to your risk and compliance requirements.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Cloud Expertise',
    description:
      'Practical guidance across public, private, hybrid, and multi-cloud environments.',
    icon: 'CloudCog',
  },
  {
    title: 'Cost Optimization',
    description:
      'Better utilization, licensing, and lifecycle decisions without compromising performance.',
    icon: 'ChartNoAxesCombined',
  },
  {
    title: 'Business Continuity',
    description:
      'Resilient systems, recovery planning, and tested operational readiness.',
    icon: 'RefreshCw',
  },
] as const;

export const servicesProcess = [
  {
    title: 'Discover',
    description:
      'We conduct a non-invasive audit of your current tech stack, licensing costs, and performance bottlenecks.',
  },
  {
    title: 'Architect',
    description:
      'Our principal engineers design a custom blueprint matching your performance and budget goals.',
  },
  {
    title: 'Implement',
    description:
      'We execute the migration or upgrade using phased deployments with minimal downtime.',
  },
  {
    title: 'Optimize',
    description:
      'Continuous monitoring, reporting, security improvements, and performance optimization.',
  },
] as const;

export const servicesFaq = [
  {
    title: 'What cloud platforms do you support?',
    content:
      'We support leading public cloud platforms including AWS, Microsoft Azure, and Google Cloud, as well as private cloud and hybrid environments.',
  },
  {
    title: 'Do you provide 24/7 monitoring?',
    content:
      'Yes. Our managed infrastructure services include continuous monitoring, alerting, escalation, incident response, and operational reporting.',
  },
  {
    title: 'Can you migrate from on-premise to cloud?',
    content:
      'Yes. We assess workloads, dependencies, security, and cost before building and executing a phased migration plan designed to minimize disruption.',
  },
  {
    title: 'Do you provide Disaster Recovery?',
    content:
      'Yes. We design backup and disaster-recovery solutions, establish recovery objectives, document runbooks, and help validate readiness through testing.',
  },
  {
    title: 'What industries do you serve?',
    content:
      'We support organizations across healthcare, manufacturing, technology, research, engineering, and enterprise IT environments.',
  },
  {
    title: 'Do you offer Managed IT Services?',
    content:
      'Yes. Engagements can cover complete infrastructure operations or focused capabilities such as cloud, network, endpoint, security, NOC, and helpdesk support.',
  },
] as const;
