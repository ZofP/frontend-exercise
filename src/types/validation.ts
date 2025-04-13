import z from "zod";

import { FormInputErrorMessageTypeEnum } from "./form";
import { TFunction } from "./translation";

export const requiredStringSchema = <T extends TFunction>(t: T) =>
  z
    .string()
    .min(1, { message: t(FormInputErrorMessageTypeEnum.ThisFieldIsRequired) });

export type RequiredStringSchema = z.infer<
  ReturnType<typeof requiredStringSchema>
>;
