"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, FreeMode, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const DATA: Testimonial[] = [
  // ... (সঠিকভাবে তোমার আগের DATA এখানে থাকবে)
  {
    quote:
      "FurHouz’s management is very good, professional and very accommodating. As for the apartment, they provided good options according to my preference and choice of locations, and I got a great apartment by the way. Overall, their service is wonderful, I’m really happier”.",
    name: "Hamzari Sabil,",
    role: "Brunei Embassy, Dhaka.",
  },
  {
    quote:
      "Loved everything about FurHouz. The staff made me feel at home. Would definitely recommend to everyone looking for a home away from home”",
    name: "Wubin,",
    role: "Staller Technology PTE.",
  },
  {
    quote:
      "Very clean, spacious and modern furnished apartment, with everything you need for a trouble-free stay. Reliable and comfortable stay here”.",
    name: "Christian Muller,",
    role: "Germany, Businessman.",
  },
  {
    quote:
      "Apartments are comfortable, staff is very friendly and helpful. Whenever we had a specific request, the response was positive and swift. Highly recommended for your business trips or long term stay in Dhaka”.",
    name: "Johanne Eriksen Saltnes,",
    role: "Intern – Norway Embassy, Dhaka",
  },
  {
    quote:
      'Clean, well-maintained, condo in a professionally run building. Everything you need is here. I had a very nice stay here and would recommend it to anyone',
    name: "Uma Devi,",
    role: "Indian, Fichtner Consulting Engineers.",
  },
  {
    quote:
      "I had a great stay at FurHouz’s apartment. Apartment is very clean, pics are accurate. Would happily stay there again or recommend to others. Great central location in Dhaka, secure building with very helpful concierge staff, and easy to communicate with and always replied very quickly",
    name: "Raja Sockalingan,",
    role: "Singapore, IE – MRT 5.",
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="pb-24 mx-auto w-full md:w-[88%] lg:w-[85%] xl:w-[80%] max-w-[1400px]">
      {/* Heading */}
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-[2rem] lg:text-[2.3rem] xl:text-4xl pb-2 font-semibold" style={{ color: "var(--brand-500)" }}>
          Every Stay Has A Story
        </h2>
        <p className="pb-10 text-base md:text-[18px] text-gray-600 lg:text-lg xl:text-lg">
          It’s hard to explain what makes FurHouz so special. Unless, of course, you’re one of our guests.
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
          loop
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
          {DATA.map((t, i) => (
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
      `}</style>
    </section>
  );
}

function Card({ quote, name, role }: Testimonial) {
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
            font-normal opacity-95
          `}
        >
          {quote}
        </p>
        <h3
          className={`
            text-lg font-bold pt-4
            md:text-[18px] md:pt-3
            lg:text-[20px] lg:pt-4
            xl:text-xl xl:pt-5
          `}
        >
          {name}
        </h3>
        <p
          className={`
            opacity-90
            text-sm md:text-base lg:text-lg xl:text-lg
            pt-1
          `}
        >
          {role}
        </p>
      </div>
    </div>
  );
}
