import { TypographyVariant } from "../Typography.types";

export const typographyClassesMapper: Record<TypographyVariant, string> = {
  h1: "text-[40px] leading-[48px]",
  h2: "text-[32px] leading-[38px]",
  h3: "text-[28px] leading-[32px]",
  h4: "text-[24px] leading-[28px]",
  h5: "text-[20px] leading-[24px]",
  h6: "text-[16px] leading-[20px]",
  "lead-blockquote": "text-[20px] leading-[30px]",
  body: "text-[16px] leading-[24px]",
  "body-bold": "text-[16px] leading-[24px] font-bold",
  "body-xl": "text-[20px] leading-[170px]", // double-checked; long line-height
  "body-underlined": "text-[16px] leading-[24px] underline",
  "body-italics": "text-[16px] leading-[24px] italic",
  small: "text-[14px] leading-[20px]",
  tiny: "text-[12px] leading-[20px]",
};
