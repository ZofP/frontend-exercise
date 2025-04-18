import { ReactNode } from "react";
import clsx from "clsx";

import { TableCellAlignment, TableCellType } from "@/types/table";
import { tableCellAlignmentMapper } from "@/utils";

interface TableCellProps {
  children: ReactNode;
  align?: TableCellAlignment;
  type?: TableCellType;
}

export const TableGenericCell = ({
  children,
  align = "left",
  type = "body",
}: TableCellProps) => {
  const alignment = tableCellAlignmentMapper[align];
  const isBody = type === "body";
  const Tag = isBody ? "td" : "th";

  return (
    <Tag
      className={clsx(
        "p-12 gap-4 h-48 max-h-48",
        alignment,
        !isBody && "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
