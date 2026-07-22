export const vendorLinks: Readonly<Record<string, string>> = {
  Seqrite: 'https://www.seqrite.com/endpoint-protection-cloud/',
  Kaspersky: 'https://www.kaspersky.com/enterprise-security',
  Acronis: 'https://www.acronis.com/en-us/products/cyber-protect/',
  Sophos: 'https://www.sophos.com/en-us/products/endpoint-antivirus',
  Safetica: 'https://www.safetica.com/solutions-data-loss-prevention',
  Forcepoint: 'https://www.forcepoint.com/product/dlp-data-loss-prevention',
  Webroot: 'https://www.webroot.com/',
  Fortinet: 'https://www.fortinet.com/',
  Sangfor: 'https://www.sangfor.com/',
  Tacitine: 'https://tacitine.co.in/',
  iboss: 'https://www.iboss.com/',
  Wallix: 'https://www.wallix.com/',
  miniOrange: 'https://www.miniorange.com/',
  SecurEnvoy: 'https://securenvoy.com/',
  NXLog: 'https://nxlog.co/',
  iStorage: 'https://istorage-uk.com/',
  Infraon: 'https://infraon.io/',
  Scalefusion: 'https://scalefusion.com/',
  '42Gears': 'https://www.42gears.com/',
  Ucopia: 'https://www.ucopia.com/',
  Ekran: 'https://www.ekransystem.com/',
  Nessus: 'https://www.tenable.com/products/nessus',
  AppScan: 'https://www.hcl-software.com/appscan',
  'Kali Linux': 'https://www.kali.org/',
  Lepide: 'https://www.lepide.com/',
  Intel: 'https://www.intel.com/',
  HPE: 'https://www.hpe.com/',
  Lenovo: 'https://www.lenovo.com/',
  Supermicro: 'https://www.supermicro.com/',
  Synology: 'https://www.synology.com/',
  QNAP: 'https://www.qnap.com/',
  'Western Digital': 'https://www.westerndigital.com/',
  VMware: 'https://www.vmware.com/',
  Virtuozzo: 'https://www.virtuozzo.com/',
  'Scale Computing': 'https://www.scalecomputing.com/',
  'Hyper-V':
    'https://www.microsoft.com/en-us/windows-server/solutions/virtualization',
  AWS: 'https://aws.amazon.com/',
  'Microsoft Azure': 'https://azure.microsoft.com/',
  'Google Cloud': 'https://cloud.google.com/',
  NxtGen: 'https://nxtgen.com/',
  Akamai: 'https://www.akamai.com/',
  Zeta: 'https://www.zeta.tech/',
  Aruba: 'https://www.arubanetworks.com/',
  Netgear: 'https://www.netgear.com/',
  'D-Link': 'https://www.dlink.com/',
  Vertiv: 'https://www.vertiv.com/',
  Rittal: 'https://www.rittal.com/',
  Netrack: 'https://www.netrackindia.com/',
  'MS Rack': 'https://www.mrsrack.com/',
  '3C3': 'https://3c3.com/',
  'R&M': 'https://www.rdm.com/',
  CommScope: 'https://www.commscope.com/',
  Unitrends: 'https://www.unitrends.com/',
  Veeam: 'https://www.veeam.com/',
  Windows: 'https://www.microsoft.com/windows/',
  Linux: 'https://www.linuxfoundation.org/',
  'Microsoft 365': 'https://www.microsoft.com/microsoft-365',
  Adobe: 'https://www.adobe.com/',
  CAD: 'https://www.autodesk.com/solutions/cad-software',
  PostgreSQL: 'https://www.postgresql.org/',
  MySQL: 'https://www.mysql.com/',
} as const;

export interface VendorSolution {
  title: string;
  description: string;
  icon: string;
  vendors: readonly string[];
}

export const cyberSolutions: readonly VendorSolution[] = [
  {
    title: 'Endpoint Security',
    description:
      'Protect devices and workloads from malware, ransomware, and advanced endpoint threats.',
    icon: 'ShieldCheck',
    vendors: ['Seqrite', 'Kaspersky', 'Acronis', 'Sophos'],
  },
  {
    title: 'Data Loss Prevention & Data Classification',
    description:
      'Discover sensitive information and prevent unauthorized data movement across channels.',
    icon: 'FileLock2',
    vendors: ['Safetica', 'Forcepoint'],
  },
  {
    title: 'EDR / XDR / MDR',
    description:
      'Detect, investigate, and respond to sophisticated threats across your environment.',
    icon: 'ScanSearch',
    vendors: ['Acronis', 'Seqrite', 'Sophos', 'Kaspersky'],
  },
  {
    title: 'Email Security',
    description:
      'Reduce phishing, malicious attachments, impersonation, and business email compromise.',
    icon: 'MailCheck',
    vendors: ['Acronis', 'Seqrite', 'Sophos', 'Kaspersky', 'Webroot'],
  },
  {
    title: 'Firewall & Network Security',
    description:
      'Secure users, applications, branches, and internet access with modern network controls.',
    icon: 'BrickWall',
    vendors: ['Fortinet', 'Sophos', 'Sangfor', 'Tacitine', 'iboss'],
  },
  {
    title: 'Identity & Access Management',
    description:
      'Control privileged access and strengthen authentication across critical systems.',
    icon: 'Fingerprint',
    vendors: ['Wallix', 'miniOrange', 'SecurEnvoy', 'NXLog'],
  },
  {
    title: 'Encryption & Monitoring',
    description:
      'Protect stored data and maintain visibility across endpoints, users, and infrastructure.',
    icon: 'MonitorCheck',
    vendors: [
      'iStorage',
      'Infraon',
      'Scalefusion',
      '42Gears',
      'Ucopia',
      'Ekran',
    ],
  },
  {
    title: 'VAPT & Audit',
    description:
      'Find vulnerabilities, validate controls, and strengthen compliance readiness.',
    icon: 'Bug',
    vendors: ['Nessus', 'AppScan', 'Kali Linux', 'Lepide'],
  },
] as const;

