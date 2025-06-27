import { SearchIcon } from "@/assets/icons/common";
import DataTable from "@/components/common/datatable";
import Input from "@/components/common/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useColumnDef from "@/hooks/use-column-def";
import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router";

export const CHALLENGEMANAGEMENTTABS = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Archived",
    value: "archived",
  },
];

const ChallengeManagement = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searhForm = useForm({
    defaultValues: { search: "" },
  });

  const data = useMemo(
    () =>
      new Array(69).fill().map(() => ({
        id: faker.database.mongodbObjectId(),
        user_img: faker.image.avatar(),
        title: "30-Day Fitness Challenge",
        fname: faker.person.firstName(),
        lname: faker.person.lastName(),
        invitee_user_img: faker.image.avatar(),
        invitee_fname: faker.person.firstName(),
        invitee_lname: faker.person.lastName(),
        date: faker.date.future({ years: 1 }),
      })),
    [
      searchParams.get("page"),
      searchParams.get("limit"),
      searchParams.get("tab"),
    ]
  );

  const { challengeManagementColumns } = useColumnDef();

  return (
    <>
      <div className="h-full flex flex-col gap-y-6 overflow-hidden">
        <div className="flex justify-between items-center gap-x-3">
          <Form {...searhForm}>
            <form noValidate className="w-full max-w-[380px]">
              <Input
                name="Search"
                className="py-2 sm:py-2.5 text-base font-normal sm:rounded-lg"
                placeholder="Search"
                prefix={<SearchIcon className="size-5 text-text-4" />}
              />
            </form>
          </Form>
          <div className="w-full max-w-[288px] p-1.5 flex items-center gap-x-1 bg-bg-3 rounded-full">
            {CHALLENGEMANAGEMENTTABS.map((data, index) => {
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
          data={data}
          columns={challengeManagementColumns}
          totalItems={data.length}
          loader={false}
        />
      </div>
    </>
  );
};

export default ChallengeManagement;
