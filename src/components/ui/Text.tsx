import React from "react";
import clsx from "clsx";

type TextVariant = "h1" | "h2" | "h3" | "body";
type TextAlign = "left" | "center" | "right";

export interface TextProps {
  content?: string;
  variant?: TextVariant;
  align?: TextAlign;
  color?: string;
  className?: string;
}

export const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  content,
  variant = "body",
  align = "left",
  color,
  className,
  children,
}) => {
  const base = "text-slate-900";
  const variantClass =
    variant === "h1"
      ? "text-3xl font-semibold"
      : variant === "h2"
      ? "text-2xl font-semibold"
      : variant === "h3"
      ? "text-xl font-semibold"
      : "text-sm";
  const alignClass =
    align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

  const Tag = variant === "body" ? "p" : variant;

  return (
    <Tag className={clsx(base, variantClass, alignClass, color, className)}>
      {content ?? children}
    </Tag>
  );
};