export const infrastructureSolutions: readonly VendorSolution[] = [
  {
    title: 'Server',
    description:
      'Enterprise compute platforms sized for performance, availability, and growth.',
    icon: 'ServerCog',
    vendors: ['Intel', 'HPE', 'Lenovo', 'Supermicro'],
  },
  {
    title: 'Storage',
    description:
      'Primary, secondary, and network storage for resilient enterprise data.',
    icon: 'Database',
    vendors: ['HPE', 'Lenovo', 'Synology', 'QNAP', 'Western Digital'],
  },
  {
    title: 'Virtualization',
    description:
      'Consolidate workloads and simplify operations with flexible virtualization platforms.',
    icon: 'Boxes',
    vendors: ['VMware', 'Virtuozzo', 'Scale Computing', 'Hyper-V'],
  },
  {
    title: 'Cloud',
    description:
      'Public, private, and hybrid cloud foundations for secure digital workloads.',
    icon: 'CloudCog',
    vendors: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud',
      'NxtGen',
      'Akamai',
      'Zeta',
    ],
  },
  {
    title: 'Network Switches',
    description:
      'Reliable switching for campus, branch, data center, and edge connectivity.',
    icon: 'Network',
    vendors: ['Aruba', 'Netgear', 'D-Link'],
  },
  {
    title: 'Network Rack',
    description:
      'Secure, organized enclosures engineered around equipment and facility needs.',
    icon: 'PanelsTopLeft',
    vendors: ['Vertiv', 'Rittal', 'Netrack', 'MS Rack'],
  },
  {
    title: 'Network Cables',
    description:
      'Certified structured cabling for dependable copper and fiber connectivity.',
    icon: 'Cable',
    vendors: ['3C3', 'D-Link', 'R&M', 'CommScope'],
  },
] as const;

export const otherSolutions: readonly VendorSolution[] = [
  {
    title: 'Backup & Recovery',
    description:
      'Protect workloads and recover operations quickly after deletion, failure, or attack.',
    icon: 'RefreshCcw',
    vendors: ['Acronis', 'Unitrends', 'Veeam'],
  },
  {
    title: 'Email Backup & Archival',
    description:
      'Retain cloud email securely for recovery, compliance, and investigation.',
    icon: 'ArchiveRestore',
    vendors: ['Acronis', 'Webroot'],
  },
  {
    title: 'Asset Monitoring',
    description:
      'Track infrastructure health, utilization, incidents, and service performance.',
    icon: 'Activity',
    vendors: ['Infraon'],
  },
  {
    title: 'Operating Systems & Applications',
    description:
      'License, deploy, and support essential workplace and engineering platforms.',
    icon: 'AppWindow',
    vendors: ['Windows', 'Linux', 'Microsoft 365', 'Adobe', 'CAD'],
  },
  {
    title: 'Database',
    description:
      'Deploy and maintain dependable relational data platforms for business applications.',
    icon: 'Database',
    vendors: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Security Audit',
    description:
      'Evaluate vulnerabilities and controls through practical VAPT and compliance assessments.',
    icon: 'ClipboardCheck',
    vendors: ['Nessus', 'AppScan', 'Kali Linux', 'Lepide'],
  },
  {
    title: 'Data Migration',
    description:
      'Plan and deliver secure any-to-any platform migrations with controlled cutover.',
    icon: 'ArrowLeftRight',
    vendors: ['AWS', 'Microsoft Azure', 'Google Cloud'],
  },
  {
    title: 'Backup as a Service',
    description:
      'On-demand managed backup and recovery without operational overhead.',
    icon: 'CloudUpload',
    vendors: ['Acronis', 'Unitrends', 'Veeam'],
  },
  {
    title: 'AMC',
    description:
      'Extend hardware life through responsive maintenance and coordinated vendor support.',
    icon: 'Wrench',
    vendors: ['HPE', 'Lenovo', 'Supermicro'],
  },
] as const;

export const technologyExpertise = [
  'Software Development',
  'Cloud Computing',
  'Cyber Security',
  'Data Engineering',
  'Artificial Intelligence',
  'Machine Learning',
  'DevOps',
  'Site Reliability Engineering',
  'Business Intelligence',
  'Analytics',
  'ERP',
  'CRM',
  'Infrastructure Management',
  'Network Management',
  'QA Testing',
  'Mobile Application Development',
  'Project Management',
  'Program Management',
] as const;

export const solutionAdvantages = [
  {
    title: 'Enterprise OEM Partners',
    description:
      'Access proven technology from globally trusted manufacturers.',
    icon: 'Building2',
  },
  {
    title: 'Certified Engineers',
    description:
      'Work with specialists who understand complex enterprise environments.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Vendor Neutral Consulting',
    description:
      'Choose solutions based on fit, value, and outcomes—not quotas.',
    icon: 'Scale',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Build foundations that evolve with workloads, users, and locations.',
    icon: 'ChartNoAxesCombined',
  },
  {
    title: '24x7 Support',
    description:
      'Keep critical technology protected through responsive ongoing support.',
    icon: 'Clock3',
  },
  {
    title: 'Industry Best Practices',
    description:
      'Apply disciplined patterns for security, resilience, and operations.',
    icon: 'BookOpenCheck',
  },
] as const;
