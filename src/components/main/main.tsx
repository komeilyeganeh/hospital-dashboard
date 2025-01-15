import { Outlet } from "react-router";
import { Header } from "@components";

export const Main: React.FC = () => {
  // ---- return jsx ----
  return (
    <main className="w-full h-full overflow-hidden bg-white rounded-xl p-4">
      <Header />

      {/* ---- render of the pages based on route ---- */}
      <Outlet />
    </main>
  );
};
