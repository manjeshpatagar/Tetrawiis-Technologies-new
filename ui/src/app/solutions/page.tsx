import type { Metadata } from 'next';
import { SolutionsHero } from '@/components/solutions/solutions-hero';
import { SolutionFamily } from '@/components/solutions/solution-family';
import { ExpertiseGrid } from '@/components/solutions/expertise-grid';
import { SolutionAdvantageCard } from '@/components/solutions/solution-advantage-card';
import { SolutionsCTA } from '@/components/solutions/solutions-cta';
import { SolutionCard } from '@/components/cards/solution-card';
import { SectionHeading } from '@/components/sections/section-heading';
import { solutions } from '@/constants/site';
import {
  cyberSolutions,
  infrastructureSolutions,
  otherSolutions,
  solutionAdvantages,
  technologyExpertise,
} from '@/constants/solutions-page';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Enterprise cybersecurity, infrastructure, cloud, hardware, managed IT, and technology solutions from Tetrawiis Technologies.',
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />

      <SolutionFamily
        eyebrow="Cybersecurity"
        title="Cyber Security Solutions"
        description="Protect your organization against evolving cyber threats using enterprise-grade security solutions from globally trusted OEM partners."
        image="/images/hero/noc-team.png"
        imageAlt="Cybersecurity operations team monitoring enterprise threats"
        solutions={cyberSolutions}
      />

      <div className="bg-surface">
        <SolutionFamily
          eyebrow="Infrastructure"
          title="IT Infrastructure Solutions"
          description="Build a dependable technology foundation with enterprise compute, storage, virtualization, cloud, switching, racks, and structured cabling."
          image="/images/hero/infrastructure.png"
          imageAlt="Modern enterprise data center infrastructure"
          imageRight
          solutions={infrastructureSolutions}
        />
      </div>

      <section className="section bg-navy-950 text-white [&_.section-copy]:!text-slate-300 [&_.section-title]:!text-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Technology expertise"
            title="Specialists across the complete technology lifecycle."
            copy="Multidisciplinary capability to design, build, secure, operate, and improve modern enterprise platforms."
            center
          />
          <ExpertiseGrid items={technologyExpertise} />

          <div className="mt-20 border-t border-white/10 pt-16">
            <SectionHeading
              eyebrow="Industry solutions"
              title="Designed for the realities of your sector."
              copy="The existing industry foundations that connect our capabilities to sector-specific outcomes."
              center
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {solutions.map((solution) => (
                <SolutionCard key={solution.title} solution={solution} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SolutionFamily
        eyebrow="Supporting capabilities"
        title="Other IT Solutions"
        description="Complete your technology environment with resilient backup, monitoring, applications, databases, migration, audit, and maintenance services."
        image="/images/hero/tech-talent.png"
        imageAlt="Enterprise IT specialists delivering managed technology solutions"
        solutions={otherSolutions}
      />

      <section className="section bg-surface">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why choose our solutions"
            title="The right technology, supported by the right expertise."
            copy="Vendor choice, engineering discipline, and accountable support come together in every solution."
            center
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutionAdvantages.map((item, index) => (
              <SolutionAdvantageCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <SolutionsCTA />
    </>
  );
}
