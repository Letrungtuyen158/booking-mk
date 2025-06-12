import * as React from "react";
import { cn } from "@/lib/utils";

interface DashedSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const DashedSeparator = React.forwardRef<HTMLDivElement, DashedSeparatorProps>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cn("relative flex items-center w-full", className)}
      ref={ref}
      {...props}
    >
      {children ? (
        <>
          <div className="flex-grow border-t border-dashed border-border"></div>
          {children}
          <div className="flex-grow border-t border-dashed border-border"></div>
        </>
      ) : (
        <div className="flex-grow border-t border-dashed border-border"></div>
      )}
    </div>
  ),
);

DashedSeparator.displayName = "DashedSeparator";

export { DashedSeparator };
