import { Breadcrumb } from '@/components/ui/breadcrumb';
export function PageHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="site-container">
        <Breadcrumb current={title} />
        <h1 className="mt-8 text-4xl sm:text-5xl">{title}</h1>
        <p className="section-copy">{description}</p>
      </div>
    </section>
  );
}
