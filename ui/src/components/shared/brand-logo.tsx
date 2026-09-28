import Image from 'next/image';

export function BrandLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/tetrawiis-logo.png"
      alt="Tetrawiis Technologies — Innovation Integrated"
      width={707}
      height={353}
      className={className}
      unoptimized
      priority={priority}
    />
  );
}
