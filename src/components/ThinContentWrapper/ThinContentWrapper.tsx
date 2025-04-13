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
      className={clsx("flex items-center justify-between", className)}
      style={{ width: `calc(100% - 2 * ${sideMargin}px)` }}
      {...props}
    />
  );
};
