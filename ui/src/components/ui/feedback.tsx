import { AlertCircle, Inbox } from 'lucide-react';
export function LoadingSkeleton() {
  return (
    <div aria-label="Loading" className="animate-pulse space-y-3">
      <div className="h-5 w-2/3 rounded bg-slate-200" />
      <div className="h-4 rounded bg-slate-100" />
    </div>
  );
}
export function EmptyState({
  message = 'Nothing to show yet.',
}: {
  message?: string;
}) {
  return (
    <div className="rounded-xl border border-dashed p-8 text-center">
      <Inbox className="mx-auto mb-3 text-slate-400" />
      <p>{message}</p>
    </div>
  );
}
export function ErrorState({
  message = 'Something went wrong. Please try again.',
}: {
  message?: string;
}) {
  return (
    <div
      role="alert"
      className="flex gap-3 rounded-xl bg-red-50 p-5 text-red-700"
    >
      <AlertCircle />
      <p>{message}</p>
    </div>
  );
}
