import React from "react";
import {cn} from "@/lib/utils";
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const SurfaceButton = ({className, ...rest}: Props) => {
  const baseClassName = "flex items-center justify-center whitespace-nowrap rounded-full px-1 ";
  return (
    <div
      id="surfaceButton-app"
      className={cn(baseClassName, className)}
      {...rest}>
      {rest.children}
    </div>
  );
};
