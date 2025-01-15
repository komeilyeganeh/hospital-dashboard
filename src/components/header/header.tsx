import { ToggleSidebar } from "@components";
import { HeaderItems } from "./header-items";

export const Header: React.FC = () => {
  // ---- return jsx ----
  return (
    <header className="flex items-center justify-between">
      <ToggleSidebar />
      <HeaderItems />
    </header>
  );
};
