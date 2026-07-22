import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface CTAProps {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTA({
  title = 'Let’s turn your next challenge into an advantage.',
  description = 'Talk with our technology leaders about what is possible, practical and valuable for your business.',
  primary = { label: 'Start a conversation', href: '/contact' },
  secondary,
}: CTAProps = {}) {
  return (
    <section className="section">
      <div className="site-container">
        <div className="bg-brand-600 rounded-3xl px-7 py-14 text-center text-white sm:px-12">
          <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="text-brand-50 mx-auto mt-4 max-w-2xl">{description}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={primary.href} variant="secondary">
              {primary.label} <ArrowRight className="ml-2" size={17} />
            </Button>
            {secondary && (
              <Button
                href={secondary.href}
                variant="ghost"
                className="border border-white/30 !text-white hover:bg-white/10"
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
