"use client";

import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAreaQuery } from "@/hooks/queries/useAreaQuery";
import Banner from "@/components/home/Banner";

const PropertySalePage = () => {
  const { data: areas, isLoading } = useAreaQuery();

  return (
    <>
      <section className="w-full py-10 bg-white container mx-auto">
        <h1 className="text-center font-bold text-brand-700 text-3xl md:text-4xl mb-8">Area Guide</h1>
        <div className="max-w-[1350px] mx-auto">
          <h2
            className="text-center font-bold text-brand-700 text-3xl md:text-4xl mb-8"
            style={{ color: "#064d83" }}
          >
            Area Guide
          </h2>
          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden bg-gray-200 animate-pulse w-full h-[140px] md:h-[170px] lg:h-[200px]"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
              {areas?.map((area) => (
                <Link
                  href={`/area-guide/${area.slug}`}
                  key={area.id}
                  className="
                    relative rounded-2xl overflow-hidden bg-white shadow-lg
                    w-full
                    h-[140px] md:h-[170px] lg:h-[200px]
                    flex flex-col border border-gray-100
                    transition duration-150 hover:scale-105 hover:shadow-xl
                  "
                  style={{
                    minWidth: "120px",
                    aspectRatio: "4/3",
                    textDecoration: "none",
                  }}
                >
                  {/* Background Image, lightly blurred for overlay effect */}
                  <Image
                    src={area.image}
                    alt={area.name}
                    className="object-cover w-full h-full absolute top-0 left-0 blur-[1.2px] brightness-[0.95]"
                  style={{
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  // Mobile screens, use width 100px; medium 170px; large 220px+
                  width={100}
                  height={75}
                  sizes="(max-width: 640px) 100px, (max-width:1024px) 170px, 220px"
                />
                {/* Gradient overlay for readability */}
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(6,77,131,0.10) 0%, rgba(11,140,97,0.16) 54%, rgba(6,77,131,0.20) 100%)",
                    zIndex: 1,
                  }}
                />
                {/* Name + Icon Overlay at bottom-left corner */}
                <span
                  className="
                    flex items-center gap-1 text-white font-semibold text-base sm:text-lg
                    z-10 absolute bottom-2 sm:bottom-3 left-2 sm:left-3
                  "
                  style={{
                    pointerEvents: "none",
                    textShadow:
                      "0 2px 16px rgba(0,0,0,0.26),0 1.5px 11px rgba(6,77,131,0.18)",
                  }}
                >
                    <MapPin size={16} className="text-white opacity-95 mr-[4px]" />
                    <span style={{ fontWeight: 700 }}>{area.name}</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      
        <Banner />
    </>
  );
};

export default PropertySalePage;