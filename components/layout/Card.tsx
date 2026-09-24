import React from "react";
import { SurfaceLink } from "../ui/global/SurfaceLink";
import { MdArrowRightAlt } from "react-icons/md";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";

type CardProps = {
  icon: IconType;
  heading: string;
  description: string;
  btn_label: string;
  className?: string
};
function Card({ icon: Icon, heading, description, btn_label, className }: CardProps) {
  return (
    <article
      className={cn(" flex flex-col gap-10 bg-secondary rounded-2xl p-8 transition-colors last:bg-primary last:[&_h3]:text-text-primary  last:[&>svg]:text-text-primary last:[&_a]:text-text-primary [&>article:nth-child(2)]:row-span-3", className)}
    >
      <Icon className="text-4xl text-primary " />
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl ">{heading}</h3>
        <p className="text-balance leading-5 text-[15px] font-semibold ">
          {description}
        </p>
        <SurfaceLink
          href="/"
          className="pl-0 justify-start gap-4 text-primary "
        >
          {btn_label} <MdArrowRightAlt className="icon-app" />
        </SurfaceLink>{" "}
      </div>
    </article>
  );
}

export default Card;
