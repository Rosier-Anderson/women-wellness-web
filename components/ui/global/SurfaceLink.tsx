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
    "flex items-center justify-between whitespace-nowrap rounded-full cursor-pointer size-full p-4 font-semibold transition-opacity hover:opacity-90 active:opacity-80 ";

  const inactiveBaseClassName =
  "flex w-fit items-center justify-center whitespace-nowrap rounded-full px-4 py-3 mb-4 font-semibold gap-2";
  if (props.inactive) {
    const { className, children, inactive: _inactive, ...rest } = props;

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
