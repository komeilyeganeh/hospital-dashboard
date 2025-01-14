import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ToggleSidebarContextProvider } from "./context/toggle-sidebar.tsx";
import "./locales/index.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToggleSidebarContextProvider>
      <App />
    </ToggleSidebarContextProvider>
  </StrictMode>
);
