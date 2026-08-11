import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef, HTMLAttributes } from "react";

type ActiveProps = {
  inactive?: false;
} & ComponentPropsWithoutRef<typeof Link>;

type InactiveProps = {
  inactive: true;
} & HTMLAttributes<HTMLDivElement>;

type Props = ActiveProps | InactiveProps;

export const SurfaceLink = (props: Props) => {
  const baseClassName =
    "flex items-center justify-between whitespace-nowrap rounded-full cursor-pointer size-full p-4 font-semibold ";

  const inactiveBaseClassName =
    "flex items-center justify-center whitespace-nowrap rounded-full px-4 py-3 mb-4  font-semibold max-w-45 min-w-16 gap-2";

  if (props.inactive) {
    const { className, children, ...rest } = props;

    return (
      <div className={cn(inactiveBaseClassName, className)} {...rest}>
        {children}
      </div>
    );
  }

  const { className, children, href, ...rest } = props;

  return (
    <Link href={href} className={cn(baseClassName, className)} {...rest}>
      {children}
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
