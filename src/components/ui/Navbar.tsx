import React from "react";
import clsx from "clsx";

export interface NavbarProps {
  title?: string;
  className?: string;
}

export const Navbar: React.FC<React.PropsWithChildren<NavbarProps>> = ({
  title,
  className,
  children,
}) => {
  return (
    <header
      className={clsx(
        "flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3",
        className
      )}
    >
      <span className="text-sm font-semibold text-slate-900">{title}</span>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        {children}
      </div>
    </header>
  );
};
