import React from "react";

import { TableProps, TableRowBase } from "@/types/table";
import { TableBodyCell } from "./TableCell";

export const TableBody = <T extends TableRowBase>({
  data,
  columns,
}: TableProps<T>) => {
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => {
            return (
              <TableBodyCell key={column.header} row={row} column={column} />
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
