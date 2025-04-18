import { ReactNode } from "react";
import clsx from "clsx";

import { TableCellAlignment } from "@/types/table";
import { tableCellAlignmentMapper } from "@/utils";

interface TableHeaderCellProps {
  children: ReactNode;
  align?: TableCellAlignment;
}

export const TableHeaderCell = ({
  children,
  align = "left",
}: TableHeaderCellProps) => {
  const alignment = tableCellAlignmentMapper[align];

  return <th className={clsx("p-3 font-medium", alignment)}>{children}</th>;
};
