import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { navigation, siteConfig } from '@/constants/site';
export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="site-container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-bold text-white">
            <span className="text-brand-500">Tetra</span>wiis
          </p>
          <p className="mt-4 max-w-sm leading-7">
            Engineering dependable digital futures for ambitious organizations.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Services</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/services">Cloud & Hybrid Solutions</Link>
            <Link href="/services">Enterprise Networking</Link>
            <Link href="/services">Cybersecurity</Link>
            <Link href="/services">Managed IT Services</Link>
            <Link href="/careers">Staffing Solutions</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Company</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <div className="mt-4 space-y-3 text-sm">
            <a
              className="flex items-center gap-2"
              href={`mailto:${siteConfig.email}`}
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
            <a
              className="flex items-center gap-2"
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            >
              <Phone size={16} />
              {siteConfig.phone}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 shrink-0" size={16} />
              Bengaluru, Karnataka, India
            </p>
          </div>
          <div className="mt-5 flex gap-4">
            <span aria-label="LinkedIn">
              <Linkedin size={20} />
            </span>
            <span aria-label="Twitter">
              <Twitter size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-3 py-6 text-xs sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Tetrawiis Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
