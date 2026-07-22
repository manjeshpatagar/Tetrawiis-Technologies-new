'use client';
import type { PropsWithChildren } from 'react';
import { X } from 'lucide-react';
export function Modal({
  open,
  onClose,
  children,
}: PropsWithChildren<{ open: boolean; onClose: () => void }>) {
  if (!open) return null;
  return (
    <div
      className="bg-navy-950/60 fixed inset-0 z-50 grid place-items-center p-5"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-7 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
