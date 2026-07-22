'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ServicesCTA() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="section">
      <motion.div
        className="site-container"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden rounded-3xl px-7 py-16 text-center text-white shadow-2xl sm:px-12">
          <Image
            src="/images/hero/infrastructure.png"
            alt="Enterprise infrastructure supporting modern business operations"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            loading="lazy"
            className="object-cover"
          />
          <div className="bg-navy-950/80 absolute inset-0" />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-4xl text-3xl text-white sm:text-4xl">
              Stop firefighting your IT problems. Let&apos;s engineer a
              solution.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-200">
              Schedule a 30-minute infrastructure capability assessment with one
              of our principal architects. No high-pressure sales pitch—just
              real technical insights.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="secondary">
                Book Consultation <ArrowRight className="ml-2" size={17} />
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                className="border border-white/30 !text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
