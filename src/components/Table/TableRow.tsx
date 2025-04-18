import { ReactNode } from "react";

type TableRowProps = {
  children: ReactNode;
};

export const TableRow = ({ children }: TableRowProps) => {
  return <tr>{children}</tr>;
};
