import { Quote, Star } from 'lucide-react';

export function TestimonialCard({
  testimonial,
}: {
  testimonial: { quote: string; name: string; role: string; company: string };
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <Quote className="text-brand-500" size={30} />
        <div className="flex text-amber-400" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={15}
              fill="currentColor"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <blockquote className="text-navy-950 mt-6 flex-1 text-lg leading-8">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t pt-5">
        <span className="text-navy-950 block font-semibold">
          {testimonial.name}
        </span>
        <span className="mt-1 block text-sm text-slate-500">
          {testimonial.role} · {testimonial.company}
        </span>
      </figcaption>
    </figure>
  );
}
