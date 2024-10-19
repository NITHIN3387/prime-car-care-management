import { forwardRef } from "react"
import type { CardFooterProps } from "./card-footer.types"

const CardFooter = forwardRef<HTMLElement, CardFooterProps>(({ ...props }, ref) => (
  <footer
    ref={ref}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { CardFooter }