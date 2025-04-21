"use client";

import { PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import clsx from "clsx";

import { HookFormMarkdownEditor } from "./HookFormMarkdownEditor";
import { HookFormSubmitButton } from "./HookFormSubmitButton";
import { HookFormTextInput } from "./HookFormTextInput";

interface HookFormProps<TFieldValues extends FieldValues = FieldValues>
  extends UseFormReturn<TFieldValues>,
    PropsWithChildren {
  submitHandler: SubmitHandler<TFieldValues>;
  className?: string;
}

const HookForm = <TFieldValues extends FieldValues = FieldValues>({
  children,
  submitHandler,
  className,
  ...methods
}: HookFormProps<TFieldValues>) => {
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form
        className={clsx("flex flex-col gap-24", className)}
        onSubmit={handleSubmit(submitHandler)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

HookForm.TextInput = HookFormTextInput;
HookForm.MarkdownEditor = HookFormMarkdownEditor;
HookForm.SubmitButton = HookFormSubmitButton;
export { HookForm };
