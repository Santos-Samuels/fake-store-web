import { cva } from "class-variance-authority";

export const chipVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      active: {
        true: "bg-primary text-primary-foreground hover:bg-primary/90 border-transparent",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      active: false,
    },
  }
);
