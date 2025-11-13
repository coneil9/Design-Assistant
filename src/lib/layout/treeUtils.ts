import type { LayoutNode } from "../schema";

export function findNodeById(root: LayoutNode, id: string): LayoutNode | null {
  if (root.id === id) return root;

  if (!root.children) return null;

  for (const child of root.children) {
    const found = findNodeById(child, id);
    if (found) return found;
  }

  return null;
}

// Returns a new tree with the node updated.
// updater gets the old node and returns a new node.
export function updateNodeById(
  root: LayoutNode,
  id: string,
  updater: (node: LayoutNode) => LayoutNode
): LayoutNode {
  if (root.id === id) {
    return updater(root);
  }

  if (!root.children || root.children.length === 0) {
    return root;
  }

  const newChildren = root.children.map((child) =>
    updateNodeById(child, id, updater)
  );

  return { ...root, children: newChildren };
}
