import {
  ArrowRight,
  CircleAlert,
  HeartHandshake,
  ServerCrash,
  ShieldCheck,
} from 'lucide-react';
import { SectionHeading } from '@/components/sections/section-heading';

export function PainApproach() {
  return (
    <section className="section bg-surface">
      <div className="site-container">
        <SectionHeading
          eyebrow="A better IT experience"
          title="Why Businesses Frustrate with IT"
          copy="Technology should create momentum—not recurring disruption, uncertainty, and hidden cost."
          center
        />
        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <article className="rounded-3xl border bg-white p-7 shadow-sm sm:p-9">
            <div className="grid size-14 place-items-center rounded-2xl bg-red-50 text-red-600">
              <ServerCrash />
            </div>
            <p className="mt-6 text-sm font-semibold tracking-widest text-red-600 uppercase">
              The Pain
            </p>
            <h3 className="mt-2 text-2xl">
              Reactive support creates recurring disruption.
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {[
                'Unexpected downtime and slow resolution',
                'Disconnected vendors and unclear ownership',
                'Security gaps and infrastructure that cannot scale',
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <CircleAlert
                    className="mt-0.5 shrink-0 text-red-500"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <div className="hidden items-center lg:flex">
            <span className="bg-brand-600 grid size-12 place-items-center rounded-full text-white shadow-lg">
              <ArrowRight />
            </span>
          </div>
          <article className="border-brand-100 bg-brand-50 rounded-3xl border p-7 shadow-sm sm:p-9">
            <div className="bg-brand-600 grid size-14 place-items-center rounded-2xl text-white">
              <HeartHandshake />
            </div>
            <p className="text-brand-600 mt-6 text-sm font-semibold tracking-widest uppercase">
              Our Approach
            </p>
            <h3 className="mt-2 text-2xl">
              One accountable partner, focused on prevention.
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {[
                'Proactive monitoring and lifecycle planning',
                'Clear ownership, reporting, and expert guidance',
                'Secure solutions aligned to long-term business goals',
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <ShieldCheck
                    className="text-brand-600 mt-0.5 shrink-0"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
