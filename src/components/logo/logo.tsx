import { Link } from "react-router";

export const Logo: React.FC = () => {
  // ---- return jsx ----
  return (
    <Link to="/" className="text-amber-300 font-bold text-2xl">
      H<span className="text-white">Dashboard</span>
    </Link>
  );
};
