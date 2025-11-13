"use client";

import React from "react";

export interface CanvasViewportProps {
  children?: React.ReactNode;
}

export const CanvasViewport: React.FC<CanvasViewportProps> = ({ children }) => {
  return (
    <div className="h-full w-full overflow-auto rounded-lg border border-slate-200 bg-slate-100 p-4">
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  );
};
