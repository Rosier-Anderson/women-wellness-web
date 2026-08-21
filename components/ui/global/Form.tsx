import { cn } from "@/lib/utils";
import React from "react";
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export default function Form({ className, children, ...rest }: FormProps) {
  return (
    <form
      className={cn(
        "space-y-3 bg-secondary rounded-2xl w-sm sm:w-2xl p-8 mt-10",
        className,
      )}
      {...rest}
    >
      {children}
    </form>
  );
}
