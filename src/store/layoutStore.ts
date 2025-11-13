import { create } from "zustand";
import type { LayoutNode } from "@/lib/schema";
import { createDashboardPreset } from "@/lib/layout/presets";
import { updateNodeById } from "@/lib/layout/treeUtils";

interface LayoutState {
  rootNode: LayoutNode | null;
  setRootNode: (root: LayoutNode) => void;
  updateNode: (id: string, updater: (node: LayoutNode) => LayoutNode) => void;
}

export const useLayoutStore = create<LayoutState>((set, get) => ({
  // Start with a simple preset so the canvas isn't empty.
  rootNode: createDashboardPreset(),

  setRootNode(root) {
    set({ rootNode: root });
  },

  updateNode(id, updater) {
    const current = get().rootNode;
    if (!current) return;

    const updated = updateNodeById(current, id, updater);
    set({ rootNode: updated });
  },
}));
