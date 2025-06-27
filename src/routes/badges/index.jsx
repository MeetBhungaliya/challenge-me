import { SearchIcon } from "@/assets/icons/common";
import DataTable from "@/components/common/datatable";
import Input from "@/components/common/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useColumnDef from "@/hooks/use-column-def";
import AddEditBadge from "@/modals/add-edit-badge";
import BadgeDetail from "@/modals/badge-detail";
import DeleteBadge from "@/modals/delete-badge";
import { faker } from "@faker-js/faker";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router";
import { useBoolean } from "usehooks-ts";

const Badges = () => {
  const addEditBadge = useBoolean(false);
  const badgeDetail = useBoolean(false);
  const deleteBadge = useBoolean(false);
  const [searchParams] = useSearchParams();

  const [editBadge, setEditBadge] = useState(null);

  const searhForm = useForm({
    defaultValues: { search: "" },
  });

  const data = useMemo(
    () =>
      new Array(69).fill().map(() => ({
        id: faker.database.mongodbObjectId(),
        name: "Challenge Influencer",
        description:
          "This badge is awarded to users who create engaging and inspiring challenges that motivate others to participate and stay active.",
        image: [
          "https://plus.unsplash.com/premium_photo-1714138490043-40cbd9d982dc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFkZ2V8ZW58MHx8MHx8fDA%3D",
        ],
      })),
    [searchParams.get("page"), searchParams.get("limit")]
  );

  const { badgesColumns } = useColumnDef({
    onViewBadgeDetail: badgeDetail.setTrue,
    onEditBadge: (data) => {
      addEditBadge.setTrue();
      setEditBadge(data);
    },
    onDeleteBadge: deleteBadge.setTrue,
  });

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
          <div className="w-full max-w-[440px] flex items-center gap-x-4">
            <Link
              to="assigned-badge"
              className="flex-1 py-2.5 text-center font-medium rounded-lg text-text-3 bg-transparent border border-text-3 text-lg"
            >
              Assigned Badge User list
            </Link>
            <Button
              type="button"
              className="w-full max-w-[160px] py-2.5 font-medium rounded-lg text-lg"
              onClick={() => addEditBadge.setTrue()}
            >
              +Add Badge
            </Button>
          </div>
        </div>
        <DataTable
          loading={false}
          data={data}
          columns={badgesColumns}
          totalItems={data.length}
          loader={false}
        />
      </div>

      <BadgeDetail state={badgeDetail} onClose={badgeDetail.setFalse} />
      <AddEditBadge
        state={addEditBadge}
        onClose={() => {
          addEditBadge.setFalse();
          setEditBadge(null);
        }}
        data={editBadge}
      />
      <DeleteBadge state={deleteBadge} onClose={deleteBadge.setFalse} />
    </>
  );
};

export default Badges;
