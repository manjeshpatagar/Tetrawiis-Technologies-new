import { ArrowRight } from 'lucide-react';
export function SolutionCard({
  solution,
}: {
  solution: { title: string; description: string; tag: string };
}) {
  return (
    <article className="bg-navy-950 relative min-h-72 overflow-hidden rounded-2xl p-8 text-white">
      <div className="bg-brand-500/20 absolute -right-16 -bottom-20 size-56 rounded-full blur-2xl" />
      <span className="text-brand-100 text-xs font-semibold tracking-widest uppercase">
        {solution.tag}
      </span>
      <h3 className="mt-5 text-2xl text-white">{solution.title}</h3>
      <p className="mt-4 max-w-sm leading-7 text-slate-300">
        {solution.description}
      </p>
      <ArrowRight className="absolute bottom-8" />
    </article>
  );
}
