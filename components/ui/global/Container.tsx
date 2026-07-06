import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) =>  {
  return <section className={`${className}  min-h-full`}>{children}</section>;
}

