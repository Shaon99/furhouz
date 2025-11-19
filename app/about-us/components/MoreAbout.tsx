"use client";

import { SkeletonText } from "@/components/ui/skeletons";

type Props = {
  finalDescription?: string;
  isLoading?: boolean;
};

export default function MoreAbout({ finalDescription, isLoading = false }: Props) {
  if (isLoading) {
    return (
      <section className="py-4 sm:py-8 mb-10 container mx-auto">
        <div className="w-full max-w-[1350px]">
          <SkeletonText width="half" lines={1} className="mx-auto mb-6" />
          <SkeletonText lines={8} />
        </div>
      </section>
    );
  }

  if (!finalDescription) return null;

  return (
    <section className="py-4 sm:py-8 mb-10 container mx-auto">
      <div className="w-full max-w-[1350px]">
        <h2 className="text-center text-3xl font-extrabold leading-tight sm:text-4xl md:text-4xl">
          More about <span className="text-brand">FurHouz</span> Accommodation
        </h2>
        <div
          className="mt-6 sm:mt-8 space-y-5 text-sm md:text-base leading-relaxed text-neutral-800"
          dangerouslySetInnerHTML={{ __html: finalDescription }}
        />
      </div>
    </section>
  );
}
