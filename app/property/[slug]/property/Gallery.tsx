"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperClass } from "swiper";
import { Property } from "../../types/property";
import Overview from "./Overview";
import Address from "./Address";
import Details from "./Details";
import FeaturesAndAmenities from "./FeaturesAndAmenities";
import EnquiryForm from "./EnquiryForm";
import RelatedAppartment from "@/components/card/RelatedAppartment";

// Always 5 thumbs per view for thumbnail slider, for all screens >= 768px
function useThumbsToShow() {
  // Fixed at 5 for all breakpoints as per instruction
  return 5;
}

// Adjust main image gallery height per md, lg, xl, 2xl and desktop
const GALLERY_HEIGHT_CSS = `
  .property-gallery-swiper-main {
    height: 260px;
    max-height: 280px;
  }
  @media (min-width: 640px) {
    .property-gallery-swiper-main {
      height: 300px;
      max-height: 340px;
    }
  }
  @media (min-width: 768px) {
    .property-gallery-swiper-main {
      height: 420px;
      max-height: 500px;
    }
  }
  @media (min-width: 1024px) {
    .property-gallery-swiper-main {
      height: 530px;
      max-height: 570px;
    }
  }
  @media (min-width: 1280px) {
    .property-gallery-swiper-main {
      height: 650px;
      max-height: 720px;
    }
  }
  @media (min-width: 1536px) {
    .property-gallery-swiper-main {
      height: 780px;
      max-height: 850px;
    }
  }
`;

// Thumb slider: increase width, decrease gap for desktop
const THUMB_RESPONSIVE_CSS = `
  @media (min-width: 1024px) {
    .thumb-slide {
      width: 138px !important;
      height: 70px !important;
      margin-right: 12px !important;
    }
  }
  @media (min-width: 1280px) {
    .thumb-slide {
      width: 158px !important;
      height: 80px !important;
      margin-right: 10px !important;
    }
  }
  @media (min-width: 1536px) {
    .thumb-slide {
      width: 190px !important;
      height: 90px !important;
      margin-right: 8px !important;
    }
  }
`;

export default function Gallery({ images, property }: { images: string[]; property: Property }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const thumbSliderRef = useRef<SwiperClass | null>(null);
  const thumbsToShow = useThumbsToShow();
  const [activeTab, setActiveTab] = useState<string>("overview");
  const isScrollingRef = useRef(false);

  const handlePrev = () => thumbSliderRef.current?.slidePrev();
  const handleNext = () => thumbSliderRef.current?.slideNext();

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    isScrollingRef.current = true;
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Reset scrolling flag after scroll completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <div className="w-full mx-auto">

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="col-span-1 xl:col-span-8">
          {/* Main gallery */}
      <div
        className="col-span-1 xl:col-span-8 rounded-2xl overflow-hidden shadow-xl border-[2.5px] border-blue-200 mb-3 relative group"
        style={{
          aspectRatio: "16/7",
          width: "100%",
          background: "linear-gradient(135deg, #fafbfe 0%, #e6f0fc 100%)"
        }}
      >
        <Swiper
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Thumbs, Autoplay]}
          spaceBetween={0}
          className="rounded-2xl w-full h-full property-gallery-swiper-main"
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
                className="object-fill w-full h-full"
                draggable={false}
                style={{
                  transition: "transform .4s",
                  borderRadius: "1rem"
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbs slider - always 5 per view, gap low, width up */}
      <div className="relative w-full mt-2 px-1 sm:px-2">
        <div className="relative">
          {images.length > thumbsToShow && (
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
              spaceBetween={6}
              className="rounded-md"
              grabCursor={true}
              breakpoints={{
                0:    { slidesPerView: Math.min(thumbsToShow, 2.1), spaceBetween: 4 },
                400:  { slidesPerView: Math.min(thumbsToShow, 4), spaceBetween: 6 },
                520:  { slidesPerView: Math.min(thumbsToShow, 4), spaceBetween: 8 },
                640:  { slidesPerView: Math.min(thumbsToShow, 5), spaceBetween: 8 },
                768:  { slidesPerView: 5,   spaceBetween: 10 },
                1024: { slidesPerView: 5,   spaceBetween: 7 },
                1280: { slidesPerView: 4,   spaceBetween: 4 },
                1536: { slidesPerView: 4,   spaceBetween: 4 },
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
                      height: "52px",
                      maxHeight: "85px",
                      minWidth: "86px",
                      background: "#fff",
                      borderRadius: "0.75rem",
                      border: "1.5px solid #e0eefa",
                      overflow: "hidden",
                      boxShadow: "0px 1.5px 7px #e0eefa60",
                      transition: "box-shadow 0.2s, border-color 0.2s, width 0.23s",
                      aspectRatio: "16/9",
                      width: "100px",
                    }}
                  >
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

      {/* Tab Navigation */}
      <div className="w-full my-6">
        <div className="flex rounded-lg bg-blue-500 p-1 overflow-x-auto">
          <button
            onClick={() => scrollToSection("overview")}
            className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-white text-blue-600 shadow-sm border border-blue-300"
                : "text-white hover:bg-blue-600"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection("address")}
            className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "address"
                ? "bg-white text-blue-600 shadow-sm border border-blue-300"
                : "text-white hover:bg-blue-600"
            }`}
          >
            Address
          </button>
          <button
            onClick={() => scrollToSection("details")}
            className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "details"
                ? "bg-white text-blue-600 shadow-sm border border-blue-300"
                : "text-white hover:bg-blue-600"
            }`}
          >
            Details
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "features"
                ? "bg-white text-blue-600 shadow-sm border border-blue-300"
                : "text-white hover:bg-blue-600"
            }`}
          >
            Features
          </button>
        </div>
      </div>

      {/* All details below gallery */}
      <div className="w-full px-0 py-6">
        <div id="overview">
          <Overview p={property} />
        </div>
        <div id="address">
          <Address p={property} />
        </div>
        <div id="details">
          <Details p={property} />
        </div>
        <div id="features">
          <FeaturesAndAmenities p={property} />
        </div>
        <EnquiryForm defaultMessage={`Hello, I am interested in [${property.id}] - ${property.title}`} />
        <div className="mt-6 xl:hidden">
          <RelatedAppartment />
        </div>
      </div>
        </div>
        <div className="col-span-1 xl:col-span-4">
          <div className="sticky top-24">
            <EnquiryForm defaultMessage={`Hello, I am interested in [${property.id}] - ${property.title}`} />
          </div>
        </div>
      </div>
       
      <div className="mt-6 hidden xl:block">
          <RelatedAppartment />
      </div>
     
      
      <style jsx global>{`
        ${GALLERY_HEIGHT_CSS}
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
