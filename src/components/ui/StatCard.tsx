import React from "react";
import { Card } from "./Card";
import { Text } from "./Text";

export interface StatCardProps {
  label?: string;
  value?: string;
  helperText?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label = "Label",
  value = "0",
  helperText,
}) => {
  return (
    <Card padding="md" elevation="sm">
      <Text variant="body" className="text-xs text-slate-500">
        {label}
      </Text>
      <Text variant="h2" className="mt-1">
        {value}
      </Text>
      {helperText && (
        <Text variant="body" className="mt-1 text-xs text-slate-500">
          {helperText}
        </Text>
      )}
    </Card>
  );
};
