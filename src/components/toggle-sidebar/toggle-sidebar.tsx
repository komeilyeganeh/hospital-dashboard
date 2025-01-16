import { use } from "react";
import { ToggleSidebarContext } from "@context/toggle-sidebar";
import { ToggleType } from "../../types/context/toggle-sidebar.type";
// import icon
import { ArrowLeftIcon } from "@icons/arrow-left.icon";

export const ToggleSidebar: React.FC = () => {
  // --- use context ----
  const { isOpenSidebar, handlerToggle }: ToggleType =
    use(ToggleSidebarContext);

  // ---- return jsx ----
  return (
    <>
      <div onClick={handlerToggle}>
        <ArrowLeftIcon
          className={`cursor-pointer text-black duration-300 ease-in-out ${
            isOpenSidebar ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
    </>
  );
};
