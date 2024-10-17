import { VariantProps } from "class-variance-authority";
import { LabelHTMLAttributes } from "react";
import { labelVariants } from "./label.config";

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}