import { use } from "react";
import { ToggleSidebarContext } from "@context/toggle-sidebar"
// import icon
import { ArrowLeftIcon } from "@icons/arrow-left.icon";

export const ToggleSidebar: React.FC = () => {
  // --- use context ----
  const { status, handlerToggle } = use(ToggleSidebarContext);
  console.log(status);
  
  // ---- return jsx ----
  return (
    <>
      <ArrowLeftIcon className="cursor-pointer text-black" />
    </>
  );
};
