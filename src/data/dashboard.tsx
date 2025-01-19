import { t } from "i18next";
import {
  DashboardSummaryType,
  HospitalStaffType,
} from "src/types/dashboard.type";
// ---- icons import ----
import { UserIcon } from "@icons/user.icon";
import { UsersIcon } from "@icons/users.icon";
// ---- images import ----
import Doctor_1 from "../assets/images/05.jpg";
import Doctor_2 from "../assets/images/06.jpg";
import Doctor_3 from "../assets/images/07.jpg";
import Doctor_4 from "../assets/images/08.jpg";
import Doctor_5 from "../assets/images/09.jpg";
import Doctor_6 from "../assets/images/10.jpg";

export const DashboardSummaryData: DashboardSummaryType[] = [
  {
    id: 1,
    title: t("dashboard.summary.doctors"),
    amount: 2320,
    icon: <UserIcon className="text-white" />,
    bgColor: "#E73879",
  },
  {
    id: 2,
    title: t("dashboard.summary.nurses"),
    amount: 3520,
    icon: <UsersIcon className="text-white" />,
    bgColor: "#E38E49",
  },
  {
    id: 3,
    title: t("dashboard.summary.patients"),
    amount: 4200,
    icon: <UsersIcon className="text-white" />,
    bgColor: "#0A97B0",
  },
  {
    id: 4,
    title: t("dashboard.summary.pharmacists"),
    amount: 3900,
    icon: <UsersIcon className="text-white" />,
    bgColor: "#DA498D",
  },
];

export const HospitalStaff: HospitalStaffType[] = [
  {
    id: 1,
    name: "Dr. Paul Molive",
    role: t("hospital_staff.surgeon"),
    img: Doctor_1,
    hospital: "California Hospital Medical Center",
  },
  {
    id: 2,
    name: "Dr. Paul Molive",
    role: t("hospital_staff.doctor"),
    img: Doctor_2,
    hospital: "California Hospital Medical Center",
  },
  {
    id: 3,
    name: "Dr. Paul Molive",
    role: t("hospital_staff.ot_assistent"),
    img: Doctor_3,
    hospital: "California Hospital Medical Center",
  },
  {
    id: 4,
    name: "Dr. Paul Molive",
    role: t("hospital_staff.nurse"),
    img: Doctor_4,
    hospital: "California Hospital Medical Center",
  },
  {
    id: 5,
    name: "Dr. Paul Molive",
    role: t("hospital_staff.doctor"),
    img: Doctor_5,
    hospital: "California Hospital Medical Center",
  },
  {
    id: 6,
    name: "Dr. Paul Molive",
    role: t("hospital_staff.surgeon"),
    img: Doctor_6,
    hospital: "California Hospital Medical Center",
  },
];
