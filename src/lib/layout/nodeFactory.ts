import type { LayoutNode } from "../schema";
import { createId } from "../utils/id";

export function createPageNode(children: LayoutNode[] = []): LayoutNode {
  return {
    id: createId("page"),
    type: "page",
    props: {
      background: "bg-slate-50",
      maxWidth: "xl",
    },
    children,
  };
}

export function createStackNode(
  children: LayoutNode[] = [],
  options?: { direction?: "vertical" | "horizontal" }
): LayoutNode {
  return {
    id: createId("stack"),
    type: "stack",
    props: {
      direction: options?.direction ?? "vertical",
      gap: "md",
    },
    children,
  };
}

export function createGridNode(
  children: LayoutNode[] = [],
  options?: { columns?: 1 | 2 | 3 | 4 }
): LayoutNode {
  return {
    id: createId("grid"),
    type: "grid",
    props: {
      columns: options?.columns ?? 3,
      gap: "md",
    },
    children,
  };
}

export function createTextNode(content: string): LayoutNode {
  return {
    id: createId("text"),
    type: "text",
    props: {
      content,
      variant: "body",
      align: "left",
    },
  };
}

export function createButtonNode(label: string): LayoutNode {
  return {
    id: createId("button"),
    type: "button",
    props: {
      label,
      variant: "primary",
      size: "md",
    },
  };
}

export function createCardNode(children: LayoutNode[] = []): LayoutNode {
  return {
    id: createId("card"),
    type: "card",
    props: {
      padding: "md",
      elevation: "sm",
    },
    children,
  };
}
