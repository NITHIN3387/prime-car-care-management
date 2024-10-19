import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva(
  clsx(
    "inline-flex items-center justify-center rounded-md text-sm font-semibold whitespace-nowrap",
    "focus-visible:outline-none", 
    "disabled:pointer-events-none disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/80 text-black",
        destructive:
          "",
        outline:
          "",
        secondary:
          "",
        ghost: "bg-trasparent hover:bg-secondary-bg text-primary",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3",
        lg: "px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)