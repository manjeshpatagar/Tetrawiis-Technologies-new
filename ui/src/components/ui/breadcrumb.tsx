import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm text-slate-500"
    >
      <Link href="/">Home</Link>
      <ChevronRight size={14} />
      <span className="text-slate-800">{current}</span>
    </nav>
  );
}
