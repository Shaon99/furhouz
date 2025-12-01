'use client';

import { useState } from 'react';
import { usePropertyOwnerDetailsQuery } from '@/hooks/queries/usePropertyOwnerDetailsQuery';
import { SkeletonText } from '@/components/ui/skeletons';

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
  const { data, isLoading } = usePropertyOwnerDetailsQuery();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = data?.faqs || [];

  if (isLoading) {
    return (
      <section className="py-2 pb-10 container mx-auto">
        <div className="mx-auto max-w-[1350px] rounded-xl bg-gray-200 px-4 py-10 sm:px-8 md:px-12">
          <div className="text-center">
            <SkeletonText width="quarter" lines={1} className="mx-auto mb-4" />
            <SkeletonText width="half" lines={1} className="mx-auto h-10" />
          </div>
          <div className="mx-auto mt-8 divide-y divide-slate-200">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="py-6">
                <SkeletonText width="full" lines={1} className="h-8 mb-3" />
                <SkeletonText lines={2} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-2 pb-10 container mx-auto">
      <div className="mx-auto max-w-[1350px] rounded-xl bg-gray-200 px-4 py-10 sm:px-8 md:px-12">
        <div className="text-center">
          <p className="text-xl font-medium tracking-[0.25em] text-slate-500">Q&A</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-700 sm:text-5xl md:text-5xl tracking-tight">
            Common questions from property owners
          </h2>
        </div>

        <div className="mx-auto mt-8 divide-y divide-slate-200">
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
                    {item.question}
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
                    <p className="mt-3 text-slate-600 whitespace-pre-line">
                      {item.answer}
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
