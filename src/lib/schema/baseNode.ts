import type { NodeType } from "./nodeTypes";

// Base node used by all components in the layout tree.
export interface BaseNode {
  id: string;                // unique id within the tree
  type: NodeType;            // which component to render
  props?: Record<string, any>; // simple props bag (kept generic on purpose)
  children?: LayoutNode[];   // nested layout nodes
}

// For now, LayoutNode is just BaseNode.
export type LayoutNode = BaseNode;