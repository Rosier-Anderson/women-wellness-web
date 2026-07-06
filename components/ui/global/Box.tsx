import React from "react";

export const  Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) =>  {
  return <div className={`${className}`}>{children}</div>;
}

export default Box;
