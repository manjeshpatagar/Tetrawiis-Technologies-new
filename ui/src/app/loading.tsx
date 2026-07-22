import { LoadingSkeleton } from '@/components/ui/feedback';
export default function Loading() {
  return (
    <div className="site-container min-h-[60vh] py-20">
      <LoadingSkeleton />
    </div>
  );
}
