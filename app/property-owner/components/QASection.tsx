'use client';

import { useState } from 'react';

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: 'What are the fees for using FurHouz?',
    a: `We require an on-boarding period, depending on the status of the property.
This will allows us to make any needed repairs or upgrades and furnish the home.`,
  },
  {
    q: 'Is rent guaranteed?',
    a: `Yes. No matter what. If the property is vacant, FurHouz will still pay you on-time every month
for your entire contract term. We directly deposit rent into your bank account.`,
  },
  {
    q: 'What maintenance does FurHouz cover?',
    a: `FurHouz will cover any resident damage at no cost to the owner. For issues caused by age,
deferred maintenance, or catastrophic event, FurHouz will repair or oversee repairs at the expense of the owner.`,
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-6 w-6 shrink-0 transition-transform duration-200 font-bold ${
        open ? '-rotate-180' : 'rotate-0'
      } text-slate-500`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function QASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first one open (like screenshot)

  return (
    <section className="py-2 pb-10 container mx-auto">
      <div className="mx-auto max-w-[1350px] rounded-xl bg-gray-200 px-4 py-10 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center">
          <p className="text-xl font-medium tracking-[0.25em] text-slate-500">Q&A</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-700 sm:text-5xl md:text-5xl tracking-tight">
            Common questions from property owners
          </h2>
        </div>

        {/* FAQ list */}
        <div className="mx-auto mt-8  divide-y divide-slate-200">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="group flex w-full items-start justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <h3 className="text-xl font-semibold text-slate-700 sm:text-3xl">
                    {item.q}
                  </h3>
                  <span className="mt-1">
                    <Chevron open={isOpen}/>
                  </span>
                </button>

                <div
                  id={`faq-panel-${idx}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 text-slate-600">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
