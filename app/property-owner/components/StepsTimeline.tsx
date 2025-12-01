'use client';

import React from "react";
import { usePropertyOwnerDetailsQuery } from '@/hooks/queries/usePropertyOwnerDetailsQuery';
import { SkeletonText } from '@/components/ui/skeletons';

export default function StepsTimeline() {
  const { data, isLoading } = usePropertyOwnerDetailsQuery();
  const rules = data?.rules || [];

  if (isLoading) {
    return (
      <div className="lg:py-16 py-5 container mx-auto">
        <section className="bg-gray-200 rounded-lg mx-auto max-w-[1350px] w-full py-24 px-4 md:px-10">
          <div className="text-center pb-10">
            <SkeletonText width="quarter" lines={1} className="mx-auto mb-4" />
            <SkeletonText width="half" lines={1} className="mx-auto h-10" />
          </div>
          <div className="hidden md:block">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="mb-10">
                <SkeletonText width="full" lines={1} className="h-6 mb-2" />
                <SkeletonText lines={2} />
              </div>
            ))}
          </div>
          <div className="md:hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="px-6 py-6">
                <SkeletonText width="full" lines={1} className="h-8 mb-3" />
                <SkeletonText lines={2} />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (rules.length === 0) {
    return null;
  }

  const getStepColor = (index: number) => {
    return index % 2 === 0 ? 'bg-gray-400' : 'bg-brand-700';
  };

  const getTextColor = (index: number) => {
    return index % 2 === 0 ? 'text-gray-800' : 'text-white';
  };

  return (
    <div className="lg:py-16 py-5 container mx-auto">
      <section className="bg-gray-200 rounded-lg mx-auto max-w-[1350px] w-full py-24 px-4 md:px-10">
        <div className="text-center pb-10">
          <p className="text-xl tracking-[0.25em] text-gray-600">STEP-BY-STEP</p>
          <h2 className="text-3xl md:text-5xl mt-1">
            <span className="text-[#064d83] font-semibold">How to rent </span>
            your apartment to FurHouz?
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="relative wrap overflow-hidden py-6 hidden md:block">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full border-l border-gray-300/70"></div>

          {rules.map((rule, index) => {
            const isEven = index % 2 === 0;
            const bgColor = getStepColor(index);
            const textColor = getTextColor(index);
            
            return (
              <div
                key={index}
                className={`mb-10 flex justify-between items-center w-full ${!isEven ? 'flex-row-reverse' : ''}`}
              >
                <div className="order-1 w-5/12"></div>
                <div className={`z-20 flex items-center justify-center order-1 ${bgColor} shadow-xl w-8 h-8 rounded-full`}>
                  <span className="font-semibold text-sm text-white">{index + 1}</span>
                </div>
                <div className={`order-1 ${bgColor} rounded-lg shadow-xl w-5/12 px-6 py-4 ${textColor}`}>
                  <h3 className="mb-2 font-bold text-lg">
                    {rule.title}
                  </h3>
                  <p className={`text-sm leading-snug ${isEven ? 'text-gray-900/90' : 'text-white/95'}`}>
                    {rule.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden grid grid-cols-1 text-center">
          {rules.map((rule, index) => {
            const bgColor = getStepColor(index);
            return (
              <div key={index} className="px-6 py-6">
                <span className={`${bgColor} text-white inline-flex items-center justify-center w-10 h-10 rounded-full font-semibold`}>
                  {index + 1}
                </span>
                <h3 className="text-2xl py-3 font-semibold">
                  {rule.title}
                </h3>
                <p className="text-gray-700">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
