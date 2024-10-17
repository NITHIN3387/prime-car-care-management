import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { buttonVariants } from "./button.config";
import type { ButtonProps } from "./button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
