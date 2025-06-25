import Header from "@/components/header";
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
          <Header />
          <div className="w-full h-full p-4 sm:p-6 lg:p-[30px] overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
