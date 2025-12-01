"use client";

import { useState } from "react";
import Image from "next/image";
import { useWhyChooseQuery } from "@/hooks/queries/useWhyChooseQuery";
import { SkeletonImage, SkeletonText } from "@/components/ui/skeletons";

type Props = {
  heading?: string;
  brandWord?: string; 
  className?: string;
};

const Img = ({ src, alt, ...props }: { src?: string; alt: string; [key: string]: unknown }) => {
  const [imgSrc, setImgSrc] = useState(src || "/placeholder.png");
  return <Image {...props} src={imgSrc} alt={alt} onError={() => setImgSrc("/placeholder.png")} />;
};

/* WHY CHOOSE SECTION (FurHouz style) */
export default function WhyChooseSection({
  heading = "Why people choose",
  brandWord = "FurHouz",
  className = "",
}: Props) {
  const { data, isLoading } = useWhyChooseQuery();

  if (isLoading) {
    return (
      <section className={`container py-10 lg:py-24 ${className}`}>
        <div className="text-center mb-10">
          <SkeletonText width="half" lines={1} className="mx-auto mb-2" />
          <SkeletonText width="quarter" lines={1} className="mx-auto" />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-10 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="text-center">
              <SkeletonImage width={80} height={80} rounded className="mx-auto mb-4" />
              <SkeletonText width="full" lines={1} className="mb-2" />
              <SkeletonText lines={2} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!data || data.length === 0) return null;

  return (
    <section className={`container py-10 lg:py-24 ${className}`}>
      <div className="">
        {/* Title */}
        <div className="text-center">
          <h2 className="h2">           
            <span className="block text-2xl uppercase sm:text-3xl lg:text-4xl font-semibold leading-tight">
              {heading}
            </span>
            <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800">
              {brandWord}
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-10 lg:grid-cols-3">
          {data.map((item, i) => (
            <article key={item.id} className="text-center mx-auto">
              <div className="mx-auto size-14 sm:size-20 mb-4 sm:mb-5">
                <Img
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  priority={i < 3}
                />
              </div>
              <h5 className="font-bold text-sm sm:text-lg capitalize">{item.title}</h5>
              <p
                className="
                  muted mt-2 text-xs sm:text-sm leading-relaxed
                  line-clamp-2
                  max-h-[3.3em] overflow-hidden
                  "
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
