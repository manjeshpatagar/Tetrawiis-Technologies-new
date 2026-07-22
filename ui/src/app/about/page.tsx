import type { Metadata } from 'next';
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
