import { forwardRef } from "react"
import type { CardTitleProps } from "./card-title.types"

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(({ ...props }, ref) => (
  <h2
    ref={ref}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

export { CardTitle }