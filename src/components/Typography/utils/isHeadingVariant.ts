import { TypographyHeadingVariant } from "@/types";

const allowedVariants = ["h1", "h2", "h3", "h4", "h5", "h6"];

export const isHeadingVariant = (
  variant: string
): variant is TypographyHeadingVariant => allowedVariants.includes(variant);
