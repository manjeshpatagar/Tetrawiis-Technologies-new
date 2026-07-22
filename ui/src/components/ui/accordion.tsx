'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
export function Accordion({
  items,
}: {
  items: ReadonlyArray<{ title: string; content: string }>;
}) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y rounded-2xl border bg-white">
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            className="text-navy-950 flex w-full items-center justify-between p-5 text-left font-semibold"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            {item.title}
            <ChevronDown
              className={
                open === index ? 'rotate-180 transition' : 'transition'
              }
              size={18}
            />
          </button>
          {open === index && (
            <p className="px-5 pb-5 leading-7 text-slate-600">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
