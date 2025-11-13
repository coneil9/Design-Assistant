"use client";

import React from "react";
import { useLayoutStore } from "@/store/layoutStore";
import { CanvasViewport } from "./CanvasViewport";
import { RenderNode } from "./RenderNode";
import { useSelectionStore } from "@/store/selectionStore";

export const CanvasRoot: React.FC = () => {
  const rootNode = useLayoutStore((s) => s.rootNode);
  const clearSelection = useSelectionStore((s) => s.clearSelection);

  if (!rootNode) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-slate-300 text-sm text-slate-500">
        No layout loaded yet. Generate one with a prompt.
      </div>
    );
  }

  const handleBackgroundClick: React.MouseEventHandler<HTMLDivElement> = () => {
    clearSelection();
  };

  return (
    <div className="h-full w-full" onClick={handleBackgroundClick}>
      <CanvasViewport>
        <RenderNode node={rootNode} />
      </CanvasViewport>
    </div>
  );
};
