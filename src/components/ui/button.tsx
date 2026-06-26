"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps, PanInfo } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "default" | "outline" | "ghost" | "gradient";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  onDragHandler?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, onDragHandler, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/20": variant === "default",
            "border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5": variant === "outline",
            "hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300": variant === "ghost",
            "bg-gradient-to-r from-primary-500 to-accent-violet hover:from-primary-600 hover:to-accent-violet/90 text-white shadow-xl shadow-primary-500/25 border-0": variant === "gradient",
            "h-11 px-5 py-2": size === "default",
            "h-9 px-4 text-sm": size === "sm",
            "h-12 px-8 text-lg": size === "lg",
            "h-11 w-11": size === "icon",
          },
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        drag={!!onDragHandler}
        onDrag={onDragHandler}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
