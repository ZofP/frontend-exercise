"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { TypographyLink } from "@/components";
import { LinkProps } from "@/types";

export const NavbarLink = <T,>({ href, ...props }: LinkProps<T>) => {
  const pathname = usePathname();

  return (
    <TypographyLink
      href={href}
      {...props}
      className={clsx([
        "text-secondary",
        { "[&&]:text-body": pathname === href },
      ])}
    />
  );
};
