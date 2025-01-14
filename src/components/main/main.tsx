import { Outlet } from "react-router";

export const Main: React.FC = () => {
  // ---- return jsx ----
  return (
    <main className="w-full h-full overflow-hidden bg-white rounded-xl p-2">
        <h1>HEADER</h1>
     
      {/* ---- render of the pages based on route ---- */}
      <Outlet />
    </main>
  );
};
