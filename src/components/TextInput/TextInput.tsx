"use client";

import clsx from "clsx";

import { TextInputProps } from "@/types";
import { Typography } from "../Typography";

export const TextInput = ({ label, className, ...props }: TextInputProps) => {
  return (
    <div className="flex flex-col gap-8">
      {label && <Typography>{label}</Typography>}
      <input
        className={clsx(
          "border border-border-light rounded-sm h-36 px-12 py-6 outline-none",
          className
        )}
        {...props}
      />
    </div>
  );
};
