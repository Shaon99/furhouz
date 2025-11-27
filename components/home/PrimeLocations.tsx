"use client";

import React from "react";
import { useHomepageContentQuery } from '@/hooks/queries/useHomepageContentQuery';
import { SkeletonText } from '@/components/ui/skeletons';

export default function PrimeLocations() {
  const { data, isLoading } = useHomepageContentQuery();

  const locationData = data?.locations?.[0];
  const cards = locationData?.content_items || [];
  const footerDescription = data?.main?.find((item) => item.id === 7)?.description || "";

  if (isLoading) {
    return (
      <section className="mb-10 text-gray-800">
        <div className="container mx-auto text-gray-800">
          <div className="text-center">
            <SkeletonText width="half" lines={1} className="mx-auto h-10" />
          </div>
          <div className="mt-4">
            <SkeletonText lines={2} />
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-white p-6 md:p-8 shadow-xl">
                <SkeletonText width="quarter" lines={1} className="h-6 mb-2" />
                <SkeletonText lines={4} />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <SkeletonText lines={3} />
          </div>
        </div>
      </section>
    );
  }

  if (!locationData) {
    return null;
  }

  return (
    <section className="mb-10 text-gray-800">
      <div className="container mx-auto text-gray-800">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-brand">
          {locationData.title}
        </h2>

        {/* Intro */}
        <p className="mt-4 leading-relaxed text-black text-justify md:text-start">
          {locationData.description}
        </p>

        {/* Cards */}
        {cards.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card, i) => (
              <article
                key={i}
                className="rounded-xl bg-white p-6 md:p-8 text-black w-full h-full flex flex-col justify-between shadow-xl"
              >
                <h3 className="text-xl font-semibold text-[#0f4c81]">
                  {card.title}
                </h3>
                <p className="mt-1 leading-relaxed text-black text-justify text-sm pb-2">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        )}

        {/* Footer paragraph */}
        {footerDescription && (
          <p className="mt-10 leading-relaxed text-black text-sm text-justify md:text-start">
            {footerDescription}
          </p>
        )}
      </div>
    </section>
  );
}
