"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperClass } from "swiper";
import { Property } from "../../types/property";
import Overview from "./Overview";
import Address from "./Address";
import Details from "./Details";
import FeaturesAndAmenities from "./FeaturesAndAmenities";
import EnquiryForm from "./EnquiryForm";
import RelatedAppartment from "@/components/card/RelatedAppartment";

// --- Responsive thumbs per view, improved for fluid mobile ---
function useDynamicThumbsToShow(imagesLength: number) {
  const [thumbsToShow, setThumbsToShow] = useState(4);
  useEffect(() => {
    const update = () => {
      let base = 4;
      const w = typeof window !== "undefined" ? window.innerWidth : 1280;
      if (w < 400) base = Math.min(2.1, imagesLength);
      else if (w < 520) base = Math.min(2.7, imagesLength);
      else if (w < 640) base = Math.min(3.5, imagesLength);
      else if (w < 768) base = Math.min(4, imagesLength);
      else if (w < 1024) base = Math.min(5, imagesLength);
      else if (w < 1280) base = Math.min(7, imagesLength);
      else {
        // LG, XL, desktop: keep same logic but allow fewer visible thumbs for easier gap control
        if (imagesLength <= 7) base = imagesLength;
        else if (imagesLength < 10) base = 4;
        else if (imagesLength < 13) base = 5;
        else if (imagesLength < 16) base = 6;
        else base = 6.5;
      }
      setThumbsToShow(Math.max(1, base));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [imagesLength]);
  return thumbsToShow;
}

// Moved thumb responsive CSS outside JSX, for Next.js compatibility
// Must be global in the file
const THUMB_RESPONSIVE_CSS = `
  @media (min-width: 1024px) {
    .thumb-slide {
      width: 115px !important;
      height: 65px !important;
    }
  }
  @media (min-width: 1280px) {
    .thumb-slide {
      width: 135px !important;
      height: 75px !important;
    }
  }
  @media (min-width: 1536px) {
    .thumb-slide {
      width: 165px !important;
      height: 90px !important;
    }
  }
`;

export default function Gallery({ images, property }: { images: string[]; property: Property }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const thumbSliderRef = useRef<SwiperClass | null>(null);
  const thumbsToShow = useDynamicThumbsToShow(images.length);

  const handlePrev = () => thumbSliderRef.current?.slidePrev();
  const handleNext = () => thumbSliderRef.current?.slideNext();

  return (
    <div className="w-full container mx-auto">
      {/* Main gallery */}
      <div
        className="rounded-2xl overflow-hidden shadow-xl border-[2.5px] border-blue-200 mb-3 relative group"
        style={{
          aspectRatio: "16/7",
          width: "100%",
          maxHeight: 460,
          background: "linear-gradient(135deg, #fafbfe 0%, #e6f0fc 100%)"
        }}
      >
        <Swiper
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Thumbs, Autoplay]}
          spaceBetween={0}
          className="rounded-2xl w-full h-full"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="w-full h-full">
              <Image
                src={src}
                alt={`Property image ${i + 1}`}
                fill
                priority={i === 0}
                className="object-fill w-full h-full md:h-[650px] "
                draggable={false}
                style={{ transition: "transform .4s", borderRadius: "1rem" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbs slider: fully responsive, fixes mobile overflow */}
      <div className="relative w-full mt-2 px-1 sm:px-2">
        <div className="relative">
          {images.length > Math.round(thumbsToShow || 5) && (
            <>
              <button
                onClick={handlePrev}
                className="absolute z-20 left-0 top-1/2 -translate-y-1/2 bg-blue-50 hover:bg-blue-100 shadow-lg rounded-full p-2 transition-all duration-200 outline-blue-300 border border-blue-200"
                aria-label="Previous thumbnails"
                type="button"
                style={{ boxShadow: "0 2px 8px rgba(70,180,255,0.14)" }}
              >
                <ChevronLeft className="w-5 h-5 text-blue-700" />
              </button>
              <button
                onClick={handleNext}
                className="absolute z-20 right-0 top-1/2 -translate-y-1/2 bg-blue-50 hover:bg-blue-100 shadow-lg rounded-full p-2 transition-all duration-200 outline-blue-300 border border-blue-200"
                aria-label="Next thumbnails"
                type="button"
                style={{ boxShadow: "0 2px 8px rgba(70,180,255,0.14)" }}
              >
                <ChevronRight className="w-5 h-5 text-blue-700" />
              </button>
            </>
          )}

          <div className="relative pl-8 pr-8 sm:pl-10 sm:pr-10">
            <Swiper
              modules={[FreeMode, Thumbs]}
              watchSlidesProgress
              onSwiper={(sw) => {
                setThumbsSwiper(sw);
                thumbSliderRef.current = sw;
              }}
              freeMode
              slideToClickedSlide
              centeredSlides={false}
              slidesPerView={thumbsToShow}
              // Reduce gap (spaceBetween) in lg/xl, increase slide width by CSS
              spaceBetween={8}
              className="rounded-md"
              grabCursor={true}
              breakpoints={{
                0:    { slidesPerView: Math.min(thumbsToShow, 2.1), spaceBetween: 4 },
                400:  { slidesPerView: Math.min(thumbsToShow, 2.5), spaceBetween: 6 },
                520:  { slidesPerView: Math.min(thumbsToShow, 3.2), spaceBetween: 8 },
                640:  { slidesPerView: Math.min(thumbsToShow, 3.5), spaceBetween: 10 },
                768:  { slidesPerView: Math.min(thumbsToShow, 4),   spaceBetween: 14 },
                1024: { slidesPerView: Math.min(thumbsToShow, 5),   spaceBetween: 14 },
                1280: { slidesPerView: Math.min(thumbsToShow, 4.9), spaceBetween: 12 }, // desktop: wider, less gap
                1536: { slidesPerView: Math.min(thumbsToShow, 4.5), spaceBetween: 10 }, // xl: wider, even less gap
              }}
              style={{
                minHeight: 60,
                paddingTop: 4,
                paddingBottom: 10,
                paddingLeft: 4,
                paddingRight: 4,
              }}
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="thumb-slide mx-auto flex items-center justify-center"
                    style={{
                      // Dynamic width for lg/xl (desktop), keeping default for base/sm
                      height: "52px",
                      maxHeight: "70px",
                      minWidth: "86px",
                      background: "#fff",
                      borderRadius: "0.75rem",
                      border: "1.5px solid #e0eefa",
                      overflow: "hidden",
                      boxShadow: "0px 1.5px 7px #e0eefa60",
                      transition: "box-shadow 0.2s, border-color 0.2s, width 0.23s",
                      aspectRatio: "16/9",
                      // Increase width for large screens
                      width: "92px",
                    }}
                  >
                    {/* Global responsive .thumb-slide styles are now applied below */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      className="object-cover w-full h-full transition-transform duration-200"
                      draggable={false}
                      loading={i > 2 ? "lazy" : "eager"}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "0.60rem",
                        border: "2.5px solid transparent",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* All details below gallery */}
      <div className="w-full px-0 py-6">
        <Overview p={property} />
        <Address p={property} />
        <Details p={property} />
        <FeaturesAndAmenities p={property} />
        <EnquiryForm defaultMessage={`Hello, I am interested in [${property.id}] - ${property.title}`} />
        <div className="mt-6">
          <RelatedAppartment />
        </div>
      </div>
      
      <style jsx global>{`
        ${THUMB_RESPONSIVE_CSS}
        .swiper-slide-thumb-active .thumb-slide {
          border-color: #0ea5e9 !important; /* blue-500 */
          box-shadow: 0 0 0 2px #0ea5e933;
        }
        .thumb-slide:hover img {
          transform: scale(1.055);
        }
        @media (max-width: 640px) {
          .thumb-slide {
            height: 48px !important;
            min-height: 38px;
            width: 70px !important;
            min-width: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}
