import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Stack } from "./Stack";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = "Hero Title",
  subtitle = "Short description goes here.",
  ctaLabel = "Get started",
}) => {
  return (
    <Stack gap="md">
      <Text variant="h1">{title}</Text>
      <Text variant="body" className="text-slate-600">
        {subtitle}
      </Text>
      <Button label={ctaLabel} />
    </Stack>
  );
};
