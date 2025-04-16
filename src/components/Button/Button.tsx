import React from "react";
import clsx from "clsx";

import { ButtonProps } from "@/types";

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-primary text-white px-12 py-6 cursor-pointer",
        className
      )}
      {...props}
    />
  );
};
