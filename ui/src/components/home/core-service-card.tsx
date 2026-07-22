import Link from 'next/link';
import {
  ArrowUpRight,
  ClipboardCheck,
  CloudCog,
  MonitorCog,
  Network,
  ServerCog,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';

const icons = {
  ClipboardCheck,
  CloudCog,
  MonitorCog,
  Network,
  ServerCog,
  ShieldCheck,
  UsersRound,
};

export function CoreServiceCard({
  service,
}: {
  service: { title: string; description: string; icon: string };
}) {
  const Icon = icons[service.icon as keyof typeof icons] ?? CloudCog;
  return (
    <article className="group hover:border-brand-100 flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="bg-brand-50 text-brand-600 group-hover:bg-brand-600 mb-6 grid size-12 place-items-center rounded-xl transition group-hover:text-white">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="text-xl">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600">
        {service.description}
      </p>
      <Link
        href="/services"
        className="text-brand-600 hover:text-brand-700 mt-6 inline-flex items-center text-sm font-semibold"
      >
        View Details{' '}
        <ArrowUpRight
          className="ml-2 transition group-hover:translate-x-1 group-hover:-translate-y-1"
          size={17}
        />
      </Link>
    </article>
  );
}
