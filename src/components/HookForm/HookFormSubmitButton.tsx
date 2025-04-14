import React from "react";

import { ButtonProps } from "@/types";
import { Button } from "../Button";

export const HookFormSubmitButton = (props: ButtonProps) => {
  return <Button type="submit" {...props} />;
};
