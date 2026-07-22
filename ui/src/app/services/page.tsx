import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services/services-hero';
import { ServiceOffering } from '@/components/services/service-offering';
import { ServiceAdvantageCard } from '@/components/services/service-advantage-card';
import { ServicesProcess } from '@/components/services/services-process';
import { ServicesCTA } from '@/components/services/services-cta';
import { ServiceCard } from '@/components/cards/service-card';
import { SectionHeading } from '@/components/sections/section-heading';
import { Accordion } from '@/components/ui/accordion';
import { services } from '@/constants/site';
import {
  serviceAdvantages,
  serviceOfferings,
  servicesFaq,
  servicesProcess,
} from '@/constants/services-page';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Future-proof cloud, network, cybersecurity, and managed infrastructure services for ambitious organizations.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Core service offerings"
            title="Infrastructure engineered for what comes next."
            copy="From cloud architecture through always-on operations, every service is designed around security, performance, resilience, and measurable value."
            center
          />
          <div className="mt-16 space-y-20 lg:space-y-28">
            {serviceOfferings.map((offering, index) => (
              <ServiceOffering
                key={offering.title}
                offering={offering}
                imageRight={index % 2 === 1}
              />
            ))}
          </div>

          <div className="mt-24 border-t pt-20">
            <SectionHeading
              eyebrow="Additional capabilities"
              title="Connected expertise across your technology estate."
              copy="Our existing multidisciplinary capabilities complement every infrastructure engagement."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why choose our services"
            title="Enterprise capability. Personal accountability."
            copy="The technical depth, operational discipline, and responsiveness your critical environment demands."
            center
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAdvantages.map((item, index) => (
              <ServiceAdvantageCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Engagement process"
            title="How We Move You Forward"
            copy="A transparent, low-risk path from infrastructure discovery to continuous optimization."
            center
          />
          <ServicesProcess steps={servicesProcess} />

          <div className="bg-surface mt-20 grid gap-12 rounded-3xl p-7 sm:p-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="How we work"
              title="Flexible engagement. Consistent accountability."
              copy="Our teams fit your operating model while bringing disciplined delivery and transparent communication."
            />
            <Accordion
              items={[
                {
                  title: 'Advisory & discovery',
                  content:
                    'Align business priorities, users and technical reality in a focused discovery engagement.',
                },
                {
                  title: 'Dedicated product teams',
                  content:
                    'Add a stable multidisciplinary team that owns outcomes alongside your leaders.',
                },
                {
                  title: 'Managed delivery',
                  content:
                    'Entrust a defined platform or capability to a team accountable for its full lifecycle.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Infrastructure questions, answered clearly."
            copy="Straightforward guidance on platforms, monitoring, migration, recovery, industries, and managed services."
          />
          <Accordion items={servicesFaq} />
        </div>
      </section>

      <ServicesCTA />
    </>
  );
}
