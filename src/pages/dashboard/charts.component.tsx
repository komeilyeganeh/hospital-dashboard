import {
  chartOneOptions,
  chartOneSeries,
  chartTwoOptions,
  chartTwoSeries,
  chartCircleOptions,
  chartCircleSeries,
} from "@data/charts";
import ReactApexChart from "react-apexcharts";

export const Charts: React.FC = () => {
  // ---- return jsx ----
  return (
    <section className="mt-8 flex flex-col gap-y-6">
      {/* charts */}
      <div className="p-3 bg-slate-100 rounded-md">
        <ReactApexChart
          options={chartOneOptions}
          series={chartOneSeries}
          type="bar"
          height={350}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-5">
        <ReactApexChart
          options={chartTwoOptions}
          series={chartTwoSeries}
          type="line"
          height={350}
        />
        <ReactApexChart
          options={chartCircleOptions}
          series={chartCircleSeries}
          type="radialBar"
          height={350}
        />
      </div>
    </section>
  );
};
