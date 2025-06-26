import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

const TableLoader = ({ className }) => {
  return (
    <Loader className={cn("small-loader-container text-2xl", className)} />
  );
};

export default TableLoader;
