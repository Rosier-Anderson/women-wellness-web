import React from "react";
import Input from "./Input";
import Box from "./Box";
import {cn} from "@/lib/utils";
interface FormInputProps extends React.ComponentProps<"input"> {
  label: string;
  error?: React.ReactNode;
}
const FormInput = ({label, id, error, ...rest}: FormInputProps) => {
  return (
    <Box className="flex flex-col gap-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <Input
        id={id}
        aria-invalid={!!error}
        autoComplete="off"
        className={cn(
          "w-full bg-white px-4 py-2 h-14 text-lg",
          error && "ring-2 ring-red-500",
        )}
        {...rest}
      />
      {error && (
        <span
          role="alert"
          aria-live="assertive"
          className="text-sm text-red-500">
          {error}
        </span>
      )}
    </Box>
  );
};
export default FormInput;
