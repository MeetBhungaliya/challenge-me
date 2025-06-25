import {
  BadgeIcon,
  CategoryManagementIcon,
  ChallengeManagementIcon,
  DashboardIcon,
  UserIcon,
} from "@/assets/icons/sidebar";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LOGO } from "@/constants/images";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Img from "../ui/Img";

const items = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    title: "User Management",
    icon: UserIcon,
    path: "/user-management",
  },
  {
    title: "Challenge Management",
    icon: ChallengeManagementIcon,
    path: "/challenge-management",
  },
  {
    title: "Badges",
    icon: BadgeIcon,
    path: "/badges",
  },
  {
    title: "Category Management",
    icon: CategoryManagementIcon,
    path: "/category-management",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const activeIndex = useMemo(
    () => items.findIndex((item) => pathname.includes(item.path)),
    [pathname]
  );
  return (
    <SidebarComponent className="px-0 border-border-2 [&>*:first-child]:bg-bg-2 [&>*:first-child]:gap-y-5">
      <SidebarHeader className="mx-6 p-0 py-6 border-b border-text-2 flex-row items-center gap-[10px]">
        <Img className="size-11" src={LOGO} alt="logo" />
        <h2 className="text-text-3 text-[22px] font-bold">
          Challenge <span className="text-text-1">Me</span>
        </h2>
      </SidebarHeader>
      <SidebarContent className="py-1 px-6">
        <SidebarGroupContent>
          <SidebarMenu className="relative gap-y-4.5">
            {items.map((item, index) => {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "[&>svg]:size-6 px-3 py-3.5 active:text-text-1 hover:bg-bg-3 gap-2 rounded-lg",
                      index === activeIndex
                        ? "active:bg-text-3"
                        : "active:bg-bg-3"
                    )}
                  >
                    <Link
                      to={{
                        pathname: item.path,
                        search: new URLSearchParams(item.search).toString(),
                      }}
                      className={cn(
                        "h-auto gap-[10px] rounded-[18px] text-text-1 hover:text-text-1",
                        index === activeIndex
                          ? "bg-text-3 hover:bg-text-3"
                          : "bg-bg-3 hover:bg-bg-3"
                      )}
                    >
                      {item.icon ? <item.icon className="text-text-1" /> : null}
                      <span className="scroll-m-20 text-sm sm:text-base font-semibold text-current">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter className="px-0 mx-5">
        {/* <SidebarMenuButton className="h-auto p-[18px] gap-[10px] text-text-2 rounded-[18px]" onClick={logoutModal.setTrue}>
            <Logout className="stroke-text-2" />
            <span className="scroll-m-20 text-[17px] font-semibold text-current">Logout</span>
          </SidebarMenuButton> */}
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
