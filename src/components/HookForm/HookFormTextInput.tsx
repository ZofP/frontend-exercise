"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { HookFormTextInputProps } from "@/types";
import { TextInput } from "../TextInput";

export const HookFormTextInput = (props: HookFormTextInputProps) => {
  const { name } = props;
  const {
    formState: { errors },
    register,
  } = useFormContext();

  console.log({ errors });

  return (
    <div className="flex flex-col">
      <TextInput {...register(name)} {...props} />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-danger">{message}</p>}
      />
    </div>
  );
};
