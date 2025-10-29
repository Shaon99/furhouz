'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

const slides = [
  { src: '/propertyownerlast.jpg', alt: 'Banani corporate customers' },
  { src: '/propertyownerlast.jpg', alt: 'Baridhara corporate customers' },
  { src: '/propertyownerlast.jpg', alt: 'Bashundhara corporate customers' },
];

export default function CorporateCustomerSlider() {
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
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="h-[42vh] min-h-[260px] sm:h-[50vh]"
          >
            {slides.map((s, i) => (
              <SwiperSlide key={i}>
                {/* Image area */}
                <div className="relative mx-auto h-full w-full rounded-lg">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    priority={i === 0}
                    className="object-cover object-center rounded-lg"
                  />
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
