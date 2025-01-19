import { DashboardSummaryData } from "@data/dashboard";
import { DashboardSummaryType } from "src/types/dashboard.type";

export const DashboardSummary: React.FC = () => {
  // ---- return jsx ----
  return (
    <div className="grid grid-cols-4 gap-2">
      {DashboardSummaryData.map((summary: DashboardSummaryType) => (
        <div key={summary.id} style={{ backgroundColor: summary.bgColor }} className="p-2 rounded-md flex items-center justify-between">
          {summary.icon}
          <div className="flex flex-col items-center gap-y-4 text-white">
            <span className="text-xl font-semibold">{summary.amount}</span>
            <p>{summary.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
