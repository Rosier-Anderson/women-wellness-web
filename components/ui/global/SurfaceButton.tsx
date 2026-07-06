import React from "react";

export const  SurfaceButton = ({
  children,
  classname,
}: {
  classname?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`rounded-3xl px-1  ${classname}`}>
      {children}
    </div>
  );
}
