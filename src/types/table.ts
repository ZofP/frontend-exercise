import { ReactNode } from "react";

export type TableColumn<T> = {
  header: string;
  accessor: keyof T;
  align?: TableCellAlignment;
  renderBodyCell?: (value: T[keyof T], row: T) => ReactNode;
  renderHeaderCell?: () => ReactNode;
  disableSort?: boolean;
};

export type TableRowBase = Record<"id", string>;

export interface TableProps<T extends TableRowBase> {
  data: T[];
  columns: TableColumn<T>[];
}

export type TableCellType = "header" | "body";

export type TableCellAlignment = "left" | "center" | "right";
