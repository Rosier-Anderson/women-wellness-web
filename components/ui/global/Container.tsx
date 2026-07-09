import { cn } from "@/lib/utils";
import React from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {}
export const Container = ({ className, ...rest }: Props) => {
  const baseClassName = "";
  return (
    <section id="Container-app" className={cn(baseClassName, className)} {...rest}>
      {rest.children}
    </section>
  );
};
