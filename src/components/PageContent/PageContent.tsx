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
    <main className={clsx("flex justify-center pt-64", className)} {...props}>
      <ThinContentWrapper>{children}</ThinContentWrapper>
    </main>
  );
};
