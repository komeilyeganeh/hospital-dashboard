import { ToggleSidebar } from "@components";
import { HeaderItems } from "./header-items";

export const Header: React.FC = () => {
  // ---- return jsx ----
  return (
    <header className="flex items-center justify-between pb-2 border-b border-dashed border-b-slate-300">
      <ToggleSidebar />
      <HeaderItems />
    </header>
  );
};
