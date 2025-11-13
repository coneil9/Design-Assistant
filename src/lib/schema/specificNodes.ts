import type { LayoutNode } from "./baseNode";

// TEXT
export interface TextNode extends LayoutNode {
  type: "text";
  props?: {
    content: string;
    variant?: "h1" | "h2" | "h3" | "body";
    align?: "left" | "center" | "right";
    color?: string; // Tailwind color class or hex
  };
}

// BUTTON
export interface ButtonNode extends LayoutNode {
  type: "button";
  props?: {
    label: string;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
  };
}

// GRID
export interface GridNode extends LayoutNode {
  type: "grid";
  props?: {
    columns: 1 | 2 | 3 | 4;
    gap?: "sm" | "md" | "lg";
  };
}

// STACK (vertical or horizontal stack)
export interface StackNode extends LayoutNode {
  type: "stack";
  props?: {
    direction?: "vertical" | "horizontal";
    gap?: "none" | "sm" | "md" | "lg";
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "end" | "between";
  };
}

// CARD
export interface CardNode extends LayoutNode {
  type: "card";
  props?: {
    padding?: "sm" | "md" | "lg";
    elevation?: "none" | "sm" | "md";
    background?: string; // Tailwind or hex
  };
}

// PAGE
export interface PageNode extends LayoutNode {
  type: "page";
  props?: {
    background?: string;
    maxWidth?: "full" | "xl" | "2xl";
  };
}

