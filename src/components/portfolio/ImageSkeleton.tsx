interface ImageSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
}

export function ImageSkeleton({ src, alt, className = "", fit = "cover" }: ImageSkeletonProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full ${fit === "contain" ? "object-contain object-center" : "object-cover object-center"}`}
    />
  );
}

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`skeleton-shimmer ${className}`} />;
}
