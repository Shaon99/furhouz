"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, FreeMode, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useTestimonialQuery } from "@/hooks/queries/useTestimonialQuery";
import { SkeletonCard } from "@/components/ui/skeletons";

export default function TestimonialsSlider() {
  const { data, isLoading } = useTestimonialQuery();

  if (isLoading) {
    return (
      <section className="pb-24 mx-auto w-full md:w-[88%] lg:w-[85%] xl:w-[80%] max-w-[1400px]">
        <div className="container mx-auto">
          <div className="h-12 w-64 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-gray-200 rounded mb-10 animate-pulse" />
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <SkeletonCard key={i} showImage={false} lines={4} className="h-[400px]" />
          ))}
        </div>
      </section>
    );
  }

  if (!data || data.length === 0) return null;

  const testimonials = data.map((t) => ({
    quote: t.description || t.message || t.designation || "",
    name: t.name,
    role: t.designation || "",
  }));

  return (
    <section className="pb-24 mx-auto w-full md:w-[88%] lg:w-[85%] xl:w-[80%] max-w-[1400px]">
      {/* Heading */}
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-[2rem] lg:text-[2.3rem] xl:text-4xl pb-2 font-semibold" style={{ color: "var(--brand-500)" }}>
          Every Stay Has A Story
        </h2>
        <p className="pb-10 text-base md:text-[18px] text-gray-600 lg:text-lg xl:text-lg">
          It&apos;s hard to explain what makes FurHouz so special. Unless, of course, you&apos;re one of our guests.
        </p>
      </div>

      {/* Slider */}
      <div className="container mx-auto relative">
        {/* <-- Custom navigation buttons (rounded, responsive) --> */}
        <button
          aria-label="Previous slide"
          className="my-swiper-prev absolute left-1 top-[45%] -translate-y-1/2 z-20 rounded-full shadow-md flex items-center justify-center bg-brand-600 hover:scale-105 transition-transform p-2 md:p-3 lg:p-3 focus:outline-none"
          style={{ backdropFilter: "blur(4px)" }}
        >
          {/* left arrow (rotate) */}
          <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </button>

        <button
          aria-label="Next slide"
          className="my-swiper-next absolute right-1 top-[45%] -translate-y-1/2 z-20 rounded-full shadow-md flex items-center justify-center bg-brand-600 hover:scale-105 transition-transform p-2 md:p-3 lg:p-3 focus:outline-none"
          style={{ backdropFilter: "blur(4px)" }}
        >
          {/* right arrow (original) */}
          <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </button>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, FreeMode, A11y]}
          slidesPerView={3}
          spaceBetween={40}
          centeredSlides
          loop={testimonials.length > 1}
          freeMode
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          // use our custom selector classes for navigation
          navigation={{ nextEl: ".my-swiper-next", prevEl: ".my-swiper-prev" }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16, centeredSlides: true },
            500: { slidesPerView: 1, spaceBetween: 18, centeredSlides: true },
            640: { slidesPerView: 1, spaceBetween: 22, centeredSlides: true },
            768: { slidesPerView: 2, spaceBetween: 28, centeredSlides: true },
            900: { slidesPerView: 2, spaceBetween: 34, centeredSlides: true },
            1024: { slidesPerView: 2.5, spaceBetween: 32, centeredSlides: true },
            1200: { slidesPerView: 3, spaceBetween: 38, centeredSlides: true },
            1280: { slidesPerView: 3, spaceBetween: 40, centeredSlides: true },
            1536: { slidesPerView: 3, spaceBetween: 40, centeredSlides: true },
          }}
          className="mySwiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="flex" style={{ height: "100%" }}>
              <Card {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* bullet color tune */}
      <style jsx global>{`
        .mySwiper .swiper-pagination-bullet {
          opacity: 1;
          background: #2b7fcd; /* light brand dot */
        }
        .mySwiper .swiper-pagination-bullet-active {
          background: #064d83; /* main brand */
        }
        .mySwiper {
          padding-bottom: 50px; /* make sure bullets don't overlap */
        }

        /* make the built-in swiper navigation hidden because we use our custom buttons */
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }

        /* Ensure all text inside testimonial cards is white */
        .mySwiper .swiper-slide p,
        .mySwiper .swiper-slide h3,
        .mySwiper .swiper-slide p *,
        .mySwiper .swiper-slide span,
        .mySwiper .swiper-slide div {
          color: white !important;
        }
      `}</style>
    </section>
  );
}

function Card({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center text-center
        text-white
        rounded-[0.75rem] rounded-br-[70px] sm:rounded-br-[110px] md:rounded-br-[120px] lg:rounded-br-[130px]
        mx-auto
        px-4 xs:px-6 sm:px-6 md:px-6 lg:px-7 xl:px-8
        pt-12 pb-14
        h-[420px] xs:h-[450px]
        md:h-[350px] lg:h-[390px] xl:h-[440px] 2xl:h-[470px]
        w-full max-w-[400px] sm:max-w-[460px] md:max-w-[390px] lg:max-w-[410px] xl:max-w-[440px]
        container
      `}
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-500) 90%, black 0%)",
        minWidth: 0,
        margin: "0 auto"
      }}
    >
      <div className="max-w-[52ch] mx-auto w-full">
        <p
          className={`
            text-[18px] leading-[28px] xs:text-[19px] xs:leading-[30px]
            md:text-[17px] md:leading-[27px]
            lg:text-[19px] lg:leading-[30px]
            xl:text-[20px] xl:leading-[32px]
            font-normal text-white
          `}
          style={{ color: 'white' }}
          dangerouslySetInnerHTML={{ __html: quote }}
        />
        <h3
          className={`
            text-lg font-bold pt-4 text-white
            md:text-[18px] md:pt-3
            lg:text-[20px] lg:pt-4
            xl:text-xl xl:pt-5
          `}
          style={{ color: 'white' }}
        >
          {name}
        </h3>
        <p
          className={`
            text-white
            text-sm md:text-base lg:text-lg xl:text-lg
            pt-1
          `}
          style={{ color: 'white' }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}
