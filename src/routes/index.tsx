import { Route, Routes } from "react-router";
import { lazily } from "react-lazily";

// ---- pages ----
const { SplitScreen } = lazily(() => import("@layout/split-screen.tsx"));
const { Dashboard } = lazily(() => import("@pages/dashboard/dashboard.tsx"))

export const RoutesFC = () => {
  return (
    <Routes>
      <Route path="/" element={<SplitScreen />}>
        <Route path="/" index element={<Dashboard />}/>
      </Route>
    </Routes>
  );
};
