import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amethyst-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        default:
          "btn-editorial-primary",
        outline:
          "btn-editorial-outline",
        secondary:
          "bg-cosmic-800 text-slate-200 hover:bg-cosmic-700 border border-cosmic-700/60",
        ghost:
          "text-slate-300 hover:bg-amethyst-500/10 hover:text-amethyst-300 rounded-lg",
        glass:
          "glass-panel text-amethyst-300 hover:bg-amethyst-500/15 border-amethyst-500/40 rounded-lg",
        link: "text-amethyst-400 underline-offset-4 hover:underline tracking-normal",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-lg px-7 text-sm font-semibold tracking-wide",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
