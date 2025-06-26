import TableLoader from "@/components/common/loader/table-loader";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Pagination from "./pagination";

const DataTable = ({
  data,
  columns,
  pagination = true,
  totalItems,
  loader,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="h-full flex flex-col rounded-3xl bg-bg-3 overflow-hidden">
      <ScrollArea className="flex-1 rounded-t-[15px] overflow-auto shadow-none">
        {!loader ? (
          <>
            <Table className="sticky top-0">
              <TableHeader className="bg-bg-2">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="flex border-none">
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead
                          key={header.id}
                          style={
                            header.getSize() === 150
                              ? { width: "100%" }
                              : { minWidth: header.getSize() + "px" }
                          }
                          className={cn(
                            "h-max py-4 sm:py-[18px] px-4 sm:px-6 text-sm md:text-base text-text-1",
                            header.id.includes("-align-center")
                              ? "text-center"
                              : ""
                          )}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
            </Table>

            <Table>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="flex items-center border-b border-[#282929]"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          style={
                            cell.column.getSize() === 150
                              ? { width: "100%" }
                              : { minWidth: cell.column.getSize() + "px" }
                          }
                          className="py-4 px-4 sm:px-6 text-sm sm:text-base text-text-1"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow className="hover:bg-white ">
                    <TableCell
                      colSpan={columns.length}
                      className="w-full h-[65vh] flex text-secondary justify-center items-center text-xl"
                    >
                      Data Not Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </>
        ) : (
          <div className="flex justify-center items-center h-full">
            <TableLoader className="text-2xl" />
          </div>
        )}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {pagination && !loader && <Pagination totalRecords={totalItems} />}
    </div>
  );
};

export default DataTable;
