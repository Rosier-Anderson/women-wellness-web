import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...rest }: InputProps) {
  return <input required className={cn( "rounded-full w-full bg-white p-2 h-14 text-lg outline-none", className)} {...rest} />;
}
