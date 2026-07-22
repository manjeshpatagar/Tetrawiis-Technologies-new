import Image from 'next/image';
import { clientLogos, type ClientLogo } from '@/constants/clientLogos';

export function ClientLogoMarquee() {
  return (
    <section
      className="overflow-hidden bg-white py-[120px]"
      aria-labelledby="client-logo-title"
    >
      <div className="site-container text-center">
        <p className="eyebrow">Our partnerships</p>
        <h2 id="client-logo-title" className="section-title">
          Trusted by Industry Leaders
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          We are proud to partner with some of the world&apos;s leading
          organizations across Healthcare, Manufacturing, Technology, Research,
          Engineering, and Enterprise IT.
        </p>
      </div>

      <div
        className="client-marquee relative mt-14 sm:mt-16"
        aria-label="Client organizations"
      >
        <div className="client-marquee-track">
          <LogoGroup />
          <LogoGroup duplicate />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-24 lg:w-40" />
      </div>
    </section>
  );
}

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="client-marquee-group" aria-hidden={duplicate || undefined}>
      {clientLogos.map((logo) => (
        <LogoCard
          key={`${duplicate ? 'duplicate' : 'primary'}-${logo.src}`}
          logo={logo}
          duplicate={duplicate}
        />
      ))}
    </div>
  );
}

function LogoCard({
  logo,
  duplicate,
}: {
  logo: ClientLogo;
  duplicate: boolean;
}) {
  return (
    <div
      className="client-logo-card group"
      tabIndex={duplicate ? -1 : 0}
      aria-label={duplicate ? undefined : `${logo.name}, client organization`}
    >
      <div className="relative h-full w-full">
        <Image
          src={logo.src}
          alt={duplicate ? '' : `${logo.name} logo`}
          fill
          sizes="(max-width: 640px) 140px, (max-width: 1024px) 170px, 200px"
          loading="lazy"
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}
