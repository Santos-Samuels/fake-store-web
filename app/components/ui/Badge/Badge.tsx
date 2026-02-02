import * as React from "react"

import { cn } from "~/lib/utils"
import { badgeStyles, type BadgeVariant } from "./styles"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div className={cn(badgeStyles(variant, className))} {...props} />
  )
}

export { Badge }
