import { TypographyVariant } from "@/types";

export const typographyClassesMapper: Record<TypographyVariant, string> = {
  h1: "text-40 leading-48",
  h2: "text-32 leading-38",
  h3: "text-28 leading-32",
  h4: "text-24 leading-28",
  h5: "text-20 leading-24",
  h6: "text-16 leading-20",
  "lead-blockquote": "text-20 leading-30",
  body: "text-16 leading-24",
  "body-bold": "text-16 leading-24 font-bold",
  "body-xl": "text-20 leading-170",
  "body-underlined": "text-16 leading-24 underline",
  "body-italics": "text-16 leading-24 italic",
  small: "text-14 leading-20",
  tiny: "text-12 leading-20",
};
