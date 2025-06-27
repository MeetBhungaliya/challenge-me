import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Outlet, useParams } from "react-router";
import { CHALLENGEMANAGEMENTTABS } from ".";

const ChallengeManagementLayout = () => {
  const { id } = useParams();

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {id && (
        <Breadcrumb className="mb-4 sm:mb-6 lg:mb-[30px]">
          <BreadcrumbList className="gap-0.5 md:gap-1.5">
            <BreadcrumbItem className="text-base md:text-lg">
              <BreadcrumbLink
                to={{
                  pathname: "/challenge-management",
                  search: `page=1&limit=10&tab=${
                    CHALLENGEMANAGEMENTTABS.at(0).value
                  }`,
                }}
                className="text-text-2 hover:text-text-2"
              >
                Challenge Management
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-text-2 [&>svg]:w-4 [&>svg]:h-4" />
            <BreadcrumbItem className="text-base md:text-lg">
              <BreadcrumbPage className="font-semibold text-text-3">
                Challenge Detail
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
      <Outlet />
    </div>
  );
};

export default ChallengeManagementLayout;
