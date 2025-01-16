import { BrowserRouter } from "react-router"
import { RoutesFC } from "./routes"
import { ToggleSidebarContextProvider } from "./context/toggle-sidebar.tsx";

function App() {
  return (
    <ToggleSidebarContextProvider>
      <BrowserRouter>
        <RoutesFC />
      </BrowserRouter>
    </ToggleSidebarContextProvider>
  )
}

export default App
