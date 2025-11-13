"use client";

import React from "react";
import { PromptPanel } from "@/components/prompt/PromptPanel";
import { CanvasRoot } from "@/components/canvas/CanvasRoot";
import { InspectorPanel } from "@/components/inspector/InspectorPanel";

export const AppShell: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-6 py-3">
        <h1 className="text-sm font-semibold text-slate-900">
          AI Design Assistant
        </h1>
        <p className="text-xs text-slate-500">
          Natural language → Layout schema → React UI
        </p>
      </header>

      <main className="flex flex-1 gap-4 p-4">
        {/* Left: Prompt */}
        <div className="w-1/4 min-w-[260px] max-w-sm">
          <PromptPanel />
        </div>

        {/* Center: Canvas */}
        <div className="flex-1">
          <CanvasRoot />
        </div>

        {/* Right: Inspector */}
        <div className="w-1/4 min-w-[260px] max-w-sm">
          <InspectorPanel />
        </div>
      </main>
    </div>
  );
};
