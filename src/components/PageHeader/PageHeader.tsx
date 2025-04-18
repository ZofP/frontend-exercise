import React, { HTMLAttributes } from "react";
import clsx from "clsx";

import { Typography } from "../Typography";

interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
  title: string;
}

export const PageHeader = ({
  title,
  className,
  children,
  ...props
}: PageHeaderProps) => {
  return (
    <header className={clsx("flex gap-24 items-center", className)} {...props}>
      <Typography variant="h1" className="[&&]:leading-40">
        {title}
      </Typography>
      {children}
    </header>
  );
};
