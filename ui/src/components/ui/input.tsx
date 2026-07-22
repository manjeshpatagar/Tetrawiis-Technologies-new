import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'min-h-12 w-full rounded-lg border bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400',
      className,
    )}
    {...props}
  />
));
Input.displayName = 'Input';
