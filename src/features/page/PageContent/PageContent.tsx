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
    <section
      className={clsx("flex justify-center pt-[64px]", className)}
      {...props}
    >
      <ThinContentWrapper>{children}</ThinContentWrapper>
    </section>
  );
};
