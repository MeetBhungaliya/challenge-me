import {
  BadgeIcon,
  CategoryManagementIcon,
  ChallengeManagementIcon,
  DashboardIcon,
  SignoutIcon,
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
import { LIMIT, PAGE } from "@/constants/common";
import { LOGO } from "@/constants/images";
import { cn, toQueryString } from "@/lib/utils";
import { CHALLENGEMANAGEMENTTABS } from "@/routes/challenge-management";
import { USERMANAGEMENTTABS } from "@/routes/user-management";
import { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Img from "../ui/Img";
import { useBoolean } from "usehooks-ts";
import LogoutModal from "@/modals/logout";

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
    search: { page: PAGE, limit: LIMIT, tab: USERMANAGEMENTTABS.at(0).value },
  },
  {
    title: "Challenge Management",
    icon: ChallengeManagementIcon,
    path: "/challenge-management",
    search: {
      page: PAGE,
      limit: LIMIT,
      tab: CHALLENGEMANAGEMENTTABS.at(0).value,
    },
  },
  {
    title: "Badges",
    icon: BadgeIcon,
    path: "/badges",
    search: { page: PAGE, limit: LIMIT },
  },
  {
    title: "Category Management",
    icon: CategoryManagementIcon,
    path: "/category-management",
    search: { page: PAGE, limit: LIMIT },
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logoutModal = useBoolean(false);

  const activeIndex = useMemo(
    () => items.findIndex((item) => pathname.includes(item.path)),
    [pathname]
  );
  return (
    <>
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
                          search: toQueryString(item.search),
                        }}
                        className={cn(
                          "h-auto gap-[10px] rounded-[18px] text-text-1 hover:text-text-1",
                          index === activeIndex
                            ? "bg-text-3 hover:bg-text-3"
                            : "bg-bg-3 hover:bg-bg-3"
                        )}
                      >
                        {item.icon ? (
                          <item.icon className="text-text-1" />
                        ) : null}
                        <span className="scroll-m-20 text-sm sm:text-base text-current">
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
        <SidebarFooter className="px-0 mx-6">
          <SidebarMenuButton
            className="h-auto px-3 py-3.5 gap-2 bg-bg-3 hover:bg-bg-3 active:bg-bg-3 rounded-lg [&>svg]:size-6 cursor-pointer"
            onClick={logoutModal.setTrue}
          >
            <SignoutIcon className="size-6 min-w-6 min-h-6 text-text-1" />
            <span className="scroll-m-20 text-base text-text-1">Sign Out</span>
          </SidebarMenuButton>
        </SidebarFooter>
      </SidebarComponent>

      <LogoutModal state={logoutModal} onClose={logoutModal.setFalse} />
    </>
  );
};

export default Sidebar;
