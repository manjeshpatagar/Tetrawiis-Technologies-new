import type { Metadata } from 'next';
import { Compass, Target } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { Timeline } from '@/components/sections/timeline';
import { CTA } from '@/components/sections/cta';
export const metadata: Metadata = { title: 'About' };
export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About us"
        description="A technology partner built on curiosity, craft and the belief that strong relationships create stronger systems."
      />
      <section
        className="section to-brand-50/40 border-b border-slate-100 bg-gradient-to-b from-white"
        aria-labelledby="technology-purpose-title"
      >
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="eyebrow">Who we are</p>
            <h2 id="technology-purpose-title" className="section-title">
              Technology with purpose
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Tetrawiis Technologies is an enterprise technology solutions and
              services company focused on helping organizations build secure,
              resilient and modern IT environments.
            </p>
            <p className="text-navy-950 mt-7 font-medium">
              We bring together expertise across:
            </p>
            <ul
              className="mt-4 flex flex-wrap gap-3"
              aria-label="Our expertise"
            >
              {[
                'Infrastructure',
                'Cloud',
                'Cybersecurity',
                'Data Protection',
                'Disaster Recovery',
                'Managed Services',
              ].map((area) => (
                <li
                  key={area}
                  className="border-brand-100 bg-brand-50 text-brand-900 rounded-full border px-4 py-2 text-sm font-medium"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-lg leading-8 text-slate-600">
              Our approach combines technology expertise, architecture,
              implementation and ongoing support to help customers reduce risk,
              improve resilience and modernize their IT environments.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm sm:p-9">
              <div className="bg-brand-50 text-brand-600 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-2xl">Mission</h3>
              <p className="mt-4 leading-7 text-slate-600">
                To help organizations build technology environments that are
                secure, resilient, scalable and ready for the future.
              </p>
            </article>
            <article className="border-brand-900 bg-brand-900 rounded-2xl border p-7 shadow-sm sm:p-9">
              <div className="text-brand-100 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Compass className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-2xl text-white">Vision</h3>
              <p className="mt-4 leading-7 text-slate-200">
                To become a trusted technology partner for enterprise
                infrastructure, cyber resilience and digital transformation.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container grid gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our story"
            title="Growing with purpose, delivering with discipline."
            copy="We started with a small group of engineers who wanted technology consulting to feel clearer and more accountable. Today, our global team keeps that same directness while solving challenges at enterprise scale."
          />
          <Timeline
            items={[
              {
                year: '2014',
                title: 'Tetrawiis founded',
                text: 'A focused engineering studio begins with a commitment to dependable delivery.',
              },
              {
                year: '2019',
                title: 'Global delivery expands',
                text: 'Cross-functional teams begin serving enterprise clients across regions.',
              },
              {
                year: 'Today',
                title: 'Building what comes next',
                text: 'Cloud, data and product expertise unite in one outcome-led organization.',
              },
            ]}
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
