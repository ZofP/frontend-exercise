import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { HookFormMarkdownEditorProps } from "@/types";
import { MarkdownEditor } from "../MarkdownEditor";
import { Typography } from "../Typography";
import { HookFormErrorMessage } from "./HookFormErrorMessage";

export const HookFormMarkdownEditor = ({
  name,
  label,
  ...props
}: HookFormMarkdownEditorProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <div className="flex flex-col">
          <div className="flex flex-col gap-8">
            {label && <Typography>{label}</Typography>}
            <MarkdownEditor value={value} onChange={onChange} {...props} />
          </div>
          <HookFormErrorMessage name={name} />
        </div>
      )}
    />
  );
};
