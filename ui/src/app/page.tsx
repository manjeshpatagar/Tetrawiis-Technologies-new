import { Hero } from '@/components/hero/hero';
import { SolutionCard } from '@/components/cards/solution-card';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTA } from '@/components/sections/cta';
import { ClientLogoMarquee } from '@/components/shared/ClientLogoMarquee';
import { CoreServiceCard } from '@/components/home/core-service-card';
import { WhyChooseCard } from '@/components/home/why-choose-card';
import { PainApproach } from '@/components/home/pain-approach';
import { ProcessTimeline } from '@/components/home/process-timeline';
import { TestimonialCard } from '@/components/home/testimonial-card';
import { solutions } from '@/constants/site';
import {
  coreServices,
  infrastructureProcess,
  staffingProcess,
  testimonials,
  whyChooseItems,
} from '@/constants/home';
export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Core services"
            title="Robust Infrastructure. Tailored for Your Growth."
            copy="Secure, scalable technology foundations and specialist talent that keep your organization performing today and ready for tomorrow."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <CoreServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-surface">
        <div className="site-container">
          <SectionHeading
            eyebrow="Industry solutions"
            title="Designed for the realities of your sector."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.title} solution={solution} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-navy-950 text-white [&_.section-copy]:!text-slate-300 [&_.section-title]:!text-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why Tetrawiis"
            title="Why Choose Tetrawiis Technologies"
            copy="A practical combination of infrastructure expertise, responsive support, and specialized technology talent."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyChooseItems.map((item) => (
              <WhyChooseCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
      <PainApproach />
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Infrastructure delivery"
            title="Our Process"
            copy="A disciplined path from discovery to continuous improvement keeps delivery clear, controlled, and accountable."
            center
          />
          <ProcessTimeline steps={infrastructureProcess} />
        </div>
      </section>
      <section className="section bg-surface">
        <div className="site-container">
          <SectionHeading
            eyebrow="Staffing delivery"
            title="Our Staffing Process"
            copy="A focused, transparent approach connects your team with qualified technology professionals faster."
            center
          />
          <ProcessTimeline steps={staffingProcess} />
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Client testimonials"
            title="Trusted partnerships. Measurable impact."
            copy="What technology and business leaders value about working with Tetrawiis."
            center
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>
      <ClientLogoMarquee />
      <CTA
        title="Ready to eliminate IT headaches?"
        description="Let’s build an infrastructure that powers your business goals, not holds them back."
        primary={{ label: 'Book Consultation', href: '/contact' }}
        secondary={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
