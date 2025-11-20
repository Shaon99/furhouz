'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useFaqQuery } from '@/hooks/queries/useFaqQuery';
import { SkeletonText } from '@/components/ui/skeletons';

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-6 w-6 transition-transform duration-200 ease-out ${open ? '-rotate-180' : ''}`}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FaqLongList() {
  const { data: faqs = [], isLoading } = useFaqQuery();
  
  // default open all (matches your last screenshot look)
  const [open, setOpen] = useState<boolean[]>(() => []);

  useEffect(() => {
    if (faqs.length > 0) {
      setOpen(faqs.map(() => true));
    }
  }, [faqs]);

  const toggle = (i: number) =>
    setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  if (isLoading) {
    return (
      <section className="py-10 sm:py-14">
        <div className="mx-auto w-full max-w-4xl px-4">
          <h2 className="mb-8 text-center text-2xl font-extrabold tracking-wide sm:text-3xl md:text-4xl">
            YOU HAVE QUESTIONS? WE HAVE ANSWERS!
          </h2>
          <div className="space-y-6">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="py-6 border-b border-neutral-200">
                <SkeletonText lines={1} className="h-8 mb-4" />
                <SkeletonText lines={3} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (faqs.length === 0) {
    return (
      <section className="py-10 sm:py-14">
        <div className="mx-auto w-full max-w-4xl px-4">
          <h2 className="mb-8 text-center text-2xl font-extrabold tracking-wide sm:text-3xl md:text-4xl">
            YOU HAVE QUESTIONS? WE HAVE ANSWERS!
          </h2>
          <p className="text-center text-neutral-600">No FAQs available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-14">
      {/* Centered narrow column, lots of whitespace like screenshot */}
      <div className="mx-auto w-full max-w-4xl px-4">
        <h2 className="mb-8 text-center text-2xl font-extrabold tracking-wide sm:text-3xl md:text-4xl">
          YOU HAVE QUESTIONS? WE HAVE ANSWERS!
        </h2>

        <ul className="divide-y divide-neutral-200">
          {faqs.map((faq, i) => (
            <li key={faq.id} className="py-6">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-start justify-between gap-6 text-left"
                aria-expanded={open[i]}
                aria-controls={`faq-a-${faq.id}`}
              >
                <h3 className="text-lg font-bold md:text-2xl text-black">{faq.question}</h3>
                <span className="mt-2 text-neutral-600">
                  <Chevron open={open[i]} />
                </span>
              </button>

              <div
                id={`faq-a-${faq.id}`}
                className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                  open[i] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div 
                    className="mt-3 text-neutral-600"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Bottom CTA block like your final screenshot */}
        <div className="mt-20 flex flex-col items-center justify-center">
          <h3 className="text-4xl font-bold text-black">Do you have any doubts?</h3>
          <p className="mt-2 text-neutral-600">
            Fill up form to get in contact with a member of the Support Team
          </p>
          <Link href="/contact">
          <button className="mt-6 w-full max-w-sm rounded-md border border-neutral-300 px-12 py-2 text-lg font-medium shadow-sm transition hover:bg-neutral-50">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
