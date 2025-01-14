import { use } from "react";
import { ToggleSidebarContext } from "@context/toggle-sidebar"
// import icon
import { MoreIcon } from "@icons/more-icon";

export const ToggleSidebar: React.FC = () => {
  // --- use context ----
  const { status, handlerToggle } = use(ToggleSidebarContext);
  console.log(status);
  
  // ---- return jsx ----
  return (
    <>
      <MoreIcon className="cursor-pointer text-white" />
    </>
  );
};
