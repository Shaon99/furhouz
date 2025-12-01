"use client";

import { useState } from "react";
import Image from "next/image";
import { AboutUsBanner } from "@/types/aboutUs";
import { SkeletonText } from "@/components/ui/skeletons";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  banner?: AboutUsBanner;
  isLoading?: boolean;
};

const Img = ({ src, alt, ...props }: { src?: string; alt: string; [key: string]: unknown }) => {
  const [imgSrc, setImgSrc] = useState(src || "/placeholder.png");
  return <Image {...props} src={imgSrc} alt={alt} onError={() => setImgSrc("/placeholder.png")} />;
};

export default function AboutHero({ banner, isLoading = false }: Props) {
  if (isLoading) {
    return (
      <div className="pt-28 pb-5 container mx-auto">
        <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto rounded-lg">
          <Skeleton className="absolute inset-0 rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-12 text-center items-center">
            <SkeletonText width="three-quarter" lines={1} className="mb-4" />
            <SkeletonText width="half" lines={1} />
          </div>
        </section>
      </div>
    );
  }

  if (!banner) return null;

  return (
    <div className="pt-28 pb-5 container mx-auto">
      <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto">
        <Img
          src={banner.image}
          alt="About us background"
          fill
          priority
          className="object-cover object-center brightness-75 rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-12 text-center items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-1 text-white">
            {banner.title}
          </h1>
          <p className="text-xs sm:text-base md:text-lg font-medium text-white mt-2 mb-4">
            {banner.subtitle}
          </p>
        </div>
      </section>
    </div>
  );
}

