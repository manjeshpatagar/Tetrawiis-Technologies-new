'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BrandLogo } from '@/components/shared/brand-logo';
import { ChevronDown, Menu } from 'lucide-react';
import { navigation, solutionCapabilities } from '@/constants/site';
import { serviceOfferings } from '@/constants/services-page';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/ui/drawer';
import { useUiStore } from '@/store/ui-store';
const capabilityGroups: Record<
  string,
  readonly { id: string; title: string; description: string }[]
> = {
  Services: serviceOfferings,
  Solutions: solutionCapabilities,
};

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { mobileMenuOpen, setMobileMenuOpen } = useUiStore();
  return (
    <header className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur">
      <div className="site-container flex h-24 items-center justify-between">
        <Link
          href="/"
          className="shrink-0"
          aria-label="Tetrawiis Technologies home"
        >
          <BrandLogo className="h-auto w-40 sm:w-44" priority />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) =>
            capabilityGroups[item.label] ? (
              <div
                className="relative"
                key={item.href}
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(item.label)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setOpenMenu(null);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setOpenMenu(null);
                }}
              >
                <Link
                  className="hover:text-brand-600 flex items-center gap-1 text-sm font-medium text-slate-700"
                  href={item.href}
                >
                  {item.label}
                  <ChevronDown size={14} />
                </Link>
                <div
                  className={`absolute top-full -left-6 w-[34rem] rounded-xl border bg-white p-5 shadow-xl transition ${openMenu === item.label ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'}`}
                >
                  <p className="eyebrow mb-3">Capabilities</p>
                  <div className="grid grid-cols-2 gap-2">
                    {capabilityGroups[item.label].map((s) => (
                      <Link
                        className="rounded-lg p-3 hover:bg-slate-50"
                        href={`${item.href}#${s.id}`}
                        onClick={() => setOpenMenu(null)}
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
            <div key={item.href}>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-3 font-medium hover:bg-slate-50"
                href={item.href}
              >
                {item.label}
              </Link>
              {capabilityGroups[item.label] && (
                <div className="ml-3 border-l pl-3">
                  <p className="eyebrow px-3 py-2">Capabilities</p>
                  {capabilityGroups[item.label].map((offering) => (
                    <Link
                      key={offering.id}
                      href={`${item.href}#${offering.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                    >
                      {offering.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
