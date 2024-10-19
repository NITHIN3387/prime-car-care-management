import { forwardRef } from "react"
import type { CardHeaderProps } from "./card-header.types"

const CardHeader = forwardRef<HTMLElement, CardHeaderProps>(({ ...props }, ref) => (
  <header
    ref={ref}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

export { CardHeader }