'use client';
import React, { useState, use } from 'react';
import { notFound } from 'next/navigation';
import { useAreaDetailsQuery } from '@/hooks/queries/useAreaDetailsQuery';
import Banner from '@/components/home/Banner';
import { ChevronUpIcon } from "lucide-react";
import { SkeletonText } from '@/components/ui/skeletons';

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
  const { data: areaData, isLoading, isError } = useAreaDetailsQuery(slug);

  if (isLoading) {
    return (
      <main>
        <div className="container mx-auto w-full max-w-[1350px] pt-8 pb-12">
          <SkeletonText lines={1} className="h-8 mb-8" />
          <div className="mt-6 space-y-10">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <SkeletonText lines={1} className="h-6 mb-4" />
                <SkeletonText lines={4} />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (isError || !areaData) {
    return notFound();
  }

  return (
    <main>
      <div className="container mx-auto w-full max-w-[1350px] pt-8 pb-12">
        <h1 className="text-center font-extrabold sm:text-[28px] text-[24px]" style={{ color: brandBlue }}>
          {areaData.name}
        </h1>

        <div className="mt-6 space-y-10">
          {/* Sections */}
          {areaData.sections.map((section, idx) => (
            <section key={idx}>
              {section.title && <H2>{section.title}</H2>}
              {section.content && (
                <p className="mt-4 max-w-[1350px] text-[15px] leading-7 text-gray-800 text-start whitespace-pre-line">
                  {section.content}
                </p>
              )}
            </section>
          ))}

          {/* Places to Visit */}
          {areaData.placetovisit.map((section, idx) => (
            <section key={`places-${idx}`}>
              <H2>{section.title}</H2>
              <ThreeColGrid 
                items={section.content_items.map(item => ({
                  name: item.title,
                  description: item.description || ''
                }))} 
              />
            </section>
          ))}

          {/* Restaurants */}
          {areaData.restaurants.map((section, idx) => (
            <section key={`restaurants-${idx}`}>
              <H2>{section.title}</H2>
              <ThreeColGrid 
                items={section.content_items.map(item => ({
                  name: item.title,
                  description: item.description || ''
                }))} 
              />
            </section>
          ))}

          {/* Hotels */}
          {areaData.hotels.map((section, idx) => (
            <section key={`hotels-${idx}`}>
              <H2>{section.title}</H2>
              <ThreeColGrid 
                items={section.content_items.map(item => ({
                  name: item.title,
                  description: item.description || ''
                }))} 
              />
            </section>
          ))}

          {/* Embassies */}
          {areaData.embassies.map((section, idx) => (
            <section key={`embassies-${idx}`}>
              <H2>{section.title}</H2>
              <InlineBulletList 
                items={section.content_items.map(item => item.title)} 
              />
            </section>
          ))}

          {/* Final Words */}
          {areaData.final_words && (
            <section>
              <H2>Final Words</H2>
              <p className="mt-4 max-w-[1350px] text-[15px] leading-7 text-gray-800 text-start whitespace-pre-line">
                {areaData.final_words}
              </p>
            </section>
          )}
        </div>

        {/* FAQs */}
        {areaData.faqs && areaData.faqs.length > 0 && (
          <section className="mt-16 max-w-[1350px]">
            <h2 className="text-center text-[36px] font-extrabold text-[#111]">FAQ</h2>
            <div className="mt-6 rounded-xl bg-white">
              {areaData.faqs.map((faq, i) => (
                <FaqItem
                  key={faq.question}
                  q={faq.question}
                  a={faq.answer}
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
