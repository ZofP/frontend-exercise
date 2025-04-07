import clsx from "clsx";

import { TypographyProps } from "@/types/ui";
import { typographyClassesMapper } from "@/utils";
import { isHeadingVariant } from "./utils";

/**
 * A typography helper component that renders text with a specific variant (e.g. `h1`, `body`, `small`).
 *
 * @example
 * <Typography variant="h1">Heading 1</Typography>
 * <Typography variant="body">This is a regular paragraph</Typography>
 */
export const Typography = ({
  variant = "body",
  children,
  className,
  ...props
}: TypographyProps) => {
  const appliedClasses = clsx(typographyClassesMapper[variant], className);
  if (isHeadingVariant(variant)) {
    const Tag = variant;
    return (
      <Tag className={appliedClasses} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <p className={appliedClasses} {...props}>
      {children}
    </p>
  );
};
