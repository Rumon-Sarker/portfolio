
import * as React from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    isLoading?: boolean;
}


const base =
    "inline-flex items-center justify-center gap-2 rounded-[5px] font-normal transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-input bg-transparent hover:bg-primary hover:text-white",
    ghost: "bg-transparent hover:bg-accent hover:text-white",
};

const sizes: Record<Size, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-6 text-base",
};

export function Button({
    className,
    variant = "primary",
    size = "md",
    isLoading,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={[
                base,
                variants[variant],
                sizes[size],
                className || ""
            ].join(" ")}
            aria-busy={isLoading || undefined}
            {...props}
        >
            {isLoading ? (
                <span
                    aria-hidden="true"
                    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
                />
            ) : null}
            {children}
        </button>
    );
}
