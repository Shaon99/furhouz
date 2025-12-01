'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePropertyOwnerDetailsQuery } from '@/hooks/queries/usePropertyOwnerDetailsQuery';
import { SkeletonImage, SkeletonText } from '@/components/ui/skeletons';

export default function BenefitsSection() {
  const { data, isLoading } = usePropertyOwnerDetailsQuery();
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const galleryImages = data?.gallery_images || [];
  const title = data?.section2_title || 'Hassle-free, profitable and no middleman';
  const description = data?.section2_short_description || 'No need to worry anymore with finding and screening new tenants, property vacancy, renovation or damage hassles or dealing with brokers — leave it all to us!\n\nJust relax, sit back and collect your rent!';

  if (isLoading) {
    return (
      <section className="py-12 sm:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-10">
            <div className="max-w-xl w-full order-1 mb-4 md:mb-0 md:order-1">
              <SkeletonText width="half" lines={1} className="mb-4" />
              <SkeletonText width="full" lines={1} className="h-8 mb-6" />
              <SkeletonText lines={3} />
            </div>
            <div className="w-full order-2 md:order-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SkeletonImage key={i} width="100%" height={200} className="rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const displayImages = galleryImages.length > 0 
    ? galleryImages.slice(0, 5)
    : Array(5).fill(null).map((_, i) => ({ id: i, image_path: '/placeholder.png' }));

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-10">
          <div className="max-w-xl w-full order-1 mb-4 md:mb-0 md:order-1">
            <p className="text-xs font-medium tracking-widest text-slate-500">
              BENEFITS FOR PROPERTY OWNERS IN Gulshan, Banani, Baridhara and Basundhara
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-800 sm:text-4xl">
              <span className="text-brand font-bold">{title.split(' and ')[0]},</span>{' '}
              {title.split(' and ').slice(1).join(' and ')}
            </h2>

            <div className="mt-6 text-slate-600 whitespace-pre-line">
              {description}
            </div>
          </div>

          <div className="w-full order-2 md:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {displayImages.slice(0, 2).map((img, i) => {
                const imageSrc = failedImages.has(img.id) ? '/placeholder.png' : (img.image_path || '/placeholder.png');
                return (
                  <figure key={img.id || i} className="relative col-span-1 sm:col-span-1 md:col-span-3 aspect-[16/11] overflow-hidden rounded-xl">
                    <Image
                      src={imageSrc}
                      alt={`Gallery image ${i + 1}`}
                      fill
                      className="object-cover"
                      priority={i === 0}
                      onError={() => setFailedImages(prev => new Set(prev).add(img.id))}
                    />
                  </figure>
                );
              })}

              <div className="col-span-2 sm:col-span-3 md:col-span-6 flex gap-2">
                {displayImages.slice(2, 5).map((img, i) => {
                  const imageSrc = failedImages.has(img.id) ? '/placeholder.png' : (img.image_path || '/placeholder.png');
                  return (
                    <figure key={img.id || i + 2} className="relative flex-1 aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={imageSrc}
                        alt={`Gallery image ${i + 3}`}
                        fill
                        className="object-cover"
                        onError={() => setFailedImages(prev => new Set(prev).add(img.id))}
                      />
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
