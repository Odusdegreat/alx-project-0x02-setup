import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
  className = "",
}) => {
  const classes = `${sizeClasses[size]} ${shape} bg-blue-600 text-white font-semibold ${className}`;

  return (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
};

export default Button;
