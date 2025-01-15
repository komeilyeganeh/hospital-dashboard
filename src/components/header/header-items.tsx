import { FullScreen, Language, Profile } from "@components";

export const HeaderItems: React.FC = () => {
  // ---- return jsx ----
  return (
    <div className="flex items-center gap-x-6">
      <Language />
      <FullScreen />
      <Profile />
    </div>
  );
};
