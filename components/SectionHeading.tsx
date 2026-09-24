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
  /** Heading level for `title`. Use "h1" only for the single main heading of a page. */
  as?: "h1" | "h2";
}

export function SectionHeading({
  badge,
  title,
  desc,
  titleClassName,
  descClassName,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <>
      {badge && (
        <SurfaceLink inactive className=" flex bg-secondary text-accent ">
          <GoDotFill className="dot" />
          {badge}
        </SurfaceLink>
      )}

      {title && <Heading className={cn(titleClassName)}> {title}</Heading>}
      {desc && <p className={cn(descClassName)}>{desc}</p>}
    </>
  );
}
