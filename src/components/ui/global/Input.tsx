import { cn } from "@/lib/utils";
import React from "react";

type InputProps = React.ComponentProps<"input">;

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      required
      className={cn(
        "rounded-full w-full bg-white p-2 h-14 text-lg disabled:opacity-60 disabled:cursor-not-allowed",
        className,
      )}
      {...rest}
    />
  );
}
