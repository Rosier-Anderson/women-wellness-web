import React from "react";
import Box from "./global/Box";
import { SurfaceLink } from "./global/SurfaceLink";
import { GoDotFill } from "react-icons/go";
import { cn } from "@/lib/utils";
type SectionHeaderProps = {
  btnText: string;
  title: string;
  description: string;
  className: string;
};
export default function SectionHeader({
  btnText,
  title,
  description,
  className,
}: SectionHeaderProps) {
  const baseClassName = "flex lg:flex-1 flex-col gap-2";
  return (
    <Box className={cn(baseClassName, className)}>
      <SurfaceLink
        inactive
        className="bg-secondary w-40 text-primary mt-6 mb-4"
      >
        <GoDotFill className="-icon-app" />
    {btnText}
      </SurfaceLink>
      <h1 className="text-4-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl whitespace-nowrap">
        Empower Your Body,
        <wbr />
        <span className="block text-primary ">Elevate Your Mind</span>
      </h1>

      <p className="flex-1 min-w-0 text-xl leading-relaxed">
        Join us in transforming your body and mind
        <wbr /> through our yoga and fitness programs.
      </p>
    </Box>
  );
}
