import {
  Blocks,
  BrainCircuit,
  Cloud,
  Code2,
  Lightbulb,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
const icons = { Blocks, BrainCircuit, Cloud, Code2, Lightbulb, ShieldCheck };
export function ServiceCard({
  service,
}: {
  service: { title: string; description: string; icon: string };
}) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Code2;
  return (
    <article className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="bg-brand-50 text-brand-600 mb-6 grid size-12 place-items-center rounded-xl">
        <Icon />
      </div>
      <h3 className="text-xl">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
      <ArrowUpRight
        className="text-brand-600 mt-6 transition group-hover:translate-x-1"
        size={20}
      />
    </article>
  );
}
