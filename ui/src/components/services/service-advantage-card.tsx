'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  BadgeCheck,
  ChartNoAxesCombined,
  CloudCog,
  Radar,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';

const icons = {
  BadgeCheck,
  ChartNoAxesCombined,
  CloudCog,
  Radar,
  RefreshCw,
  ShieldCheck,
};

export function ServiceAdvantageCard({
  item,
  index,
}: {
  item: { title: string; description: string; icon: string };
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = icons[item.icon as keyof typeof icons] ?? BadgeCheck;
  return (
    <motion.article
      className="hover:border-brand-100 rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div className="bg-brand-50 text-brand-600 grid size-11 place-items-center rounded-xl">
        <Icon />
      </div>
      <h3 className="mt-5 text-lg">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {item.description}
      </p>
    </motion.article>
  );
}
