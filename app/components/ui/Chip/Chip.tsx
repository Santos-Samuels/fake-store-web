import * as React from "react"
import { cn } from "~/lib/utils"
import { chipStyles, type ChipVariant } from "./styles"

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ChipVariant;
  active?: boolean;
  label: string
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, variant = "default", active = false, label, ...props }, ref) => {
    return (
      <button
        className={cn(chipStyles(variant, active, className))}
        ref={ref}
        {...props}
      >
        {label}
      </button>
    )
  }
)
Chip.displayName = "Chip"

export { Chip }
