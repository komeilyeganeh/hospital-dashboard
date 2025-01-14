import { BrowserRouter } from "react-router"
import { RoutesFC } from "./routes"

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesFC />
      </BrowserRouter>
    </>
  )
}

export default App
