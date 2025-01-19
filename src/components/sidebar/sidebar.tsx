import { use } from "react";
import { SidebarHeader } from "./header/sidebar-header";
import { SidebarMenu } from "./menu/menu";
import { ToggleSidebarContext } from "@context/toggle-sidebar";
import { ToggleType } from "../../types/context/toggle-sidebar.type";

export const Sidebar: React.FC = () => {
  // ---- context ----
  const { isOpenSidebar }: ToggleType = use(ToggleSidebarContext);
  // ---- return jsx ----
  return (
    <div
      className={`absolute top-0 h-full w-64 p-4 duration-300 ease-in-out ${
        isOpenSidebar ? "left-0 opacity-100 visible" : "-left-full opacity-0 invisible"
      }`}
    >
      <SidebarHeader />
      <SidebarMenu />
    </div>
  );
};
