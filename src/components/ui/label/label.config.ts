import { cva } from "class-variance-authority";
import clsx from "clsx";

export const labelVariants = cva(
  clsx(
    "font-medium text-white",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  )
)