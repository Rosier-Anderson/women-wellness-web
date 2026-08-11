import React from "react";
import { SurfaceLink } from "../ui/global/SurfaceLink";
import { MdArrowRightAlt } from "react-icons/md";
import { IconType } from "react-icons/lib";

type CardProps = {
  icon: IconType;
  heading: string;
  description: string;
  btn_label: string;
};
function Card({ icon: Icon, heading, description, btn_label }: CardProps) {
  return (
    <article
      id="card-app"
      className=" flex flex-col gap-10 bg-secondary rounded-2xl p-8 last:bg-primary last:[&_h1]:text-white  last:[&>svg]:text-white last:[&_a]:text-white"
    >
      <Icon className="text-4xl text-primary " />
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl ">{heading}</h1>
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
