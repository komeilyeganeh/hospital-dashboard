import { use } from "react";
import { Outlet } from "react-router";
import { Header } from "@components";
import { ToggleSidebarContext } from "@context/toggle-sidebar";
import { ToggleType } from "../../types/context/toggle-sidebar.type";

export const Main: React.FC = () => {
  // ---- context ----
    const { isOpenSidebar }: ToggleType = use(ToggleSidebarContext);
  // ---- return jsx ----
  return (
    <main className={`${isOpenSidebar ? "w-[calc(100%-240px)]" : "w-full"} duration-300 ease-in-out h-full overflow-hidden bg-white rounded-xl p-4`}>
      <Header />

      {/* ---- render of the pages based on route ---- */}
      <Outlet />
    </main>
  );
};
