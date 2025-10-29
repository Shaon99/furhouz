
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

type Props = {
  items: { q: string; a: string }[];
  heading?: string;
  sub?: string;
};

export default function FAQ({ items, heading = "FAQ", sub = "Frequently asked questions" }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-[1350px] mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-brand">{heading}</h2>
        <p className="text-center mt-2 text-slate-600 text-xl font-medium">{sub}</p>

        <div className="mt-8 divide-y divide-slate-200 rounded-lg">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <details
                key={i}
                open={isOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(isOpen ? null : i);
                }}
                className="group"
              >
                <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between">
                  <span className="font-semibold text-xl text-black">{it.q}</span>
                  <span className="ml-4 text-black transition-transform group-open:rotate-180"><ChevronDownIcon className="w-4 h-4" /></span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-lg">{it.a}</div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
