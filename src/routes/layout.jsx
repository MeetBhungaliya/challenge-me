import Sidebar from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "15.625rem",
        "--sidebar-width-mobile": "15.625rem",
      }}
    >
      <div className="w-full h-dvh flex overflow-hidden">
        <Sidebar />
        <div className="h-full w-full flex flex-col overflow-hidden">
          {/* <Header /> */}
          <div className="w-full h-full px-3 sm:px-4 md:px-5 lg:px-[30px] py-4 md:py-6 bg-background overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
