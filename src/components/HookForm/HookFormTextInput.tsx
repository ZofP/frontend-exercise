"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

import { HookFormTextInputProps } from "@/types";
import { TextInput } from "../TextInput";
import { HookFormErrorMessage } from "./HookFormErrorMessage";

export const HookFormTextInput = (props: HookFormTextInputProps) => {
  const { name } = props;
  const { register } = useFormContext();

  return (
    <div className="flex flex-col">
      <TextInput {...register(name)} {...props} />
      <HookFormErrorMessage name={name} />
    </div>
  );
};
