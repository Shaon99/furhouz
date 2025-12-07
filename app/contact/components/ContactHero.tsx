'use client'

import Image from "next/image";
import { usePageBannerQuery } from '@/hooks/queries/usePageBannerQuery';
import { SkeletonHeader } from '@/components/ui/skeletons';

export default function ContactHero() {
  const { data: banner, isLoading } = usePageBannerQuery('contact');

  if (isLoading) {
    return (
      <div className="pt-28 pb-5 container mx-auto">
        <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto">
          <SkeletonHeader className="w-full h-full rounded-lg" />
        </section>
      </div>
    );
  }

  // fallback if fetching is done but no banner
  if (!banner) {
    return (
      <div className="pt-28 pb-5 container mx-auto">
        <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto">
          <Image
            src="/hero.jpeg"
            alt="Contact us background"
            fill
            priority
            className="object-cover object-center brightness-75 rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-12 text-center items-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-1 text-white">
              Get in touch with us
            </h1>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-5 container mx-auto">
      <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto">
        <Image
          src={banner.image || '/hero.jpeg'}
          alt={banner.title || 'Contact us background'}
          fill
          priority
          className="object-cover object-center brightness-75 rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-12 text-center items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-1 text-white">
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

