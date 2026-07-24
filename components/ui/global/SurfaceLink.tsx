import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props =
  | ({
      inactive: true;
      href?: never;
    } & React.HTMLAttributes<HTMLDivElement>)
  | ({
      inactive?: false;
      href: string;
    } & React.HTMLAttributes<HTMLAnchorElement>);

export const SurfaceLink = ({ inactive, href, className, ...rest }: Props) => {
  const baseClassName =
    "flex items-center justify-between whitespace-nowrap rounded-full cursor-pointer size-full p-4 font-medium";

  const inactiveBaseClassName =
    "flex items-center justify-center whitespace-nowrap rounded-full p-3 font-semibold";

  if (inactive) {
    return (
      <div
        id="inactiveSurfaceLink-app"
        className={cn(inactiveBaseClassName, className)} 
      >
        {rest.children}
      </div>
    );
  }

  return ( 
    <Link
      href={href}
      id="SurfaceLink-app"
      className={cn(baseClassName, className)}
      {...rest}
    >
      {rest.children}
    </Link>
  );
};
{
  /* <SurfaceButton className="bg-primary text-white text-md  ">
          <button className="bg-amber-950 flex items-center justify-between size-full   whitespace-nowrap cursor-pointer ">
            <span className=""> Become a member</span>
            <MdArrowRightAlt className="" />
          </button>
        </SurfaceButton> */
}
