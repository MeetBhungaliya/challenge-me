import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LIMIT, LIMITS, PAGE } from "@/constants/common";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useStep } from "usehooks-ts";

const Pagination = ({ totalRecords }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = LIMITS.includes(+searchParams.get("limit") || LIMIT)
    ? +searchParams.get("limit") || LIMIT
    : LIMIT;
  const totalPages = Math.ceil(totalRecords / limit);
  const page =
    (+searchParams.get("page") || PAGE) > totalPages
      ? PAGE
      : +searchParams.get("page") || PAGE;

  const [, helpers] = useStep(totalPages);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    params.set("limit", limit);
    setSearchParams(params);
    helpers.setStep(page);
  }, [page]);

  const updateQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return setSearchParams(params);
    },
    [searchParams]
  );

  return (
    <div className="py-3 md:py-3.5 px-5 md:px-6 flex justify-between items-center flex-row">
      <div className="flex items-center gap-x-[10px]">
        <Select
          value={limit}
          onValueChange={(value) => updateQueryString("limit", value)}
        >
          <SelectTrigger className="w-[62px] px-2 py-1.5 bg-bg-2 rounded-lg text-text-1 border-none">
            <SelectValue placeholder={limit} className="text-sm" />
          </SelectTrigger>
          <SelectContent
            align="middle"
            className="min-w-20 bg-bg-2 text-text-1 border-none"
          >
            {LIMITS.map((item, key) => (
              <SelectItem key={key} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="hidden md:inline-block text-sm text-text-2 font-medium">
          <span className="hidden lg:inline-block">Showing</span>
          &nbsp;
          <span>
            {limit * page > totalRecords ? totalRecords : limit} out of&nbsp;
            {totalRecords}
          </span>
          &nbsp;
          <span className="hidden lg:inline-block">results</span>
        </div>
      </div>

      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="text-text-5 [&>svg]:size-4"
            onClick={() => {
              if (helpers.canGoToPrevStep) {
                updateQueryString("page", page - 1);
              }
            }}
          />
        </PaginationItem>
        {!helpers.canGoToNextStep &&
          helpers.canGoToPrevStep &&
          Boolean(page - 2) &&
          page - 2 <= totalPages && (
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  updateQueryString("page", page - 2);
                }}
              >
                {page - 2}
              </PaginationLink>
            </PaginationItem>
          )}
        {(!helpers.canGoToNextStep || page == totalPages - 1) &&
          helpers.canGoToPrevStep && (
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  updateQueryString("page", page - 1);
                }}
              >
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          )}
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        {helpers.canGoToNextStep && (
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                updateQueryString("page", page + 1);
              }}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {helpers.canGoToNextStep && totalPages >= page + 2 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                updateQueryString("page", page + 2);
              }}
            >
              {page + 2}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            className="text-text-5 [&>svg]:size-4"
            onClick={() => {
              if (helpers.canGoToNextStep) {
                updateQueryString("page", page + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </div>
  );
};

export default Pagination;
