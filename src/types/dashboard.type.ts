export type DashboardSummaryType = {
    id: number;
    title: string;
    amount: number;
    icon: React.ReactNode;
    bgColor: string;
}

export type HospitalStaffType = {
    id: number;
    name: string;
    hospital: string;
    img: string;
    role: string;
}