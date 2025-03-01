import * as React from "react";
import { cn } from "@/lib/utils";

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Steps({ children, className, ...props }: StepsProps) {
  const childrenArray = React.Children.toArray(children);
  const stepsCount = childrenArray.length;

  return (
    <div className={cn("steps", className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child as React.ReactElement<StepProps>, {
          stepNumber: index + 1,
          isLast: index === stepsCount - 1,
        });
      })}
    </div>
  );
}

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  stepNumber?: number;
  isLast?: boolean;
}

export function Step({
  children,
  className,
  stepNumber,
  isLast,
  ...props
}: StepProps) {
  return (
    <div
      className={cn(
        "step relative pl-10 pb-8",
        {
          "after:absolute after:left-4 after:top-10 after:h-full after:w-px after:bg-border":
            !isLast,
        },
        className
      )}
      {...props}
    >
      <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border bg-background text-center">
        {stepNumber}
      </div>
      <div className="step-content">{children}</div>
    </div>
  );
}
