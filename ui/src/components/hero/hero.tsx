'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Headphones,
  ShieldCheck,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { heroSlides, heroTrustBadges } from '@/constants/hero-slides';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="hero-slider relative min-h-[100svh] overflow-hidden bg-[#071a2d] text-white"
      aria-roledescription="carousel"
      aria-label="Tetrawiis technology services"
    >
      <Swiper
        className="min-h-[100svh]"
        modules={[Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        navigation={{ prevEl: '.hero-prev', nextEl: '.hero-next' }}
        pagination={{ el: '.hero-pagination', clickable: true }}
        grabCursor
        watchSlidesProgress
        onRealIndexChange={(swiper) => setActiveSlide(swiper.realIndex)}
      >
        {heroSlides.map((slide, index) => {
          const isActive = activeSlide === index;
          const Heading = index === 0 ? 'h1' : 'h2';

          return (
            <SwiperSlide key={slide.id} className="!h-auto min-h-[100svh]">
              <article
                className="relative flex min-h-[100svh] items-center py-24 sm:py-28 lg:py-24"
                aria-hidden={!isActive}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: isActive && !reduceMotion ? 1.055 : 1 }}
                  transition={{ duration: 7, ease: 'easeOut' }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover object-[62%_center] lg:object-center"
                    quality={88}
                    preload={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </motion.div>

                <div className="absolute inset-0 bg-[#051423]/60" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,17,30,.96)_0%,rgba(5,25,43,.86)_43%,rgba(5,21,36,.38)_72%,rgba(5,20,35,.58)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#061728]/80 to-transparent" />

                <motion.div
                  className="pointer-events-none absolute top-[18%] right-[8%] hidden rounded-2xl border border-white/15 bg-white/8 p-4 shadow-2xl backdrop-blur-xl xl:block"
                  animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="grid size-10 place-items-center rounded-xl bg-[#00AEEF]/20 text-[#5bd6ff]">
                      <ShieldCheck size={20} />
                    </span>
                    <span>Always-on protection</span>
                  </div>
                </motion.div>

                <div className="site-container relative z-10 w-full">
                  <motion.div
                    key={`${slide.id}-${activeSlide}`}
                    className="mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left"
                    initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
                    }
                    transition={{
                      duration: 0.65,
                      delay: 0.15,
                      ease: 'easeOut',
                    }}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-sky-100 uppercase backdrop-blur-md sm:text-sm">
                      <span className="size-2 rounded-full bg-[#00AEEF] shadow-[0_0_16px_#00AEEF]" />
                      {slide.badge}
                    </div>

                    <Heading className="mt-6 text-[clamp(2.35rem,5.5vw,5rem)] leading-[1.04] font-semibold tracking-[-0.04em] text-white">
                      {slide.title}
                    </Heading>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-2xl">
                      {slide.description}
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                      <motion.div
                        whileHover={
                          reduceMotion ? undefined : { y: -3, scale: 1.02 }
                        }
                      >
                        <Link
                          href={slide.primaryCta.href}
                          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#1B75D0] px-6 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(27,117,208,.35)] transition-colors hover:bg-[#00AEEF] sm:w-auto"
                        >
                          {slide.primaryCta.label}
                          <ChevronRight className="ml-2" size={18} />
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={
                          reduceMotion ? undefined : { y: -3, scale: 1.02 }
                        }
                      >
                        <Link
                          href={slide.secondaryCta.href}
                          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/20 sm:w-auto"
                        >
                          {slide.secondaryCta.label}
                        </Link>
                      </motion.div>
                    </div>

                    <div className="mt-8 hidden flex-wrap justify-center gap-x-5 gap-y-3 border-t border-white/15 pt-6 lg:flex lg:justify-start">
                      {heroTrustBadges.map((badge) => (
                        <span
                          key={badge}
                          className="flex items-center gap-2 text-xs font-medium text-slate-200"
                        >
                          <CheckCircle2 className="text-[#45c9f5]" size={15} />
                          {badge}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="site-container pointer-events-none absolute inset-x-0 bottom-7 z-20 flex items-end justify-between sm:bottom-9">
        <div
          className="hero-pagination pointer-events-auto !static !w-auto"
          aria-label="Choose hero slide"
        />
        <div className="pointer-events-auto hidden gap-2 sm:flex">
          <button
            className="hero-prev grid size-12 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/20 disabled:opacity-40"
            aria-label="Previous slide"
          >
            <ArrowLeft size={19} />
          </button>
          <button
            className="hero-next grid size-12 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/20 disabled:opacity-40"
            aria-label="Next slide"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute right-8 bottom-28 z-20 hidden items-center gap-2 rounded-full border border-white/15 bg-[#071a2d]/45 px-4 py-2 text-xs text-slate-200 backdrop-blur-md lg:flex">
        <Headphones size={15} className="text-[#45c9f5]" /> 24/7 enterprise
        support
      </div>
    </section>
  );
}
