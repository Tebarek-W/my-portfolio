"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-primary-400 dark:focus-visible:ring-offset-dark",
          {
            "bg-ink text-white hover:bg-ink/90 dark:bg-primary-500 dark:text-ink dark:hover:bg-primary-400":
              variant === "default",
            "border border-surface-border bg-transparent text-ink hover:border-ink/30 hover:bg-surface-sunken dark:border-dark-border dark:text-slate-100 dark:hover:bg-white/5":
              variant === "outline",
            "text-ink-muted hover:bg-surface-sunken hover:text-ink dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white":
              variant === "ghost",
            "bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:text-ink dark:hover:bg-primary-400":
              variant === "secondary",
            "h-11 px-5 text-sm": size === "default",
            "h-9 px-3.5 text-sm": size === "sm",
            "h-12 px-7 text-base": size === "lg",
            "h-10 w-10 p-0": size === "icon",
          },
          className
        )}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
