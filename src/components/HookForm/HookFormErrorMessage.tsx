import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { FormFieldName } from "@/types";

interface HookFormErrorMessageProps {
  name: FormFieldName;
}

export const HookFormErrorMessage = ({ name }: HookFormErrorMessageProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className="text-danger">{message}</p>}
    />
  );
};
