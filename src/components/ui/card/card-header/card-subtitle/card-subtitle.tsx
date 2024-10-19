import { forwardRef } from "react"
import type { CardSubTitleProps } from "./card-subtitle.types"
import { cn } from "@/lib/cn"

const CardSubTitle = forwardRef<HTMLHeadingElement, CardSubTitleProps>(({ className, ...props }, ref) => (
  <h6
    className={cn(["text-white/50", className])}
    ref={ref}
    {...props}
  />
))
CardSubTitle.displayName = "CardSubTitle"

export { CardSubTitle }