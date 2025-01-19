import { useTranslation } from "react-i18next";
import { Charts } from "./charts.component";
import { DashboardSummary } from "./summary.component";
import { HospitalStaff } from "@data/dashboard";
import { HospitalStaffType } from "../../types/dashboard.type";
import Slider from "react-slick";

export const Dashboard = () => {
  // ---- translation ----
  const { t } = useTranslation();
  // ---- slider settings ----
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  // ---- return jsx ----
  return (
    <section className="pt-6">
      <DashboardSummary />

      {/* ---- chart for monthly hospital survey ---- */}
      <Charts />

      {/* ---- doctors slider ---- */}
      <div className="p-3 border border-slate-300 rounded-md mt-8 flex flex-col gap-y-8">
        <h2 className="text-lg font-bold">
          {t("dashboard.slider.hospital_staff")}
        </h2>
        <Slider {...settings}>
          {HospitalStaff.map((staff: HospitalStaffType) => (
            <div key={staff.id} className="flex flex-col items-center">
              <img src={staff.img} alt={staff.name} className="mx-auto" />
              <div className="flex flex-col items-center mt-4">
                <p className="font-bold">{staff.name}</p>
                <span className="text-sm">{staff.role}</span>
              </div>
              <p className="text-sm text-gray-600 w-1/2 text-center mx-auto mt-4 break-words">
                {staff.hospital}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
