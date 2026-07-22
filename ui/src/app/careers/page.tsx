import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { Button } from '@/components/ui/button';
export const metadata: Metadata = { title: 'Careers' };
const roles = [
  'Senior Full Stack Engineer',
  'Cloud Platform Engineer',
  'Product Designer',
  'Data Engineer',
];
export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        description="Do meaningful work with thoughtful people—and keep growing while you do it."
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Open roles"
            title="Find your next opportunity."
            copy="We value clear thinking, generous collaboration and people who care about the work behind the work."
          />
          <div className="mt-10 divide-y rounded-2xl border">
            {roles.map((role, i) => (
              <article
                className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
                key={role}
              >
                <div>
                  <h2 className="text-lg">{role}</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {i % 2 ? 'Bengaluru · Hybrid' : 'Remote · India'}
                  </p>
                </div>
                <Button href="/contact" variant="secondary">
                  Express interest
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
