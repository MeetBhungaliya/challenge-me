import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Outlet, useLocation, useParams } from "react-router";
import { USERMANAGEMENTTABS } from ".";

const UserManagementLayout = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {id && (
        <Breadcrumb className="mb-4 sm:mb-6 lg:mb-[30px]">
          <BreadcrumbList className="gap-0.5 md:gap-1.5">
            <BreadcrumbItem className="text-base md:text-lg">
              <BreadcrumbLink
                to={{
                  pathname: "/user-management",
                  search: `page=1&limit=10&tab=${
                    USERMANAGEMENTTABS.at(0).value
                  }`,
                }}
                className="text-text-2 hover:text-text-2"
              >
                User Management
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-text-2 [&>svg]:w-4 [&>svg]:h-4" />

            {pathname.includes("/challenge-details") ? (
              <>
                <BreadcrumbItem className="text-base md:text-lg">
                  <BreadcrumbLink
                    to={`/user-management/${id}`}
                    className="text-text-2 hover:text-text-2"
                  >
                    View Detail
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-text-2 [&>svg]:w-4 [&>svg]:h-4" />
                <BreadcrumbItem className="text-base md:text-lg">
                  <BreadcrumbPage className="font-semibold text-text-3">
                    Challenge Detail
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            ) : (
              <BreadcrumbItem className="text-base md:text-lg">
                <BreadcrumbPage className="font-semibold text-text-3">
                  View Detail
                </BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      )}
      <Outlet />
    </div>
  );
};

export default UserManagementLayout;
