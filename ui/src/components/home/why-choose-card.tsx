import {
  BadgeCheck,
  ChartNoAxesCombined,
  Clock3,
  Gauge,
  Handshake,
  LifeBuoy,
  Network,
  ShieldCheck,
  Shuffle,
  Trophy,
} from 'lucide-react';

const icons = {
  BadgeCheck,
  ChartNoAxesCombined,
  Clock3,
  Gauge,
  Handshake,
  LifeBuoy,
  Network,
  ShieldCheck,
  Shuffle,
  Trophy,
};

export function WhyChooseCard({
  item,
}: {
  item: { title: string; description: string; icon: string };
}) {
  const Icon = icons[item.icon as keyof typeof icons] ?? BadgeCheck;
  return (
    <article className="hover:border-brand-500/50 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10">
      <Icon className="text-brand-500" aria-hidden="true" />
      <h3 className="mt-5 text-lg text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        {item.description}
      </p>
    </article>
  );
}
