import { type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "~/lib/utils"
import { chipVariants } from "./styles"

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipVariants> {
  label: string
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, variant, active, label, ...props }, ref) => {
    return (
      <button
        className={cn(chipVariants({ variant, active, className }))}
        ref={ref}
        {...props}
      >
        {label}
      </button>
    )
  }
)
Chip.displayName = "Chip"

export { Chip, chipVariants }
