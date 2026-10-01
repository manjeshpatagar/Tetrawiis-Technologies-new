import type { Metadata } from 'next';
import {
  BriefcaseBusiness,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { siteConfig } from '@/constants/site';
export const metadata: Metadata = { title: 'Contact' };
const contactLinkClass =
  'inline-flex min-h-9 max-w-full items-center rounded-lg px-2 py-1 -ml-2 font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700 focus-visible:bg-brand-50 break-words';
export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        description="Reach our team for sales, general enquiries, or career opportunities."
      />
      <section className="section via-brand-50/40 bg-gradient-to-b from-white to-white">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
          <div className="space-y-4">
            <div className="mb-6">
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-3 text-3xl">Let’s connect.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                The right people, just a call or an email away.
              </p>
            </div>
            <ContactItem
              icon={<Mail aria-hidden="true" />}
              title="Email"
              description="Sales & general enquiries"
            >
              {[siteConfig.email, siteConfig.infoEmail].map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className={contactLinkClass}
                >
                  {email}
                </a>
              ))}
            </ContactItem>
            <ContactItem
              icon={<Phone aria-hidden="true" />}
              title="Phone"
              description="Speak with our team"
            >
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className={contactLinkClass}
                >
                  {phone}
                </a>
              ))}
            </ContactItem>
            <ContactItem
              icon={<BriefcaseBusiness aria-hidden="true" />}
              title="Careers"
              description="Your next chapter starts here"
            >
              <a
                href={`mailto:${siteConfig.careersEmail}`}
                className={contactLinkClass}
              >
                {siteConfig.careersEmail}
              </a>
            </ContactItem>
            <ContactItem
              icon={<MapPin aria-hidden="true" />}
              title="Office"
              description="Come say hello"
            >
              <p>Tetrawiis Technologies Private Limited</p>
              <p>Bengaluru, Karnataka, India</p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClass}
              >
                Get directions{' '}
                <ExternalLink className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </ContactItem>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_16px_60px_-24px_rgba(10,39,72,0.2)] lg:sticky lg:top-28">
            <div className="from-brand-50 bg-gradient-to-br to-white p-6 sm:p-8">
              <p className="eyebrow mb-3">Our location</p>
              <h2 className="text-2xl">Find us in Bengaluru</h2>
              <p className="mt-2 text-sm">Visit our office in Bengaluru.</p>
            </div>
            <iframe
              title="Tetrawiis Technologies office location in Bengaluru"
              src={siteConfig.mapEmbedUrl}
              className="h-80 w-full border-0 sm:h-[420px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6 sm:px-8">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-600 hover:bg-brand-700 inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition"
              >
                Open in Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function ContactItem({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group hover:border-brand-100 flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-colors sm:gap-5 sm:p-6">
      <div className="bg-brand-50 text-brand-600 ring-brand-100 group-hover:bg-brand-600 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 transition-colors ring-inset group-hover:text-white [&>svg]:h-5 [&>svg]:w-5">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-lg">{title}</h3>
        <p className="mt-0.5 text-xs leading-5 text-slate-500">{description}</p>
        <div className="mt-3 flex flex-col items-start gap-0.5 text-sm leading-6">
          {children}
        </div>
      </div>
    </div>
  );
}
