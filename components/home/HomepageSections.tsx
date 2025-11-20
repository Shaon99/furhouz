"use client";

import React from "react";
import Image from "next/image";
import { useHomepageSectionQuery } from "@/hooks/queries/useHomepageSectionQuery";
import { SkeletonText } from "@/components/ui/skeletons";

const HomepageSections = () => {
  const { data: sections = [], isLoading } = useHomepageSectionQuery();

  if (isLoading) {
    return (
      <>
        {[0, 1].map((i) => (
          <section key={i} className="w-full py-10 md:py-20 bg-white">
            <div className="container w-full flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="w-full md:w-1/2 flex items-center justify-center min-h-[270px] md:min-h-[820px]">
                <div className="w-full h-[300px] md:w-[720px] md:h-[820px] bg-slate-200 animate-pulse rounded-tr-full rounded-br-full" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-0 md:px-12">
                <SkeletonText lines={1} className="h-10 mb-4" />
                <SkeletonText lines={4} />
              </div>
            </div>
          </section>
        ))}
      </>
    );
  }

  if (sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        const imageSrc = section.image || "/placeholder.png";
        
        return (
          <section key={section.id} className="w-full py-10 md:py-20 bg-white">
            <div className="container w-full flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Image Section - Left for even, Right for odd */}
              <div
                className={`w-full md:w-1/2 flex items-center justify-center min-h-[270px] md:min-h-[820px] ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <div
                  className={`overflow-hidden w-full h-[300px] md:w-[720px] md:h-[820px] shadow-md flex items-center justify-center bg-soft ${
                    isEven
                      ? "rounded-tr-full rounded-br-full"
                      : "rounded-tl-full rounded-bl-full"
                  }`}
                >
                  <Image
                    src={imageSrc}
                    width={720}
                    height={820}
                    alt={section.title}
                    className="object-cover w-full h-full block"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.png";
                    }}
                  />
                </div>
              </div>

              {/* Content Section - Right for even, Left for odd */}
              <div
                className={`w-full md:w-1/2 flex flex-col items-start justify-center px-0 md:px-12 -mt-2 lg:mt-12 ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <h3 className="font-semibold text-3xl md:text-3xl text-brand mb-4 tracking-tight">
                  {section.title}
                </h3>
                <div
                  className="text-sm md:text-lg text-gray-600 max-w-2xl leading-relaxed mb-6 text-justify md:text-start"
                  dangerouslySetInnerHTML={{ __html: section.description }}
                />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default HomepageSections;

