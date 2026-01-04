"use client";

import { useState } from "react";

type CompanyLogoProps = {
  src: string;
  alt: string;
  initials: string;
  size?: "sm" | "md";
  className?: string;
  imgClassName?: string;
};

const SIZE_CLASSES: Record<NonNullable<CompanyLogoProps["size"]>, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
};

export default function CompanyLogo({
  src,
  alt,
  initials,
  size = "md",
  className = "",
  imgClassName = "",
}: CompanyLogoProps) {
  const [hasError, setHasError] = useState(false);
  const sizeClass = SIZE_CLASSES[size];

  return (
    <div
      className={`group flex items-center justify-center rounded-full border border-white/10 bg-white/5 ${sizeClass} ${className}`}
      role="img"
      aria-label={alt}
    >
      {hasError ? (
        <span className="text-xs font-semibold text-white/80" aria-hidden="true">
          {initials}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-contain opacity-80 transition group-hover:opacity-100 ${imgClassName}`}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
