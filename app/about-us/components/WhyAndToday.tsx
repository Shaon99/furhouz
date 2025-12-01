"use client";

import { useState } from "react";
import Image from "next/image";
import { AboutUsSection } from "@/types/aboutUs";
import { SkeletonImage, SkeletonText } from "@/components/ui/skeletons";

type Props = {
  section1?: AboutUsSection;
  section2?: AboutUsSection;
  section3?: AboutUsSection;
  isLoading?: boolean;
};

const Img = ({ src, alt, ...props }: { src?: string; alt: string; [key: string]: unknown }) => {
  const [imgSrc, setImgSrc] = useState(src || "/placeholder.png");
  return <Image {...props} src={imgSrc} alt={alt} onError={() => setImgSrc("/placeholder.png")} />;
};

export default function WhyAndToday({
  section1,
  section2,
  section3,
  isLoading = false,
}: Props) {
  if (isLoading) {
    return (
      <section className="py-10 lg:py-20 container mx-auto">
        <div className="mx-auto w-full max-w-[1350px] space-y-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-6 space-y-4">
                <SkeletonText width="quarter" lines={1} />
                <SkeletonText width="half" lines={1} />
                <SkeletonText lines={3} />
              </div>
              <div className="md:col-span-6">
                <SkeletonImage width="100%" height={400} rounded />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 lg:py-20 container mx-auto">
      <div className="mx-auto w-full max-w-[1350px]">
        {/* ===== Block 1: Why we are here ===== */}
        {section1 && (
          <>
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-6">
                <p className="text-sm md:text-base font-semibold tracking-widest text-red-400 uppercase">
                  Find out more
                </p>
                <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl md:text-4xl">
                  {section1.title}
                </h2>
                <div
                  className="mt-4 space-y-4 text-sm md:text-base leading-relaxed text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: section1.description }}
                />
              </div>
              <div className="md:col-span-6">
                <div className="relative overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
                  <Img
                    src={section1.image}
                    alt={section1.title}
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24" />
          </>
        )}

        {/* ===== Block 2: FurHouz today ===== */}
        {section2 && (
          <>
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-6 order-2 md:order-1">
                <p className="text-sm md:text-base font-semibold tracking-widest text-red-400 uppercase">
                  We are
                </p>
                <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl md:text-4xl">
                  {section2.title}
                </h2>
                <div
                  className="mt-4 space-y-4 text-sm md:text-base leading-relaxed text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: section2.description }}
                />
              </div>
              <div className="md:col-span-6 order-1 md:order-2">
                <div className="relative overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
                  <Img
                    src={section2.image}
                    alt={section2.title}
                    width={1400}
                    height={1000}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24" />
          </>
        )}

        {/* ===== Block 3: Where we're going ===== */}
        {section3 && (
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-6 order-1">
              <div className="relative overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
                <Img
                  src={section3.image}
                  alt={section3.title}
                  width={1400}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-6 order-2">
              <p className="text-sm md:text-base font-semibold tracking-widest text-red-400 uppercase">
                GOING HIGH
              </p>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl md:text-4xl">
                {section3.title}
              </h2>
              <div
                className="mt-4 space-y-4 text-sm md:text-base leading-relaxed text-neutral-700"
                dangerouslySetInnerHTML={{ __html: section3.description }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
