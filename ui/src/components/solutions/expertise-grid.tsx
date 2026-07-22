'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Braces, CheckCircle2 } from 'lucide-react';

export function ExpertiseGrid({ items }: { items: readonly string[] }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {items.map((item, index) => (
        <motion.article
          className="hover:border-brand-500/50 rounded-xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
          key={item}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
        >
          <div className="flex items-center justify-between">
            <Braces className="text-brand-500" size={20} />
            <CheckCircle2 className="text-slate-500" size={15} />
          </div>
          <h3 className="mt-4 text-sm leading-5 text-white">{item}</h3>
        </motion.article>
      ))}
    </div>
  );
}
