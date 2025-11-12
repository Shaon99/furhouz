import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

// Base Skeleton Text Component
export function SkeletonText({
  className,
  lines = 1,
  width = "full",
}: {
  className?: string;
  lines?: number;
  width?: "full" | "half" | "quarter" | string;
}) {
  const widthClass =
    width === "full"
      ? "w-full"
      : width === "half"
      ? "w-1/2"
      : width === "quarter"
      ? "w-1/4"
      : width;

  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", widthClass, i === lines - 1 && "w-3/4")}
        />
      ))}
    </div>
  );
}

// Skeleton Image Component
export function SkeletonImage({
  className,
  width,
  height,
  rounded = false,
}: {
  className?: string;
  width?: number | string;
  height?: number | string;
  rounded?: boolean;
}) {
  return (
    <Skeleton
      className={cn(
        rounded && "rounded-full",
        !rounded && "rounded-md",
        className
      )}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    />
  );
}

// Skeleton Logo Component
export function SkeletonLogo({
  className,
  width = 200,
  height = 46,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <SkeletonImage
      width={width}
      height={height}
      className={cn("rounded", className)}
    />
  );
}

// Skeleton Card Component
export function SkeletonCard({
  className,
  showImage = true,
  showTitle = true,
  showDescription = true,
  lines = 2,
}: {
  className?: string;
  showImage?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  lines?: number;
}) {
  return (
    <div className={cn("rounded-lg border p-4 space-y-4", className)}>
      {showImage && <SkeletonImage width="100%" height={200} />}
      {showTitle && <Skeleton className="h-6 w-3/4" />}
      {showDescription && <SkeletonText lines={lines} />}
    </div>
  );
}

// Skeleton Button Component
export function SkeletonButton({
  className,
  width = "auto",
  height = 40,
}: {
  className?: string;
  width?: number | string;
  height?: number;
}) {
  return (
    <Skeleton
      className={cn("rounded-md", className)}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: `${height}px`,
      }}
    />
  );
}

// Skeleton Header/Background Component
export function SkeletonHeader({
  className,
  height = "100%",
}: {
  className?: string;
  height?: string | number;
}) {
  return (
    <Skeleton
      className={cn("w-full", className)}
      style={{
        height: typeof height === "number" ? `${height}px` : height,
      }}
    />
  );
}

// Skeleton List Item Component
export function SkeletonListItem({
  className,
  showAvatar = false,
  showTitle = true,
  showSubtitle = true,
}: {
  className?: string;
  showAvatar?: boolean;
  showTitle?: boolean;
  showSubtitle?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3 p-3", className)}>
      {showAvatar && <SkeletonImage width={40} height={40} rounded />}
      <div className="flex-1 space-y-2">
        {showTitle && <Skeleton className="h-4 w-3/4" />}
        {showSubtitle && <Skeleton className="h-3 w-1/2" />}
      </div>
    </div>
  );
}

// Skeleton Contact Info Component
export function SkeletonContactInfo({
  className,
  lines = 3,
}: {
  className?: string;
  lines?: number;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-5",
            i === 0 && "w-3/4",
            i === 1 && "w-2/3",
            i === 2 && "w-4/5"
          )}
        />
      ))}
    </div>
  );
}

