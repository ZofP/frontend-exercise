import { useMemo } from "react";

import { TableColumn, TableRowBase } from "@/types/table";
import { TableGenericCell } from "../TableGenericCell";

interface TableBodyCellProps<T extends TableRowBase> {
  row: T;
  column: TableColumn<T>;
}

export const TableBodyCell = <T extends TableRowBase>({
  row,
  column: { accessor, align, render },
}: TableBodyCellProps<T>) => {
  const value = row[accessor];

  const content = useMemo(() => {
    if (render) {
      return render(value, row);
    }
    return String(value ?? "");
  }, [render, row, value]);

  return <TableGenericCell align={align}>{content}</TableGenericCell>;
};
