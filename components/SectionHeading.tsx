import React from "react";
import { GoDotFill } from "react-icons/go";
import { cn } from "@/lib/utils";
import { SurfaceLink } from "./ui/global/SurfaceLink";


interface SectionHeadingProps {
  badge?: string;
  title?: React.ReactNode;
  desc?: string;
  className?: string;
  titleClassName?: string;
  descClassName?: string;
}

export function SectionHeading({
  badge,
  title,
  desc,
  titleClassName,
  descClassName,
}: SectionHeadingProps) {
  return (
    <>
      {badge && (
        <SurfaceLink inactive className=" flex bg-secondary text-primary ">
          <GoDotFill className="dot" />
          {badge}
        </SurfaceLink>
      )}

      {title && <h1 className={cn(titleClassName)}> {title}</h1>}
      {desc && <p className={cn(descClassName)}>{desc}</p>}
    </>
  );
}
