import React from "react";
import Input from "./Input";
import Box from "./Box";
import { cn } from "@/lib/utils";
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function FormInput({ label, id, ...rest }: FormInputProps) {
  return (
    <Box className="flex flex-col gap-3">
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        className={cn("w-full bg-white px-4 py-2 h-14 text-lg")}
        {...rest}
      />
    </Box>
  );
}
