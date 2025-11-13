import React from "react";
import clsx from "clsx";

type Padding = "sm" | "md" | "lg";
type Elevation = "none" | "sm" | "md";

export interface CardProps {
  padding?: Padding;
  elevation?: Elevation;
  background?: string;
  className?: string;
}

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  padding = "md",
  elevation = "sm",
  background = "bg-white",
  className,
  children,
}) => {
  const paddingClass =
    padding === "sm" ? "p-3" : padding === "md" ? "p-4" : "p-6";

  const elevationClass =
    elevation === "none"
      ? ""
      : elevation === "sm"
      ? "shadow-sm"
      : "shadow-md";

  return (
    <div
      className={clsx(
        "rounded-lg border border-slate-200",
        paddingClass,
        elevationClass,
        background,
        className
      )}
    >
      {children}
    </div>
  );
};
