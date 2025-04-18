import { TableProps, TableRowBase } from "@/types/table";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const Table = <T extends TableRowBase>({
  data,
  columns,
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full">
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  );
};
