'use client'

import Image from "next/image";
import { usePageBannerQuery } from '@/hooks/queries/usePageBannerQuery';
import { SkeletonHeader } from '@/components/ui/skeletons';

export default function FAQHero() {
  const { data: banner, isLoading } = usePageBannerQuery('faq');

  if (isLoading) {
    return (
      <div className="pt-28 pb-5 container">
        <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto">
          <SkeletonHeader className="w-full h-full rounded-md" />
        </section>
      </div>
    );
  }

  if (!banner) {
    return null;
  }

  return (
    <div className="pt-28 pb-5 container">
        <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto">
      <Image
        src={banner.image || '/hero.jpeg'}
        alt={banner.title || 'FAQ background'}
        fill
        priority
        className="object-cover object-center brightness-75 rounded-md"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <p className="text-sm sm:text-lg font-medium text-gray-200 tracking-wider">
          Frequently asked questions
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-bold">
          {banner.title}
        </h1>
        {banner.subtitle && (
          <p className="mt-4 text-sm sm:text-lg text-gray-200 max-w-2xl font-medium">
            {banner.subtitle}
          </p>
        )}
      </div>
    </section>
    </div>
  );
}
