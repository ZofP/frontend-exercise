import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseControllerProps } from "react-hook-form";

export type FormFieldName = "username" | "password";

export enum FormInputErrorMessageTypeEnum {
  ThisFieldIsRequired = "errors.thisFieldIsRequired",
  WrongCredentials = "errors.wrongCredentials",
}

export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  className?: string;
}

export interface HookFormTextInputProps
  extends Omit<TextInputProps, "name">,
    UseControllerProps {
  defaultValue?: string;
  name: FormFieldName;
}
