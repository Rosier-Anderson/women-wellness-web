import React from "react";
import Box from "./global/Box";
import { SurfaceLink } from "./global/SurfaceLink";
import { GoDotFill } from "react-icons/go";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  btnText: string;
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
};

export const SectionHeader = ({
  btnText,
  title,
  description,
  className,
}: SectionHeaderProps) => {
  return (
    <Box className={cn("flex lg:flex-1 flex-col gap-2", className)}>
      <SurfaceLink
        inactive
        className="bg-secondary w-fit text-primary mt-6 mb-4"
      >
        <GoDotFill className="-icon-app" />
        {btnText}
      </SurfaceLink>

      <h1 className="text-4-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl">
        {title}
      </h1>

      <p className="flex-1 min-w-0 text-xl leading-relaxed text-center ">
        {description}
      </p>
    </Box>
  );
};
