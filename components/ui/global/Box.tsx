import { cn } from "@/lib/utils";
import React from "react";
interface BoxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
export const Box = ({ className, ...rest }: BoxProps) => {
  const baseClasseName = "";
  return (
    <div id="Box-app" className={cn(baseClasseName, className)} {...rest}>
      {rest.children}
    </div>
  );
};

export default Box;
