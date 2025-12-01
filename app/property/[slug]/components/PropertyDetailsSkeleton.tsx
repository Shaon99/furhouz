import { SkeletonImage, SkeletonText } from "@/components/ui/skeletons";

export default function PropertyDetailsSkeleton() {
  return (
    <div className="w-full mt-20">
      {/* Header Skeleton */}
      <div className="w-full max-w-[1350px] mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1 space-y-4">
            <SkeletonText width="half" lines={1} />
            <SkeletonText width="full" lines={1} className="h-10" />
            <SkeletonText width="quarter" lines={1} />
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-200" />
              <div className="w-10 h-10 rounded-lg bg-slate-200" />
            </div>
            <SkeletonText width="quarter" lines={1} className="h-8" />
          </div>
        </div>
      </div>

      {/* Gallery Skeleton */}
      <section className="w-full max-w-[1350px] mx-auto px-4 xl:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
          <div className="col-span-1 xl:col-span-8 space-y-4">
            <SkeletonImage width="100%" height={500} className="rounded-2xl" />
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <SkeletonImage key={i} width={100} height={60} className="rounded-lg" />
              ))}
            </div>
            <div className="h-12 bg-slate-200 rounded-lg" />
            <div className="space-y-6">
              <SkeletonText lines={3} />
              <SkeletonText lines={3} />
              <SkeletonText lines={3} />
            </div>
          </div>
          <div className="col-span-1 xl:col-span-4">
            <div className="sticky top-24 space-y-4 p-6 border rounded-lg">
              <SkeletonText width="full" lines={1} className="h-6" />
              <SkeletonText lines={5} />
              <div className="h-12 bg-slate-200 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

