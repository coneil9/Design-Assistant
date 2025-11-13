import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-400 disabled:bg-slate-50",
    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3.5 py-1.5 text-sm",
    lg: "px-4.5 py-2 text-base",
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...rest}
    >
      {label ?? children}
    </button>
  );
};
