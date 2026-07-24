import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Box from "../ui/global/Box";
import { SurfaceLink } from "../ui/global/SurfaceLink";
import { SplitLayoutProps } from "@/types";

export function SplitLayout({
  badge,
  title,
  heading,
  subHeading,
  description,
  image,
  primaryButton,
  secondaryButton,
  containerClassName,
  boxClassName,
}: SplitLayoutProps) {
  return (
    <div className={cn(containerClassName, "flex flex-col gap-2 lg:flex-row")}>
      <Box className={cn(boxClassName, "flex flex-1 flex-col gap-2")}>
        {badge && (
          <SurfaceLink
            inactive
            className="bg-secondary text-primary mt-6 mb-4 w-fit"
          >
            <GoDotFill className="icon-app" />
            {badge}
          </SurfaceLink>
        )}

        {heading}
        {subHeading}
        {description}

        <SurfaceLink
          href={primaryButton.href}
          className="bg-primary text-white"
        >
          <span>{primaryButton.label}</span>
          <MdArrowRightAlt className="icon-app" />
        </SurfaceLink>

        {secondaryButton && (
          <SurfaceLink
            href={secondaryButton.href}
            className="text-primary text-md"
          >
            {secondaryButton.label}
            <MdArrowRightAlt className="icon-app" />
          </SurfaceLink>
        )}
      </Box>
      {image && (
        <Box className="relative h-80 w-full lg:flex-1">
          <Image
            src={image}
            alt={title ? title : ""}
            fill
            className="rounded-2xl object-cover"
          />
        </Box>
      )}
    </div>
  );
}

{
  /* <HeroSection
  badge="Why We're Best?"
  heading={
    <>
      Empower Your Body,
      <wbr />
      <span className="text-primary block">Elevate Your Mind</span>
    </>
  }
  description={
    <>
      Join us in transforming your body and mind
      <wbr /> through our yoga and fitness programs.
    </>
  }
  image="/assets/images/gemini_hero_section.jpg"
  primaryButton={{
    label: "Become a member",
    href: "/",
  }}
  secondaryButton={{
    label: "Our classes",
    href: "/classes",
  }}
/> */
}
