'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePropertyOwnerDetailsQuery } from '@/hooks/queries/usePropertyOwnerDetailsQuery'
import { SkeletonImage, SkeletonText } from '@/components/ui/skeletons'

const PropertyHero = () => {
  const { data, isLoading } = usePropertyOwnerDetailsQuery();
  const [imageError, setImageError] = useState(false);

  if (isLoading) {
    return (
      <section className="w-full min-h-[350px] flex justify-center items-center py-10 mt-16 lg:mt-20 container mx-auto">
        <div className="relative w-full max-w-[1350px] container min-h-[330px] h-[330px] md:h-[470px] lg:h-[100vh] flex items-center mx-auto overflow-hidden rounded-lg">
          <SkeletonImage width="100%" height="100%" className="rounded-lg" />
          <div className="absolute left-0 top-0 h-full flex flex-col justify-center pl-8 pr-4 py-12 sm:py-16 max-w-[650px] min-w-[320px] w-full">
            <SkeletonText width="full" lines={1} className="h-12 mb-4" />
            <SkeletonText width="full" lines={2} className="mb-7" />
            <div className="h-12 w-56 bg-slate-200 rounded" />
          </div>
        </div>
      </section>
    );
  }

  const heroImage = data?.section1_image || '/placeholder.png';
  const title = data?.section1_title || 'Collect rent on time and your apartment renovated';
  const description = data?.section1_short_description || 'We will rent it from you, renovate and transform it into a beautifully designed and fully furnished apartment.';

  return (
    <section
      className="w-full min-h-[350px] flex justify-center items-center py-10 mt-16 lg:mt-20 container mx-auto"
      style={{ position: "relative" }}
    >
      <div className="relative w-full max-w-[1350px] container min-h-[330px] h-[330px] md:h-[470px] lg:h-[100vh] flex items-center mx-auto overflow-hidden">
        <Image
          src={imageError ? '/placeholder.png' : heroImage}
          alt="Banner"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 1400px"
          className="object-cover object-center rounded-lg"
          onError={() => setImageError(true)}
        />

        <div className="absolute left-0 top-0 h-full flex flex-col justify-center pl-8 pr-4 py-12 sm:py-16 max-w-[650px] min-w-[320px] w-full">
          <h1
            className="text-[2rem] md:text-[2.9rem] font-bold leading-tight mb-2 tracking-tight"
            style={{ fontFamily: "var(--font-sans,inherit)" }}
          >
            <span className="text-[#16587C]">
              {title.split(' and ')[0]}
            </span>{" "}
            <span className="text-black">
              and <br />
              {title.split(' and ')[1] || 'your apartment renovated'}
            </span>
          </h1>
          <p className="text-[1rem] mb-7 max-w-[560px] leading-snug text-black tracking-tight">
            {description}
          </p>
          <Link
            href="/get-request"
            className="inline-block px-8 py-4 rounded w-56 bg-white text-black text-[15px] font-medium transition-colors shadow"
            style={{
              minWidth: 120,
              textAlign: "center",
              boxShadow: "0 1px 8px 0 #ebf3ff"
            }}
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PropertyHero