import { forwardRef } from "react"
import { cn } from "@/lib/cn"
import type { LabelProps } from "./label.types"
import { labelVariants } from "./label.config"

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = "label"

export { Label }