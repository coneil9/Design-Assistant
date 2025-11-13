"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export interface PromptPanelProps {
  onGenerate?: (prompt: string) => void;
}

export const PromptPanel: React.FC<PromptPanelProps> = ({ onGenerate }) => {
  const [value, setValue] = useState(
    "Make a dashboard with a sidebar, top navbar, and 3 stat cards with icons."
  );

  const handleClick = () => {
    if (onGenerate) {
      onGenerate(value);
    } else {
      console.log("Generate layout (not wired yet):", value);
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex h-full flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">Prompt</h2>
        <p className="mt-1 text-xs text-slate-500">
          Describe the layout you want. For example: &quot;Dashboard with sidebar and
          stats cards&quot;.
        </p>
      </div>

      <textarea
        value={value}
        onChange={handleChange}
        rows={6}
        className="w-full flex-1 resize-none rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <Button label="Generate layout" onClick={handleClick} />
    </div>
  );
};
