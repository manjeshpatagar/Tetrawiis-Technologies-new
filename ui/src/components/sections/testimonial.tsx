import { Quote } from 'lucide-react';
export function Testimonial() {
  return (
    <figure className="bg-surface rounded-3xl p-8 sm:p-12">
      <Quote className="text-brand-500" size={36} />
      <blockquote className="text-navy-950 mt-6 max-w-4xl text-2xl leading-10">
        “Tetrawiis brought rare clarity to a complex transformation. They felt
        like an extension of our own leadership and engineering teams.”
      </blockquote>
      <figcaption className="mt-6 text-sm font-semibold">
        Ananya Rao{' '}
        <span className="font-normal text-slate-500">
          — Chief Digital Officer, Enterprise Client
        </span>
      </figcaption>
    </figure>
  );
}
