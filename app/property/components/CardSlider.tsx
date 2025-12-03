"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useMemo, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CardSlider({ images, slug }: { images: string[]; slug: string }) {
  // Use slug-based stable ID instead of Math.random() to prevent hydration mismatch
  const uniqueId = useMemo(() => {
    return slug ? slug.replace(/[^a-z0-9]/gi, '').substring(0, 9) || 'default' : 'default';
  }, [slug]);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const isNavigatingRef = useRef(false);

  // Fast navigation handler - works on first click
  const handleNavigate = useCallback((e: React.MouseEvent) => {
    // Prevent if clicking on navigation buttons or pagination
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('.swiper-pagination')) {
      return;
    }

    // Prevent multiple navigations
    if (isNavigatingRef.current) {
      return;
    }

    isNavigatingRef.current = true;
    
    // Use Next.js router for fast client-side navigation
    // This prevents page reload and ensures smooth navigation
    router.push(`/property/${slug}`);
    
    // Reset after navigation starts
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1000);
  }, [slug, router]);

  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        loop
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Set navigation elements after swiper is ready
          if (prevButtonRef.current && nextButtonRef.current && swiper.navigation) {
            try {
              if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
                const navParams = swiper.params.navigation as { prevEl?: HTMLElement | string | null; nextEl?: HTMLElement | string | null };
                navParams.prevEl = prevButtonRef.current;
                navParams.nextEl = nextButtonRef.current;
                swiper.navigation.update();
              }
            } catch {
              // Handle error silently
            }
          }
        }}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        speed={400}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet-${uniqueId}`,
          bulletActiveClass: `swiper-pagination-bullet-active-${uniqueId}`
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
        preventClicks={false}
        preventClicksPropagation={false}
        simulateTouch={true}
        touchEventsTarget="container"
        noSwiping={false}
        noSwipingClass="swiper-no-swiping"
        className="rounded-xl overflow-hidden shadow-xl"
      >
        {(images && images.length > 0 ? images : ['/placeholder.png']).map((src, i) => {
          // Use placeholder if image failed to load, is empty, null, or undefined
          const imageSrc = failedImages.has(i) || !src || src.trim() === '' || src === 'null' || src === 'undefined' 
            ? '/placeholder.png' 
            : src;
          return (
            <SwiperSlide 
              key={i}
              onClick={handleNavigate}
              style={{ cursor: 'pointer' }}
            >
              <div className="relative aspect-[16/12] w-full overflow-hidden bg-slate-100">
                <Image
                  src={imageSrc}
                  alt={`Property image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
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
        className="absolute left-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-white/95 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-2xl border border-white/20"
        style={{ pointerEvents: "auto" }}
        onClick={(e) => e.stopPropagation()}
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
        className="absolute right-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-white/95 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-2xl border border-white/20"
        style={{ pointerEvents: "auto" }}
        onClick={(e) => e.stopPropagation()}
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
