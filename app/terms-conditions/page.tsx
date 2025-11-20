'use client';

import React from 'react';
import { usePageQuery } from '@/hooks/queries/usePageQuery';
import { SkeletonText } from '@/components/ui/skeletons';

const TermsConditionsPage: React.FC = () => {
  const { data: page, isLoading, isError } = usePageQuery('terms-and-conditions');

  if (isLoading) {
    return (
      <div className="max-w-[1350px] py-10 lg:py-16 mt-12 container mx-auto">
        <div className="mb-8">
          <SkeletonText lines={1} className="h-10 mb-4" />
          <div className="mt-2">
            <span className="inline-block w-36 h-1 bg-blue-500 rounded" />
            <span className="inline-block align-middle ml-1 text-blue-500" style={{ fontWeight: 'bold' }}>··</span>
          </div>
        </div>
        <div className="space-y-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="mb-8">
              <SkeletonText lines={1} className="h-8 mb-4" />
              <SkeletonText lines={4} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError || !page) {
    return (
      <div className="max-w-[1350px] py-10 lg:py-16 mt-12 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold md:text-4xl text-gray-800">Terms and Conditions</h1>
          <div className="mt-2">
            <span className="inline-block w-36 h-1 bg-blue-500 rounded" />
            <span className="inline-block align-middle ml-1 text-blue-500" style={{ fontWeight: 'bold' }}>··</span>
          </div>
        </div>
        <p className="text-xl text-gray-600">Content not available at the moment. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1350px] py-10 lg:py-16 mt-12 container mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold md:text-4xl text-gray-800">{page.title}</h1>
        <div className="mt-2">
          <span className="inline-block w-36 h-1 bg-blue-500 rounded" />
          <span className="inline-block align-middle ml-1 text-blue-500" style={{ fontWeight: 'bold' }}>··</span>
        </div>
      </div>
      <div 
        className="prose prose-lg max-w-none text-xl text-gray-700 [&_h2]:font-semibold [&_h2]:text-3xl [&_h2]:text-gray-700 [&_h2]:mb-2 [&_h2]:mt-8 [&_p]:mb-4 [&_p]:text-xl"
        dangerouslySetInnerHTML={{ __html: page.description }}
      />
    </div>
  );
};

export default TermsConditionsPage