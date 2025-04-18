import { TableColumn } from "@/types/table";
import { SortIndicatorIcon } from "../../icons";
import { TableGenericCell } from "../TableGenericCell";

interface TableHeaderProps<T> {
  columns: TableColumn<T>[];
}

export const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => {
  return (
    <thead className="border-b border-table-border ">
      <tr>
        {columns.map(({ header, align, disableSort, renderHeaderCell }) => (
          <TableGenericCell type="header" key={header} align={align}>
            <div className="flex items-center gap-4">
              {renderHeaderCell?.() ?? header}
              {!disableSort && (
                <button>
                  <SortIndicatorIcon />
                </button>
              )}
            </div>
          </TableGenericCell>
        ))}
      </tr>
    </thead>
  );
};
