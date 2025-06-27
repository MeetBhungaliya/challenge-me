import { SearchIcon } from "@/assets/icons/common";
import DataTable from "@/components/common/datatable";
import Input from "@/components/common/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useColumnDef from "@/hooks/use-column-def";
import { cn } from "@/lib/utils";
import AssignAdmin from "@/modals/assign-admin";
import SuspendUser from "@/modals/suspend-user";
import SuspendUserDetail from "@/modals/suspend-user-detail";
import { faker } from "@faker-js/faker";
import { on } from "events";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import { useBoolean } from "usehooks-ts";

export const USERMANAGEMENTTABS = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Suspended",
    value: "suspended",
  },
  {
    label: "Banned",
    value: "banned",
  },
  {
    label: "Admin",
    value: "admin",
  },
];

const UserManagement = () => {
  const assignAdmin = useBoolean(false);
  const suspendUser = useBoolean(false);
  const suspendUserDetail = useBoolean(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searh67Form = useForm({
    defaultValues: { search: "" },
  });

  const userData = useMemo(
    () =>
      new Array(69).fill().map(() => ({
        id: faker.database.mongodbObjectId(),
        user_img: faker.image.avatar(),
        fname: faker.person.firstName(),
        lname: faker.person.lastName(),
        email: faker.internet.email(),
        number: "+1 1234 5879",
        dob: faker.date.past({ years: 20 }),
      })),
    [
      searchParams.get("page"),
      searchParams.get("limit"),
      searchParams.get("tab"),
    ]
  );

  const { userProfileColumns } = useColumnDef({
    onAdminAssing: assignAdmin.setTrue,
    onSuspendUser: suspendUser.setTrue,
    onSuspendUserDetail: suspendUserDetail.setTrue,
  });

  return (
    <>
      <div className="h-full flex flex-col gap-y-6 overflow-hidden">
        <div className="flex justify-between items-center gap-x-3">
          <Form {...searh67Form}>
            <form noValidate className="w-full max-w-[380px]">
              <Input
                name="Search"
                className="py-2 sm:py-2.5 text-base font-normal sm:rounded-lg"
                placeholder="Search"
                prefix={<SearchIcon className="size-5 text-text-4" />}
              />
            </form>
          </Form>
          <div className="w-full max-w-[466px] p-1.5 flex items-center gap-x-1 bg-bg-3 rounded-full">
            {USERMANAGEMENTTABS.map((data, index) => {
              return (
                <Button
                  key={index}
                  type="button"
                  onClick={() => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("tab", data.value);
                    setSearchParams(params);
                  }}
                  className={cn(
                    "flex-1 rounded-full text-base font-normal",
                    searchParams.get("tab") === data.value
                      ? "text-text-1 bg-text-3"
                      : "bg-transparent text-text-5"
                  )}
                >
                  {data.label}
                </Button>
              );
            })}
          </div>
        </div>
        <DataTable
          loading={false}
          data={userData}
          columns={userProfileColumns}
          totalItems={userData.length}
          loader={false}
        />
      </div>

      <AssignAdmin state={assignAdmin} onClose={() => assignAdmin.setFalse()} />
      <SuspendUser state={suspendUser} onClose={() => suspendUser.setFalse()} />
      <SuspendUserDetail
        state={suspendUserDetail}
        onClose={() => suspendUserDetail.setFalse()}
      />
    </>
  );
};

export default UserManagement;
