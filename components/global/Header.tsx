'use client';

import Image from 'next/image';
import React from 'react';
import Search from '../home/Search';
import { useBannerQuery } from '@/hooks/queries/useBannerQuery';
import { SkeletonHeader } from '@/components/ui/skeletons';


export default function Header() {

  const { data: bannerData, isLoading } = useBannerQuery();
  
  const bannerImage = bannerData 
    ? bannerData.find(banner => banner.id === 1)?.image || ''
    : '';

  return (
    <header className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* Loading Skeleton */}
      {isLoading && (
        <SkeletonHeader className="absolute inset-0 h-full" />
      )}

      {/* Background Image */}
      {!isLoading && bannerImage && (
        <Image
          src={bannerImage}
          alt="Header background"
          fill
          className="object-fill w-full h-[80%] md:h-full"
          priority
          sizes="100vw"
        />
      )}

      <div className="absolute inset-0 z-10">
        <Search />
      </div>
  
    </header>
  );
}
