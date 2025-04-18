import { ReactNode } from "react";

export type TableColumn<T> = {
  header: string;
  accessor: keyof T;
  align?: TableCellAlignment;
  render?: (value: T[keyof T], row: T) => ReactNode;
};

export type TableRowBase = Record<"id", string>;

export interface TableProps<T extends TableRowBase> {
  data: T[];
  columns: TableColumn<T>[];
}

export type TableCellType = "header" | "body";

export type TableCellAlignment = "left" | "center" | "right";
