import React from "react";
import clsx from "clsx";

type Direction = "vertical" | "horizontal";
type Gap = "none" | "sm" | "md" | "lg";
type Align = "start" | "center" | "end";
type Justify = "start" | "center" | "end" | "between";

export interface StackProps {
  direction?: Direction;
  gap?: Gap;
  align?: Align;
  justify?: Justify;
  className?: string;
}

export const Stack: React.FC<React.PropsWithChildren<StackProps>> = ({
  direction = "vertical",
  gap = "md",
  align = "start",
  justify = "start",
  className,
  children,
}) => {
  const dirClass = direction === "vertical" ? "flex-col" : "flex-row";
  const gapClass =
    gap === "none" ? "gap-0" : gap === "sm" ? "gap-2" : gap === "md" ? "gap-4" : "gap-6";

  const alignMap: Record<Align, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

  const justifyMap: Record<Justify, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  return (
    <div
      className={clsx(
        "flex",
        dirClass,
        gapClass,
        alignMap[align],
        justifyMap[justify],
        className
      )}
    >
      {children}
    </div>
  );
};
