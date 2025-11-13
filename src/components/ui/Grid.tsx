import React from "react";
import clsx from "clsx";

type Gap = "sm" | "md" | "lg";

export interface GridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: Gap;
  className?: string;
}

export const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({
  columns = 3,
  gap = "md",
  className,
  children,
}) => {
  const columnsClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 md:grid-cols-4";

  const gapClass = gap === "sm" ? "gap-2" : gap === "md" ? "gap-4" : "gap-6";

  return (
    <div className={clsx("grid", columnsClass, gapClass, className)}>
      {children}
    </div>
  );
};
