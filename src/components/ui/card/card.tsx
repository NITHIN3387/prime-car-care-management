import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import type { CardProps } from "./card.types";

const Card = forwardRef<HTMLElement, CardProps>(
  ({ className, ...props }, ref) => (
    <article
      ref={ref}
      className={cn(["bg-primary-bg p-6 rounded-lg space-y-6 flex flex-col", className])}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
