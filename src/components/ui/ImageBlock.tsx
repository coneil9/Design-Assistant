import React from "react";
import clsx from "clsx";

export interface ImageBlockProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const ImageBlock: React.FC<ImageBlockProps> = ({
  src = "https://via.placeholder.com/400x240",
  alt = "Placeholder image",
  className,
}) => {
  return (
    <div className={clsx("overflow-hidden rounded-lg bg-slate-100", className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
};
