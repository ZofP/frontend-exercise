import { HTMLAttributes } from "react";
import clsx from "clsx";

interface ThinContentWrapperProps extends HTMLAttributes<HTMLDivElement> {
  sideMargin?: number;
}

export const ThinContentWrapper = ({
  sideMargin = 224,
  className,
  ...props
}: ThinContentWrapperProps) => {
  return (
    <div
      className={clsx(
        `flex w-[calc(100%-2*${sideMargin}px)] items-center justify-between`,
        className
      )}
      {...props}
    />
  );
};
