import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

export default function Button({ className, title, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-primary rounded-full px-4 py-3 text-white font-semibold",
        className,
      )}
      {...rest}
    >
      {title}
    </button>
  );
}
