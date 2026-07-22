'use client';
import type { PropsWithChildren } from 'react';
import { X } from 'lucide-react';
export function Drawer({
  open,
  onClose,
  children,
}: PropsWithChildren<{ open: boolean; onClose: () => void }>) {
  return (
    <>
      <button
        aria-label="Close navigation"
        onClick={onClose}
        className={
          open ? 'bg-navy-950/40 fixed inset-0 z-40 lg:hidden' : 'hidden'
        }
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[88vw] bg-white p-6 shadow-xl transition-transform lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={onClose}
          aria-label="Close drawer"
          className="ml-auto block"
        >
          <X />
        </button>
        {children}
      </aside>
    </>
  );
}
