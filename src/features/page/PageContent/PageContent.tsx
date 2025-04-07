import React, { HTMLAttributes } from "react";
import clsx from "clsx";

import { ThinContentWrapper } from "@/components";

type PageContentProps = HTMLAttributes<HTMLDivElement>;

export const PageContent = ({
  children,
  className,
  ...props
}: PageContentProps) => {
  return (
    <div className={clsx("flex justify-center", className)} {...props}>
      <ThinContentWrapper>{children}</ThinContentWrapper>
    </div>
  );
};
