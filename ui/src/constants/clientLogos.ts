export interface ClientLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export const clientLogos: readonly ClientLogo[] = [
  { name: 'CAE', src: '/images/clients/cae.png', width: 217, height: 105 },
  {
    name: 'Namma Metro',
    src: '/images/clients/namma-metro.png',
    width: 223,
    height: 134,
  },
  { name: 'AET', src: '/images/clients/aet.png', width: 584, height: 427 },
  {
    name: 'Tata Advanced Systems',
    src: '/images/clients/tata-advanced-systems.png',
    width: 339,
    height: 136,
  },
  {
    name: 'Vertas Research',
    src: '/images/clients/vertas-research.png',
    width: 1193,
    height: 1177,
  },
  {
    name: 'Client organization G',
    src: '/images/clients/client-g.png',
    width: 512,
    height: 512,
  },
  {
    name: 'Alpha Design Technologies',
    src: '/images/clients/alpha-design-technologies.png',
    width: 269,
    height: 151,
  },
  {
    name: 'Aspen Healthcare',
    src: '/images/clients/aspen-healthcare.png',
    width: 539,
    height: 174,
  },
  { name: 'ABB', src: '/images/clients/abb.png', width: 210, height: 85 },
  {
    name: 'CSIR National Aerospace Laboratories',
    src: '/images/clients/csir-nal.png',
    width: 173,
    height: 165,
  },
  {
    name: 'Laurus Labs',
    src: '/images/clients/laurus-labs.png',
    width: 702,
    height: 226,
  },
  {
    name: 'Tata Power',
    src: '/images/clients/tata-power.png',
    width: 441,
    height: 265,
  },
  {
    name: 'Apollo Hospitals',
    src: '/images/clients/apollo-hospitals.png',
    width: 2288,
    height: 2489,
  },
  { name: 'GE', src: '/images/clients/ge.png', width: 350, height: 350 },
  { name: 'MMRC', src: '/images/clients/mmrc.png', width: 164, height: 203 },
  { name: 'Maiva', src: '/images/clients/maiva.png', width: 200, height: 200 },
  {
    name: 'Jubilant Pharmova',
    src: '/images/clients/jubilant-pharmova.png',
    width: 215,
    height: 205,
  },
  { name: 'Baxter', src: '/images/clients/baxter.png', width: 234, height: 40 },
  {
    name: "Dr. Reddy's",
    src: '/images/clients/dr-reddys.png',
    width: 320,
    height: 114,
  },
  {
    name: 'Biocon',
    src: '/images/clients/biocon.png',
    width: 317,
    height: 125,
  },
  { name: 'Bosch', src: '/images/clients/bosch.png', width: 908, height: 293 },
  {
    name: 'Pfizer',
    src: '/images/clients/pfizer.png',
    width: 258,
    height: 108,
  },
  {
    name: 'Aurigene Pharmaceutical Services',
    src: '/images/clients/aurigene.png',
    width: 589,
    height: 424,
  },
  { name: 'Eisai', src: '/images/clients/eisai.png', width: 231, height: 141 },
] as const;
