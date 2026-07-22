import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
const styles = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm',
  secondary: 'bg-white text-navy-950 ring-1 ring-slate-300 hover:bg-slate-50',
  ghost: 'text-navy-950 hover:bg-slate-100',
};
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof styles;
  href?: string;
  children: ReactNode;
};
export function Button({
  variant = 'primary',
  href,
  className,
  children,
  ...props
}: Props) {
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition',
    styles[variant],
    className,
  );
  return href ? (
    <Link className={classes} href={href}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
