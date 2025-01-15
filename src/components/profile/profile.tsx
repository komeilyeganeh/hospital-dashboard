import { Link } from "react-router";
import UserImage from "../../assets/images/user.png";
import { useTranslation } from "react-i18next";

export const Profile: React.FC = () => {
  // ---- translation ----
  const { t } = useTranslation();
  // ---- return jsx ----
  return (
    <div className="relative">
      <div className="flex items-center gap-x-2 cursor-pointer bg-slate-100 p-2 rounded-md peer">
        <img src={UserImage} alt="user image" />
        <div>
          <h2 className="font-bold text-sm">Bini Jets</h2>
          <p className="text-sm text-green-600">Availabel</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 w-max p-2 border rounded-md border-gray-200 absolute top-[140%] right-0 opacity-0 invisible duration-200 ease-in-out peer-hover:visible peer-hover:opacity-100 peer-hover:top-full hover:visible hover:opacity-100 hover:top-full">
        <Link
          to="/profile"
          className="duration-200 ease-in-out p-2 rounded-md hover:bg-gray-200 text-sm"
        >
          {t("profile.profile")}
        </Link>
        <Link
          to="/profile/edit"
          className="duration-200 ease-in-out p-2 rounded-md hover:bg-gray-200 text-sm"
        >
          {t("profile.profile_edit")}
        </Link>
        <Link
          to="/profile/setting"
          className="duration-200 ease-in-out p-2 rounded-md hover:bg-gray-200 text-sm"
        >
          {t("profile.account_setting")}
        </Link>
        <Link
          to="/profile/setting"
          className="bg-red-500 text-white p-2 rounded-md text-sm"
        >
          {t("profile.logout")}
        </Link>
      </div>
    </div>
  );
};
