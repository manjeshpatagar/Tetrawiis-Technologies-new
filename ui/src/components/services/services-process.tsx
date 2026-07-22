'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

export function ServicesProcess({
  steps,
}: {
  steps: ReadonlyArray<{ title: string; description: string }>;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <ol className="mt-12 grid gap-4 lg:grid-cols-4">
      {steps.map((step, index) => (
        <motion.li
          className="relative flex flex-col"
          key={step.title}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex-1 rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="bg-brand-600 grid size-11 place-items-center rounded-full text-sm font-bold text-white">
              {index + 1}
            </span>
            <h3 className="mt-5 text-xl">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {step.description}
            </p>
          </div>
          {index < steps.length - 1 && (
            <>
              <ArrowDown className="text-brand-500 mx-auto my-3 lg:hidden" />
              <ArrowRight className="text-brand-500 absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 lg:block" />
            </>
          )}
        </motion.li>
      ))}
    </ol>
  );
}
