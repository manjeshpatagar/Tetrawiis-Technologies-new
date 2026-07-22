import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
export const metadata: Metadata = { title: 'Terms of Use' };
export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        description="The terms governing use of the Tetrawiis Technologies website."
      />
      <article className="site-container section mx-auto max-w-3xl space-y-4 [&_h2]:mt-8 [&_h2]:text-2xl [&_p]:leading-8">
        <h2>Website use</h2>
        <p>
          Use this website lawfully and do not interfere with its security,
          availability or operation.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Website content and branding remain the property of Tetrawiis
          Technologies or their respective licensors.
        </p>
        <h2>Disclaimer</h2>
        <p>
          Website information is general in nature and may change. Specific
          services are governed by written client agreements.
        </p>
      </article>
    </>
  );
}
