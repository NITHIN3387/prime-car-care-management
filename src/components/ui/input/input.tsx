import { cn } from "@/lib/cn";
import { forwardRef } from "react";
import type { InputProps } from "./input.types";
import clsx from "clsx";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const defaultClassName = clsx(
      "flex w-full border border-transparent rounded-md px-3 py-2 text-sm text-white bg-primary-bg",
      // "file:border-0 file:bg-transparent file:text-sm file:font-medium",
      "placeholder:text-white/30",
      "focus-visible:outline-none focus-visible:border focus-visible:border-primary focus-visible:shadow-primary focus-visible:shadow-sm",
      "disabled:cursor-not-allowed disabled:opacity-50",
    )

    return (
      <input
        type={type}
        className={cn(
          defaultClassName,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
