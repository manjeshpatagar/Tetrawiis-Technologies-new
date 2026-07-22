'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  AppWindow,
  ArchiveRestore,
  ArrowLeftRight,
  Boxes,
  BrickWall,
  Bug,
  Cable,
  ClipboardCheck,
  CloudCog,
  CloudUpload,
  Database,
  ExternalLink,
  FileLock2,
  Fingerprint,
  MailCheck,
  MonitorCheck,
  Network,
  PanelsTopLeft,
  RefreshCcw,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { vendorLinks, type VendorSolution } from '@/constants/solutions-page';

const icons = {
  Activity,
  AppWindow,
  ArchiveRestore,
  ArrowLeftRight,
  Boxes,
  BrickWall,
  Bug,
  Cable,
  ClipboardCheck,
  CloudCog,
  CloudUpload,
  Database,
  FileLock2,
  Fingerprint,
  MailCheck,
  MonitorCheck,
  Network,
  PanelsTopLeft,
  RefreshCcw,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  Wrench,
};

export function VendorSolutionCard({
  solution,
  index,
}: {
  solution: VendorSolution;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = icons[solution.icon as keyof typeof icons] ?? ShieldCheck;
  return (
    <motion.article
      className="group hover:border-brand-100 flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
    >
      <div className="bg-brand-50 text-brand-600 grid size-11 place-items-center rounded-xl">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg">{solution.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
        {solution.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {solution.vendors.map((vendor) => (
          <a
            key={vendor}
            href={vendorLinks[vendor]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 inline-flex items-center gap-1.5 rounded-lg border bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition"
            aria-label={`Visit ${vendor} official website (opens in a new tab)`}
          >
            {vendor}
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        ))}
      </div>
    </motion.article>
  );
}
