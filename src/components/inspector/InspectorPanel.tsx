"use client";

import React from "react";
import { useSelectionStore } from "@/store/selectionStore";
import { useLayoutStore } from "@/store/layoutStore";
import { findNodeById } from "@/lib/layout/treeUtils";

export const InspectorPanel: React.FC = () => {
  const selectedNodeId = useSelectionStore((s) => s.selectedNodeId);
  const rootNode = useLayoutStore((s) => s.rootNode);

  if (!rootNode) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg border border-slate-200 bg-white text-xs text-slate-500">
        No layout loaded.
      </div>
    );
  }

  if (!selectedNodeId) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg border border-slate-200 bg-white text-xs text-slate-500">
        Click a component in the canvas to inspect its properties.
      </div>
    );
  }

  const selectedNode = findNodeById(rootNode, selectedNodeId);

  if (!selectedNode) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg border border-slate-200 bg-white text-xs text-slate-500">
        Selected node not found.
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">Inspector</h2>
        <p className="mt-1 text-xs text-slate-500">
          Node ID: <span className="font-mono">{selectedNode.id}</span>
        </p>
        <p className="mt-0.5 text-xs text-slate-500">
          Type: <span className="font-mono">{selectedNode.type}</span>
        </p>
      </div>

      <div className="mt-2">
        <h3 className="text-xs font-semibold text-slate-700">Props</h3>
        {selectedNode.props ? (
          <pre className="mt-1 max-h-64 overflow-auto rounded-md bg-slate-900 p-2 text-[11px] text-slate-100">
            {JSON.stringify(selectedNode.props, null, 2)}
          </pre>
        ) : (
          <p className="mt-1 text-xs text-slate-500">This node has no props.</p>
        )}
      </div>

      <p className="mt-auto text-[11px] text-slate-400">
        Editing props will be added soon. For now, this is a read-only view.
      </p>
    </div>
  );
};
