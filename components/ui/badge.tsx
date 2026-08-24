import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-1 focus:ring-ring select-none",
  {
    variants: {
      variant: {
        default:
          "border border-[rgba(153,102,204,0.45)] bg-[rgba(153,102,204,0.18)] text-[#E7D6F6] backdrop-blur-sm",
        amethyst:
          "border border-[#7A4FA6] bg-[#9966CC] text-[#0B0E1A] font-bold shadow-sm",
        gold:
          "border border-[rgba(153,102,204,0.45)] bg-[rgba(153,102,204,0.18)] text-[#E7D6F6] backdrop-blur-sm",
        secondary:
          "border border-[rgba(255,255,255,0.15)] bg-cosmic-800/80 text-slate-200",
        outline:
          "border border-[rgba(153,102,204,0.4)] bg-[rgba(11,14,26,0.6)] text-[#D5B7EE]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
