'use client';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import { navigation, services } from '@/constants/site';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/ui/drawer';
import { useUiStore } from '@/store/ui-store';
export function Navbar() {
  const { mobileMenuOpen, setMobileMenuOpen } = useUiStore();
  return (
    <header className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur">
      <div className="site-container flex h-18 items-center justify-between">
        <Link href="/" className="text-navy-950 text-xl font-bold">
          <span className="text-brand-600">Tetra</span>wiis
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) =>
            item.label === 'Services' ? (
              <div className="group relative" key={item.href}>
                <Link
                  className="hover:text-brand-600 flex items-center gap-1 text-sm font-medium text-slate-700"
                  href={item.href}
                >
                  {item.label}
                  <ChevronDown size={14} />
                </Link>
                <div className="invisible absolute top-full -left-6 w-[34rem] translate-y-2 rounded-xl border bg-white p-5 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="eyebrow mb-3">Capabilities</p>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((s) => (
                      <Link
                        className="rounded-lg p-3 hover:bg-slate-50"
                        href="/services"
                        key={s.title}
                      >
                        <span className="text-navy-950 block text-sm font-semibold">
                          {s.title}
                        </span>
                        <span className="text-xs text-slate-500">
                          {s.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                className="hover:text-brand-600 text-sm font-medium text-slate-700"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact">Book IT Consultation</Button>
        </div>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden"
          aria-label="Open navigation"
        >
          <Menu />
        </button>
      </div>
      <Drawer open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <nav className="mt-10 flex flex-col gap-2">
          {navigation.map((item) => (
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 font-medium hover:bg-slate-50"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Button
            href="/contact"
            className="mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book IT Consultation
          </Button>
        </nav>
      </Drawer>
    </header>
  );
}
