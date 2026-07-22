'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { VendorSolutionCard } from '@/components/solutions/vendor-solution-card';
import type { VendorSolution } from '@/constants/solutions-page';

export function SolutionFamily({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageRight = false,
  solutions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageRight?: boolean;
  solutions: readonly VendorSolution[];
}) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="section">
      <div className="site-container">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className={`group relative min-h-80 overflow-hidden rounded-3xl shadow-xl sm:min-h-[26rem] ${imageRight ? 'lg:order-2' : ''}`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="from-navy-950/45 absolute inset-0 bg-gradient-to-t to-transparent" />
          </div>
          <div className={imageRight ? 'lg:order-1' : ''}>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy">{description}</p>
          </div>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution, index) => (
            <VendorSolutionCard
              key={solution.title}
              solution={solution}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
