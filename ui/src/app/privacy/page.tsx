import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
export const metadata: Metadata = { title: 'Privacy Policy' };
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How Tetrawiis Technologies handles and protects personal information."
      />
      <Policy>
        <h2>Information we collect</h2>
        <p>
          We may collect information you provide through enquiries, recruitment
          submissions and ordinary website usage.
        </p>
        <h2>How we use information</h2>
        <p>
          We use information to respond to requests, operate and improve our
          services, meet legal obligations and protect our systems.
        </p>
        <h2>Your choices</h2>
        <p>
          You may request access, correction or deletion of eligible personal
          information by contacting our privacy team.
        </p>
      </Policy>
    </>
  );
}
function Policy({ children }: { children: React.ReactNode }) {
  return (
    <article className="site-container section prose mx-auto max-w-3xl space-y-4 [&_h2]:mt-8 [&_h2]:text-2xl [&_p]:leading-8">
      {children}
    </article>
  );
}
