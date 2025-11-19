"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import { useHomepageContentQuery } from '@/hooks/queries/useHomepageContentQuery';
import { SkeletonText } from '@/components/ui/skeletons';
import "swiper/css";
import "swiper/css/navigation";

function FacilitySlider({ features }: { features: Array<{ title: string; description: string }> }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.map((item, i) => (
          <article key={i}>
            <h3 className="font-bold text-lg text-black">{item.title}</h3>
            <p className="mt-2 text-black leading-relaxed text-justify text-sm">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-3 flex flex-col items-center">
      <div className="w-full max-w-md px-4 relative">
        {/* Normal simple chevron buttons */}
        <button
          className=" absolute top-1/2 -left-3 z-10 -translate-y-1/2"
          aria-label="Previous Slide"
          type="button"
        >
          <ChevronLeft size={40} className="text-blue-600" />
        </button>
        <button
          className=" absolute top-1/2 -right-3 z-10 -translate-y-1/2"
          aria-label="Next Slide"
          type="button"
        >
          <ChevronRight size={40} className="text-blue-600"/>
        </button>

        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={features.length > 1}
          className="relative"
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-center px-4 py-4 min-h-[220px] w-full flex flex-col justify-center">
                <h3 className="font-bold text-lg text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-black text-[15px] text-justify leading-relaxed">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default function SpecialFacilities() {
  const { data, isLoading } = useHomepageContentQuery();

  const section3 = data?.main?.[2];
  const facilities = data?.facilities?.[0]?.content_items || [];

  if (isLoading) {
    return (
      <section className="mb-10 bg-white text-gray-800">
        <div className="container mx-auto">
          <div className="text-center">
            <SkeletonText width="half" lines={1} className="mx-auto h-10" />
          </div>
          <div className="mt-4">
            <SkeletonText lines={2} />
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <SkeletonText width="quarter" lines={1} className="h-6 mb-2" />
                <SkeletonText lines={3} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-10 bg-white text-gray-800">
      <div className="container mx-auto">
        {section3 && (
          <>
            <h2 className="text-center text-2xl md:text-3xl font-bold text-brand">
              {section3.title}
            </h2>

            <p className="mt-4 text-justify leading-relaxed text-black text-sm whitespace-pre-line">
              {section3.description}
            </p>
          </>
        )}

        {facilities.length > 0 && <FacilitySlider features={facilities} />}

        <div className="mt-10 text-center">
          <h3 className="font-bold text-lg text-black">Gym &amp; Fitness</h3>
        </div>

        <div className="mt-4 space-y-6 text-black leading-relaxed">
          <p className="text-justify text-sm">
            Are you a health-conscious person? Renting a furnished apartment in
            Dhaka will inspire you to stay fit. Are you wondering how is that
            possible? Alright, mostly furnished apartments offer fitness
            facilities. You can expect to have a gym or and swimming pool. These
            amenities can make it easy to maintain a healthy lifestyle.
          </p>

          <p className="text-justify text-sm">
            Is there still any doubt left in your mind about why you should rent
            a furnished apartment in Dhaka? If you have any rental queries, feel
            free to contact us. Our support team will assist you to make the
            best decision. However, you might be thinking about the location.
            Let me inform you of 3 prime locations that you can choose according
            to your convenience.
          </p>
        </div>
      </div>
    </section>
  );
}
