'use client';

import { usePathname } from 'next/navigation';
import { ClientLogoMarquee } from '@/components/shared/ClientLogoMarquee';

export function FooterClientLogoMarquee() {
  const pathname = usePathname();
  return pathname === '/' ? null : <ClientLogoMarquee />;
}
