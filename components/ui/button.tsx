import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground shadow-lg hover:opacity-90 active:scale-95 transition-all",
      outline: "border border-gray-200 bg-white hover:bg-gray-50 active:scale-95 transition-all",
      ghost: "hover:bg-gray-100 active:scale-95 transition-all",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-95 transition-all",
    }

    const sizes = {
      default: "h-14 px-8 py-2 rounded-2xl font-semibold text-lg",
      sm: "h-10 px-4 rounded-xl text-sm font-medium",
      lg: "h-16 px-10 rounded-3xl text-xl font-bold",
      icon: "h-12 w-12 rounded-full flex items-center justify-center",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
