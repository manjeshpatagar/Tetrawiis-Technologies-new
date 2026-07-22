'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface Offering {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: readonly string[];
}

export function ServiceOffering({
  offering,
  imageRight = false,
}: {
  offering: Offering;
  imageRight?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
    >
      <div
        className={`group relative min-h-80 overflow-hidden rounded-3xl shadow-xl sm:min-h-[26rem] ${imageRight ? 'lg:order-2' : ''}`}
      >
        <Image
          src={offering.image}
          alt={offering.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading="lazy"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="from-navy-950/45 absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>
      <div className={imageRight ? 'lg:order-1' : ''}>
        <p className="eyebrow">Core service offering</p>
        <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
          {offering.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {offering.description}
        </p>
        <ul className="mt-7 grid gap-4 sm:grid-cols-2">
          {offering.features.map((feature) => (
            <li
              className="flex items-start gap-3 text-sm font-medium text-slate-700"
              key={feature}
            >
              <CheckCircle2
                className="text-brand-600 mt-0.5 shrink-0"
                size={19}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
