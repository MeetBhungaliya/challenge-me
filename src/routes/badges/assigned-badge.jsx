import DataTable from "@/components/common/datatable";
import useColumnDef from "@/hooks/use-column-def";
import AssignedBadgeDetail from "@/modals/assinged-badge-detail";
import { faker } from "@faker-js/faker";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useBoolean } from "usehooks-ts";

const AssignedBadge = () => {
  const assignedBadgeDetail = useBoolean(false);
  const [searchParams] = useSearchParams();

  const data = useMemo(
    () =>
      new Array(69).fill().map(() => ({
        id: faker.database.mongodbObjectId(),
        user_img: faker.image.avatar(),
        fname: faker.person.firstName(),
        lname: faker.person.lastName(),
        email: faker.internet.email(),
        number: "+1 1234 5879",
        badge: faker.number.int({ min: 1, max: 10 }),
      })),
    [searchParams.get("page"), searchParams.get("limit")]
  );

  const { assignedBadgeColumns } = useColumnDef({
    onAssignedViewBadgeDetail: assignedBadgeDetail.setTrue,
  });

  return (
    <>
      <div className="h-full flex flex-col gap-y-6 overflow-hidden">
        <DataTable
          loading={false}
          data={data}
          columns={assignedBadgeColumns}
          totalItems={data.length}
          loader={false}
        />
      </div>

      <AssignedBadgeDetail
        state={assignedBadgeDetail}
        onClose={assignedBadgeDetail.setFalse}
      />
    </>
  );
};

export default AssignedBadge;
