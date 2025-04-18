import { InputHTMLAttributes } from "react";
import clsx from "clsx";

export const Checkbox = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="checkbox"
      className={clsx("w-13 h-13", className)}
      {...props}
    />
  );
};
