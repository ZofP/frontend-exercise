"use client";

import { PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

import { HookFormSubmitButton } from "./HookFormSubmitButton";
import { HookFormTextInput } from "./HookFormTextInput";

interface HookFormProps<TFieldValues extends FieldValues = FieldValues>
  extends UseFormReturn<TFieldValues>,
    PropsWithChildren {
  submitHandler: SubmitHandler<TFieldValues>;
}

const HookForm = <TFieldValues extends FieldValues = FieldValues>({
  children,
  submitHandler,
  ...methods
}: HookFormProps<TFieldValues>) => {
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-24"
        onSubmit={handleSubmit(submitHandler)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

HookForm.TextInput = HookFormTextInput;
HookForm.SubmitButton = HookFormSubmitButton;
export { HookForm };
