import clsx from "clsx";
import NextLink from "next/link";

import { LinkProps } from "@/types";
import { typographyClassesMapper } from "@/utils";

export const Link = <T,>({
  variant = "body",
  className,
  children,
  ...props
}: LinkProps<T>) => {
  const appliedClasses = clsx(typographyClassesMapper[variant], className);
  return (
    <NextLink {...props} className={appliedClasses}>
      {children}
    </NextLink>
  );
};
