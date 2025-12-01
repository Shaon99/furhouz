'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { useCorporateQuery } from '@/hooks/queries/useCorporateQuery';
import { SkeletonText, SkeletonImage } from '@/components/ui/skeletons';

export default function CorporateCustomerSlider() {
  const { data: corporate, isLoading } = useCorporateQuery();
  const images = corporate?.images || [];

  if (isLoading) {
    return (
      <section className="py-12 sm:py-16 container">
        <div className="mx-auto max-w-[1350px]">
          <div className="text-center">
            <SkeletonText width="half" lines={1} className="mx-auto mb-4 h-8" />
            <SkeletonText width="3/4" lines={1} className="mx-auto h-12" />
          </div>
          <div className="relative mt-10 h-[42vh] min-h-[260px] sm:h-[50vh]">
            <SkeletonImage width="100%" height="100%" className="rounded-lg" />
          </div>
        </div>
      </section>
    );
  }

  if (!corporate || images.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 container">
      <div className="mx-auto max-w-[1350px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-lg font-bold tracking-tight text-[#1e4d72]">
            CORPORATE BENEFITS
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-700 sm:text-5xl">
            Corporate customers from different companies and roles
          </h2>
        </div>

        {/* Slider */}
        <div className="relative mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            slidesPerView={1}
            loop={images.length > 1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="h-[42vh] min-h-[260px] sm:h-[50vh]"
          >
            {images.map((item, i) => (
              <SwiperSlide key={i}>
                {/* Image area */}
                <div className="relative mx-auto h-full w-full rounded-lg">
                  {item.link ? (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={item.image || '/propertyownerlast.jpg'}
                        alt={`Corporate customer ${i + 1}`}
                        fill
                        priority={i === 0}
                        className="object-cover object-center rounded-lg"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={item.image || '/propertyownerlast.jpg'}
                      alt={`Corporate customer ${i + 1}`}
                      fill
                      priority={i === 0}
                      className="object-cover object-center rounded-lg"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper default arrow/indicator styling override (blue arrows, centered dots) */}
          <style jsx global>{`
            .swiper-button-next,
            .swiper-button-prev {
              color: #1d4ed8; /* blue-600 */
              width: 44px;
              height: 44px;
            }
            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 28px;
              font-weight: 700;
            }
            .swiper-pagination-bullet {
              background: #cbd5e1; /* slate-300 */
              opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background: #1d4ed8; /* blue-600 */
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
