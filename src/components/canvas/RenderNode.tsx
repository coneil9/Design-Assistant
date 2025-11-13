"use client";

import React from "react";
import type { LayoutNode } from "@/lib/schema";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { Stack } from "@/components/ui/Stack";
import { Navbar } from "@/components/ui/Navbar";
import { Sidebar } from "@/components/ui/Sidebar";
import { StatCard } from "@/components/ui/StatCard";
import { Hero } from "@/components/ui/Hero";
import { ImageBlock } from "@/components/ui/ImageBlock";
import { useSelectionStore } from "@/store/selectionStore";
import clsx from "clsx";

const registry: Record<string, React.FC<any>> = {
  text: Text,
  button: Button,
  card: Card,
  grid: Grid,
  stack: Stack,
  navbar: Navbar,
  sidebar: Sidebar,
  statCard: StatCard,
  hero: Hero,
  image: ImageBlock,
  section: ({ children, ...rest }) => (
    <section className="w-full" {...rest}>
      {children}
    </section>
  ),
  page: ({ children, ...rest }) => (
    <div className="min-h-screen w-full bg-slate-50" {...rest}>
      {children}
    </div>
  ),
  input: (props: any) => (
    <input
      className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      {...props}
    />
  ),
};

interface RenderNodeProps {
  node: LayoutNode;
}

export const RenderNode: React.FC<RenderNodeProps> = ({ node }) => {
  const Component = registry[node.type];
  const selectedNodeId = useSelectionStore((s) => s.selectedNodeId);
  const setSelectedNodeId = useSelectionStore((s) => s.setSelectedNodeId);

  if (!Component) {
    // Unknown node type: fail silently in UI
    return null;
  }

  const isSelected = selectedNodeId === node.id;

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    setSelectedNodeId(node.id);
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        "relative",
        isSelected && "outline outline-2 outline-blue-500/70 outline-offset-2"
      )}
    >
      <Component {...(node.props || {})}>
        {node.children?.map((child) => (
          <RenderNode key={child.id} node={child} />
        ))}
      </Component>
    </div>
  );
};
