import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { ContactForm } from '@/components/forms/contact-form';
import { siteConfig } from '@/constants/site';
export const metadata: Metadata = { title: 'Contact' };
export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let’s talk"
        description="Tell us where you want to go. We’ll bring honest perspective on how technology can help you get there."
      />
      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div className="space-y-7">
            <ContactItem
              icon={<Mail />}
              title="Email"
              text={siteConfig.email}
            />
            <ContactItem
              icon={<Phone />}
              title="Phone"
              text={siteConfig.phone}
            />
            <ContactItem
              icon={<MapPin />}
              title="Office"
              text="Bengaluru, Karnataka, India"
            />
          </div>
          <div className="bg-surface rounded-2xl border p-6 sm:p-9">
            <h2 className="mb-7 text-2xl">Start a conversation</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
function ContactItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="text-brand-600">{icon}</div>
      <div>
        <h2 className="text-base">{title}</h2>
        <p className="mt-1 text-sm">{text}</p>
      </div>
    </div>
  );
}
