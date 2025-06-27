import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Outlet, useLocation } from "react-router";

const BadgeLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-full flex flex-col overflow-hidden">
      {pathname.includes("/assigned-badge") && (
        <Breadcrumb className="mb-4 sm:mb-6 lg:mb-[30px]">
          <BreadcrumbList className="gap-0.5 md:gap-1.5">
            <BreadcrumbItem className="text-base md:text-lg">
              <BreadcrumbLink
                to="/badges"
                className="text-text-2 hover:text-text-2"
              >
                Badge
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-text-2 [&>svg]:w-4 [&>svg]:h-4" />
            <BreadcrumbItem className="text-base md:text-lg">
              <BreadcrumbPage className="font-semibold text-text-3">
                Assigned Badge User List
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
      <Outlet />
    </div>
  );
};

export default BadgeLayout;
