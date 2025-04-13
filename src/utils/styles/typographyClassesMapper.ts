import { TypographyVariant } from "@/types";

export const typographyClassesMapper: Record<TypographyVariant, string> = {
  h1: "text-[40px] leading-48",
  h2: "text-[32px] leading-38",
  h3: "text-[28px] leading-32",
  h4: "text-[24px] leading-28",
  h5: "text-[20px] leading-24",
  h6: "text-[16px] leading-20",
  "lead-blockquote": "text-[20px] leading-30",
  body: "text-[16px] leading-24",
  "body-bold": "text-[16px] leading-24 font-bold",
  "body-xl": "text-[20px] leading-170",
  "body-underlined": "text-[16px] leading-24 underline",
  "body-italics": "text-[16px] leading-24 italic",
  small: "text-[14px] leading-20",
  tiny: "text-[12px] leading-20",
};
