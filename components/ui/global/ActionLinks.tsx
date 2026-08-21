import React from "react";
import Box from "./Box";
import { SurfaceLink } from "./SurfaceLink";
import { MdArrowRightAlt } from "react-icons/md";
import { cn } from "@/lib/utils";

type ActionLinks = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type ActionLinksProps = {
  links: ActionLinks[];
};
export default function ActionLinks({ links }: ActionLinksProps) {
  return (
    <>
      {" "}
      {links.map((link) => {
        return (
          <SurfaceLink
            key={link.href}
            href={link.href}
            className={cn(
              "max-h-20",
              link.variant === "primary"
                ? "bg-primary text-white"
                : "text-primary",
            )}
          >
            {link.label} <MdArrowRightAlt className="icon-app" />
          </SurfaceLink>
        );
      })}
    </>
  );
}
//  <SurfaceLink href="/" className=" bg-primary text-white max-h-20">
//         Become a member <MdArrowRightAlt className="icon-app" />
//       </SurfaceLink>
//       <SurfaceLink href="/" className=" text-primary max-h-20">
//         Our classes <MdArrowRightAlt className="icon-app" />
//       </SurfaceLink>
