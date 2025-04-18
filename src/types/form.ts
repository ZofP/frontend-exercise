import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseControllerProps } from "react-hook-form";
import { MDEditorProps } from "@uiw/react-md-editor";

export type FormFieldName =
  | "username"
  | "password"
  | "title"
  | "perex"
  | "content";

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
export interface HookFormMarkdownEditorProps extends MDEditorProps {
  name: FormFieldName;
  label?: string;
}
