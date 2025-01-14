import { sidebarClasses } from "react-pro-sidebar";

// ---- custome styles ----
export const customeStyles = {
  width: "auto !important",
  minWidth: "auto !important",
  borderRight: "none",
  [`.${sidebarClasses.container}`]: {
    backgroundColor: "transparent",
    marginTop: "20px",
  },
  [`.ps-menu-button`]: {
    borderRadius: "10px",
  },
  [`.ps-menu-button:hover`]: {
    transition: ".2s ease-in-out !important",
    backgroundColor: "#fff !important",
  },
  [`.ps-menu-button:hover span`]: {
    color: "#000"
  },
  [`.ps-menu-label`]: {
    color: "#fff",
    display: "flex",
    alignItem: "center",
    columnGap: "9px",
    fontSize: "1rem"
  },
  [`.ps-submenu-content`]: {
    background: "transparent"
  },
  [`.ps-submenu-expand-icon`]: {
    color: "#fff",
  },
  [`.ps-menu-icon`]: {
    color: "#fff"
  }
};
