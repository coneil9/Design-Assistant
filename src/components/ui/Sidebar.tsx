import React from "react";
import clsx from "clsx";

export interface SidebarProps {
  title?: string;
  width?: number;
  className?: string;
}

export const Sidebar: React.FC<React.PropsWithChildren<SidebarProps>> = ({
  title,
  width = 260,
  className,
  children,
}) => {
  return (
    <aside
      className={clsx(
        "flex h-full flex-col border-r border-slate-200 bg-white",
        className
      )}
      style={{ width }}
    >
      {title && (
        <div className="border-b border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </div>
      )}
      <div className="flex-1 overflow-auto p-3 text-xs text-slate-700">
        {children}
      </div>
    </aside>
  );
};
