"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FEATURES = [
  {
    title: "Furniture",
    content: `This is the most obvious feature of a furnished apartment. From the living room to the bedroom, you'll find everything you need to live comfortably. This includes sofas, chairs, tables, beds, dressers, and more. Are you thinking about the quality of that furniture? Well, those types of furniture are usually high-quality, functional, and stylish.`,
  },
  {
    title: "Appliances",
    content: `Fully furnished apartments come with a wide range of home appliances. It includes a refrigerator, stove, microwave, dishwasher, washer, and dryer. Having these appliances in your newly rented house will save you a decent amount of money. There is no hassle to buy them yourself.`,
  },
  {
    title: "Maid Service",
    content: `Some furnished apartments offer maid services. It offers tenants regular cleaning of the apartment, changing linens, and restocking supplies. It will be a great way to keep your living space tidy. Point to be noted that you may not get this facility as all furnished apartments.`,
  },
  {
    title: "Security",
    content: `While looking for a new apartment, most tenants are conscious of security. Furnished apartments always offer proper security features to keep you safe. You are going to get secure entrances, surveillance cameras, and alarms. Moreover, many furnished apartment buildings have security staff on-site to monitor the property.`,
  },
  {
    title: "Utilities",
    content: `In a furnished apartment, most of the utility bills are included with the rent. Therefore, you don’t have to worry about paying separate bills for electricity, water, gas, or internet. However, you should check the lease to see which bills are included along with the rental cost.`,
  },
  {
    title: "Parking",
    content: `Do you have a car? Well, you are going to get car parking facilities. In a furnished apartment, you will get an assigned parking spot in a garage. This facility will give you peace of mind. Also, it will save you from the hassle of searching for parking on the street.`,
  },
];

function FacilitySlider() {
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
        {FEATURES.map((item, i) => (
          <article key={i}>
            <h3 className="font-bold text-lg text-black">{item.title}</h3>
            <p className="mt-2 text-black leading-relaxed text-justify text-sm">
              {item.content}
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
          loop={true}
          className="relative"
        >
          {FEATURES.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-center px-4 py-4 min-h-[220px] w-full flex flex-col justify-center">
                <h3 className="font-bold text-lg text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-black text-[15px] text-justify leading-relaxed">
                  {item.content}
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
  return (
    <section className="mb-10 bg-white text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-brand">
          Special Facilities of Furnished Apartment Rent in Dhaka
        </h2>

        <p className="mt-4 text-justify leading-relaxed text-black text-sm">
          Renting a furnished apartment will be ideal both for short-term and
          long-term rentals. Here are some special facilities that you can
          expect to have in a furnished apartment.
        </p>

        <FacilitySlider />

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
