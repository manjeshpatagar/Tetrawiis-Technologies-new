'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

export function ServicesHero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="bg-navy-950 relative flex min-h-[72vh] items-center overflow-hidden py-24 text-white">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4 }}
      >
        <Image
          src="/images/hero/infrastructure.png"
          alt="Enterprise data center infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="bg-navy-950/65 absolute inset-0" />
      <div className="from-navy-950 via-navy-950/85 to-navy-950/25 absolute inset-0 bg-gradient-to-r" />
      <motion.div
        className="site-container relative z-10"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="[&_a]:text-slate-300 [&_span]:text-white">
          <Breadcrumb current="Services" />
        </div>
        <h1 className="mt-8 max-w-4xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Future-Proof Infrastructure Services.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
          From the physical layer to the cloud ecosystem—we design, secure, and
          manage high-performing IT environments that fuel business velocity.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">
            <CalendarCheck className="mr-2" size={18} />
            Book IT Consultation
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Us <ArrowRight className="ml-2" size={17} />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
