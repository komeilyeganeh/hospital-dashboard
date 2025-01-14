import { createContext, useState } from "react";

type ToggleProviderType = {
  children: React.ReactNode;
};

type ToggleType = {
  isOpenSidebar: boolean;
  handlerToggle: () => void;
};

export const ToggleSidebarContext = createContext<ToggleType | null>(null);

export const ToggleSidebarContextProvider = ({
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
