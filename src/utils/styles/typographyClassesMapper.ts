import { TypographyParagraphVariant } from "@/types";

export const typographyClassesMapper: Record<
  TypographyParagraphVariant,
  string
> = {
  "lead-blockquote": "text-[20px] leading-30",
  body: "text-[16px] leading-24",
  "body-bold": "text-[16px] leading-24 font-bold",
  "body-xl": "text-[20px] leading-170",
  "body-underlined": "text-[16px] leading-24 underline",
  "body-italics": "text-[16px] leading-24 italic",
  small: "text-[14px] leading-20",
  tiny: "text-[12px] leading-20",
};
