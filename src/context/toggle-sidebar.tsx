import { createContext, useState } from "react";
import { ToggleType, ToggleProviderType } from "../types/context/toggle-sidebar.type";

const ToggleSidebarContext = createContext<ToggleType>({
  isOpenSidebar: true,
  handlerToggle: () => {},
});

const ToggleSidebarContextProvider = ({
  children,
}: ToggleProviderType) => {
  // --- state ----
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  // ---- toggle handler ----
  const handlerToggle = () => {    
    setIsOpenSidebar(!isOpenSidebar);
  };
  // ---- return provider ----
  return (
    <ToggleSidebarContext value={{ isOpenSidebar, handlerToggle }}>
      {children}
    </ToggleSidebarContext>
  );
};

export { ToggleSidebarContext, ToggleSidebarContextProvider }
