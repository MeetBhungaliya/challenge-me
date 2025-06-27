import { EyeonIcon } from "@/assets/icons/auth";
import { PausecircleIcon, UseroctagonIcon } from "@/assets/icons/common";
import { BannedIcon } from "@/assets/icons/dashbord";
import { CheckCircleIcon, UnblockIcon } from "@/assets/icons/user-management";
import Img from "@/components/ui/Img";
import { breakpoints } from "@/constants/common";
import { cn } from "@/lib/utils";
import { USERMANAGEMENTTABS } from "@/routes/user-management";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import { useMemo } from "react";
import { Link, useSearchParams } from "react-router";
import { useWindowSize } from "usehooks-ts";

const TableText = ({ text, className, ...props }) => {
  return (
    <p
      className={cn(
        "text-wrap break-words text-sm md:text-base font-light",
        className
      )}
      {...props}
    >
      {text}
    </p>
  );
};

const useColumnDef = (helpers) => {
  const [searchParams] = useSearchParams();
  const columnHelper = createColumnHelper();

  const { width = 0 } = useWindowSize();

  const getColumnSize = (sizes) => {
    if (typeof sizes === "number") {
      return sizes;
    } else if (typeof sizes === "object") {
      const breakpointKeys = Object.keys(breakpoints).reverse();
      for (const key of breakpointKeys) {
        if (width >= breakpoints[key] && sizes[key] !== undefined) {
          return sizes[key];
        }
      }
      return sizes.default !== undefined ? sizes.default : null;
    } else {
      return null;
    }
  };

  const userProfileColumns = useMemo(
    () => [
      columnHelper.accessor("user_name", {
        header: "User Name",
        cell: (props) => (
          <div className="flex items-center gap-x-4">
            <Img
              src={props.row.original?.user_img}
              className="size-10 rounded-full"
            />
            <TableText
              className="max-w-[200px]"
              text={`${props.row?.original?.fname} ${props?.row?.original?.lname}`}
            />
          </div>
        ),
        size: getColumnSize({ "3xl": 300, "2xl": 280, sm: 260, default: 200 }),
      }),

      columnHelper.accessor("email", {
        header: "Email",
        cell: (props) => <TableText text={props.getValue()} />,
        size: getColumnSize({ "2xl": 450, xl: 400, sm: 300, default: 250 }),
      }),

      columnHelper.accessor("number", {
        header: "Phone Number",
        cell: (props) => <TableText text={props.getValue()} />,
        size: getColumnSize({ "3xl": 320, "2xl": 280, sm: 250, default: 220 }),
      }),

      columnHelper.accessor("dob", {
        header: "DOB",
        cell: (props) => (
          <TableText text={moment(props.getValue()).format("DD/MM/YYYY")} />
        ),
        size: getColumnSize({ "3xl": 280, sm: 220, default: 200 }),
      }),

      columnHelper.display({
        id: "actions-align-center",
        header: "Action",
        cell: (props) => (
          <div className="flex justify-center gap-x-2">
            {searchParams.get("tab") === USERMANAGEMENTTABS.at(0).value ? (
              <>
                <Link
                  className="size-10 flex justify-center items-center rounded-full bg-bg-2"
                  to={`/user-management/${props.row?.original?.id}`}
                >
                  <EyeonIcon className="size-5 text-text-1" />
                </Link>
                <button
                  type="button"
                  className="size-10 flex justify-center items-center rounded-full bg-bg-2 cursor-pointer"
                  onClick={helpers?.onAdminAssing}
                >
                  <UseroctagonIcon className="size-5 text-text-1" />
                </button>
                <button
                  type="button"
                  className="size-10 flex justify-center items-center rounded-full bg-bg-2 cursor-pointer"
                >
                  <PausecircleIcon className="size-5 text-text-1" />
                </button>
                <button
                  type="button"
                  className="size-10 flex justify-center items-center rounded-full bg-bg-2 cursor-pointer"
                  onClick={helpers?.onSuspendUser}
                >
                  <BannedIcon className="size-5 text-[#FF0000]" />
                </button>
              </>
            ) : searchParams.get("tab") === USERMANAGEMENTTABS.at(1).value ? (
              <>
                <button
                  type="button"
                  className="size-10 flex justify-center items-center rounded-full bg-bg-2 cursor-pointer"
                  onClick={helpers?.onSuspendUserDetail}
                >
                  <EyeonIcon className="size-5 text-text-1" />
                </button>
                <button
                  type="button"
                  className="size-10 flex justify-center items-center rounded-full bg-bg-2 cursor-pointer"
                >
                  <CheckCircleIcon className="size-5 text-text-1" />
                </button>
                <button
                  type="button"
                  className="size-10 flex justify-center items-center rounded-full bg-bg-2 cursor-pointer"
                  onClick={helpers?.onSuspendUser}
                >
                  <BannedIcon className="size-5 text-[#FF0000]" />
                </button>
              </>
            ) : searchParams.get("tab") === USERMANAGEMENTTABS.at(2).value ? (
              <button
                type="button"
                className="size-10 flex justify-center items-center rounded-full bg-bg-2 cursor-pointer"
              >
                <UnblockIcon className="size-5 text-[#FF0000]" />
              </button>
            ) : (
              <Link
                className="size-10 flex justify-center items-center rounded-full bg-bg-2"
                to={`/user-management/${props.row?.original?.id}`}
              >
                <EyeonIcon className="size-5 text-text-1" />
              </Link>
            )}
          </div>
        ),
      }),
    ],
    [width, searchParams.get("tab")]
  );

  return {
    userProfileColumns,
  };
};

export default useColumnDef;
