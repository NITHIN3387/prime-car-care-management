import { forwardRef } from "react";
import type { CardBodyProps } from "./card-body.types";
import { cn } from "@/lib/cn";

const CardBody = forwardRef<HTMLElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <main ref={ref} className={cn(["flex-1", className])} {...props} />
  )
);
CardBody.displayName = "CardBody";

export { CardBody };
