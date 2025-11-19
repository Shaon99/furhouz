'use client';

import React from 'react';
import { useHomepageContentQuery } from '@/hooks/queries/useHomepageContentQuery';
import { SkeletonText } from '@/components/ui/skeletons';

const FurnishedAppartment = () => {
  const { data, isLoading } = useHomepageContentQuery();

  const section1 = data?.main?.[0];
  const section2 = data?.main?.[1];

  if (isLoading) {
    return (
      <section className="py-2 lg:py-12 bg-white text-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <SkeletonText width="half" lines={1} className="mx-auto h-10" />
          </div>
          <div className="space-y-4">
            <SkeletonText lines={3} />
            <SkeletonText lines={2} />
          </div>
          <div className="text-center mt-14 mb-6">
            <SkeletonText width="half" lines={1} className="mx-auto h-10" />
          </div>
          <div className="space-y-4">
            <SkeletonText lines={3} />
            <SkeletonText lines={2} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-2 lg:py-12 bg-white text-gray-800">
      <div className="container mx-auto">
        {/* Section 1 */}
        {section1 && (
          <>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand">
                {section1.title}
              </h2>
            </div>
            <div className="space-y-4 text-justify leading-relaxed text-gray-700 whitespace-pre-line">
              {section1.description}
            </div>
          </>
        )}

        {/* Section 2 */}
        {section2 && (
          <>
            <div className="text-center mt-14 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-brand">
                {section2.title}
              </h2>
            </div>
            <div className="space-y-4 text-justify leading-relaxed text-gray-700 whitespace-pre-line">
              {section2.description}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FurnishedAppartment;