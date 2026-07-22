import { ArrowDown, ArrowRight } from 'lucide-react';
import type { CSSProperties } from 'react';

export function ProcessTimeline({
  steps,
}: {
  steps: ReadonlyArray<{ title: string; description: string }>;
}) {
  return (
    <ol
      className="mt-12 grid gap-4 lg:grid-cols-[repeat(var(--step-count),minmax(0,1fr))]"
      style={{ '--step-count': steps.length } as CSSProperties}
    >
      {steps.map((step, index) => (
        <li className="relative flex min-w-0 flex-col" key={step.title}>
          <div className="flex-1 rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="bg-brand-600 grid size-10 place-items-center rounded-full text-sm font-bold text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-5 text-lg">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {step.description}
            </p>
          </div>
          {index < steps.length - 1 && (
            <>
              <ArrowDown className="text-brand-500 mx-auto my-3 lg:hidden" />
              <ArrowRight className="text-brand-500 absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 lg:block" />
            </>
          )}
        </li>
      ))}
    </ol>
  );
}
