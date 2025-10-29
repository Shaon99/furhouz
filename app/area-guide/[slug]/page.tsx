'use client';
import React, { useState, use } from 'react';
import { notFound } from 'next/navigation';
import DATA from '@/lib/areaData';
import Banner from '@/components/home/Banner';
import { ChevronUpIcon } from "lucide-react";

const brandBlue = '#0A4E8A';

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-center font-semibold sm:text-2xl text-xl mt-8 " style={{ color: brandBlue }}>
    {children}
  </h2>
);

const InlineBulletList = ({ items }: { items: string[] }) => (
  <p className="mt-2 max-w-[1350px] text-[15px] leading-7 text-gray-800 text-start ">
    {items.map((it, i) => (
      <span key={i}>
        {i > 0 && <span className="px-2">•</span>}
        {it}
      </span>
    ))}
  </p>
);

const ThreeColGrid = ({
  items,
}: {
  items: { name: string; description: string }[];
}) => (
  <div className="mt-6 grid gap-8 md:grid-cols-3 max-w-[1350px]">
    {items.map(({ name, description }) => (
      <article key={name} className="max-w-prose">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-[15px] leading-7 text-gray-800">{description}</p>
      </article>
    ))}
  </div>
);

const FaqItem = ({
  q,
  a,
  open,
  onClick,
}: {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
}) => (
  <div className="border-b border-gray-200 bg-white last:border-b-0 ">
    <button onClick={onClick} className="flex w-full items-center justify-between py-4 text-left">
      <span className="text-[20px] sm:text-[22px] font-bold text-[#131313]">{q}</span>
      <span className={`ml-3 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
        <ChevronUpIcon className="w-6 h-6" />
      </span>
    </button>
    {open && <div className="pb-6 pr-2 text-gray-700 text-[15px] leading-7">{a}</div>}
  </div>
);

type AreaParams = { params: Promise<{ slug: string }> };

export default function AreaGuidePage({ params }: AreaParams) {
  const { slug } = use(params);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const data = DATA[slug];
  if (!data) return notFound();

  return (
    <main>
      <div className="container mx-auto w-full max-w-[1350px] pt-8 pb-12">
        <h1 className="text-center font-extrabold sm:text-[28px] text-[24px]" style={{ color: brandBlue }}>
          {data.title}
        </h1>

        <div className="mt-6 space-y-10">
          {data.sections.map((section, idx) => {
            const items = 'items' in section ? section.items : undefined;
            const isObjectItems = Array.isArray(items) && items.length > 0 && typeof items[0] === 'object';
            const isStringItems = Array.isArray(items) && items.length > 0 && typeof items[0] === 'string';

            return (
              <section key={idx}>
                {section.heading && <H2>{section.heading}</H2>}
                {isObjectItems && <ThreeColGrid items={items as { name: string; description: string }[]} />}
                {isStringItems && <InlineBulletList items={items as string[]} />}
                {"body" in section && section.body && (
                  <p className=" mt-4 max-w-[1350px] text-[15px] leading-7 text-gray-800 text-start">
                    {section.body}
                  </p>
                )}
              </section>
            );
          })}
        </div>

        {data.faqs && data.faqs.length > 0 && (
          <section className=" mt-16 max-w-[1350px]">
            <h2 className="text-center text-[36px] font-extrabold text-[#111]">FAQ</h2>
            <div className="mt-6 rounded-xl bg-white">
              {data.faqs.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                  open={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
      <Banner />
    </main>
  );
}
