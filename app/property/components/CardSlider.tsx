"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { useRef, useMemo, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CardSlider({ images, slug }: { images: string[]; slug: string }) {
  const uniqueId = useMemo(() => Math.random().toString(36).substr(2, 9), []);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const swiperRef = useRef<any>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (swiperRef.current?.params?.navigation && prevButtonRef.current && nextButtonRef.current) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation?.destroy();
      swiperRef.current.navigation?.init();
      swiperRef.current.navigation?.update();
    }
  }, [uniqueId]);

  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        loop
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        speed={600} // smoother transition speed
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet-${uniqueId}`,
          bulletActiveClass: `swiper-pagination-bullet-active-${uniqueId}`
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="rounded-xl overflow-hidden shadow-xl"
      >
        {(images.length > 0 ? images : ['/placeholder.png']).map((src, i) => {
          const imageSrc = failedImages.has(i) ? '/placeholder.png' : src;
          return (
            <SwiperSlide key={i}>
              <div className="relative aspect-[16/12] w-full overflow-hidden bg-slate-100">
                <Link
                  href={`/property/${slug}`}
                  className="absolute inset-0 z-10"
                  aria-label="View property details"
                  style={{ pointerEvents: "auto" }}
                />
                <Image
                  src={imageSrc}
                  alt={`Property image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width:1280px) 280px, (min-width:768px) 33vw, 100vw"
                  priority={i === 0}
                  onError={() => setFailedImages(prev => new Set(prev).add(i))}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation buttons fixed for smoother sliding */}
      <button
        ref={prevButtonRef}
        type="button"
        tabIndex={0}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/95 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-2xl border border-white/20"
        style={{ pointerEvents: "auto" }}
      >
        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        ref={nextButtonRef}
        type="button"
        tabIndex={0}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/95 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-2xl border border-white/20"
        style={{ pointerEvents: "auto" }}
      >
        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style jsx global>{`
        .swiper-pagination-bullet-${uniqueId} {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.6);
          opacity: 1;
          margin: 0 5px;
          transition: all 0.3s ease;
          border-radius: 50%;
        }
        .swiper-pagination-bullet-active-${uniqueId} {
          background: white;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
        .swiper-pagination {
          bottom: 16px !important;
        }
      `}</style>
    </div>
  );
}
