import { create } from "zustand";

interface SelectionState {
  selectedNodeId: string | null;
  setSelectedNodeId: (id: string | null) => void;
  clearSelection: () => void;
}

export const useSelectionStore = create<SelectionState>((set) => ({
  selectedNodeId: null,

  setSelectedNodeId(id) {
    set({ selectedNodeId: id });
  },

  clearSelection() {
    set({ selectedNodeId: null });
  },
}));
