import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Footer: React.FC = () => {
  // ---- translation ----
  const { t } = useTranslation();
  // ---- return jsx ----
  return (
    <footer className="bg-slate-200 p-2 rounded-md flex items-center justify-between mt-8">
      <div className="flex items-center gap-x-1 text-sm">
        <Link to="/#" className="text-blue-600">{t("footer.privacy_link")}</Link>
        <p>{t("footer.privacy_text")}</p>
      </div>
      <p className="text-sm">{t("footer.copyright")}</p>
    </footer>
  );
};
