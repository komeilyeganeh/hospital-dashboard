import { Main, Sidebar } from "@components";

export const SplitScreen: React.FC = () => {
  // ---- return jsx ----
  return (
    <div className="w-full h-screen flex p-4 gap-x-3">
      {/* ---- render of the sidebar component ---- */}
      <Sidebar />

      {/* ---- render of the main component (contents) ---- */}
      <Main />
    </div>
  );
};
