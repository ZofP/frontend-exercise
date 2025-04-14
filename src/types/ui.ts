import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";
import { LinkProps as NextLinkProps } from "next/link";

export type TypographyHeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TypographyParagraphVariant =
  | "lead-blockquote"
  | "body"
  | "body-bold"
  | "body-xl"
  | "body-underlined"
  | "body-italics"
  | "small"
  | "tiny";

export type TypographyVariant =
  | TypographyHeadingVariant
  | TypographyParagraphVariant;

export interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  children: ReactNode;
  variant?: TypographyVariant;
}

export interface LinkProps<T>
  extends NextLinkProps<T>,
    HTMLAttributes<HTMLAnchorElement>,
    // Reusing classes mapping from `Typography`
    Pick<TypographyProps, "variant"> {
  className?: string;
}

export interface GenericPageProps<T extends Record<string, string>> {
  params: Promise<T>;
}

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
