import { forwardRef } from "react";
import { TheadProps } from "./thead.types";
import { cn } from "@/lib/cn";

export const Thead = forwardRef<HTMLTableSectionElement, TheadProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <thead className={cn(["bg-primary-bg", className])} ref={ref} {...props}>
        {children}
      </thead>
    );
  }
);

Thead.displayName = "Thead";
