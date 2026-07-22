import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/footer/footer';
import { AppProviders } from '@/components/providers/app-providers';
import { FooterClientLogoMarquee } from '@/components/shared/FooterClientLogoMarquee';
import { siteConfig } from '@/constants/site';
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Digital Engineering`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: { icon: '/favicon.svg' },
  manifest: '/manifest.webmanifest',
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#061728',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <Navbar />
          <main>{children}</main>
          <FooterClientLogoMarquee />
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
