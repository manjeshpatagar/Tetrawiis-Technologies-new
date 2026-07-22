'use client';
import { ErrorState } from '@/components/ui/feedback';
import { Button } from '@/components/ui/button';
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="site-container min-h-[60vh] py-20">
      <ErrorState />
      <Button className="mt-5" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
