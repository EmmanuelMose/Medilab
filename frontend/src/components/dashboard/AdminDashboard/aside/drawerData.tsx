
import {
  FaUserMd,
  FaUserInjured,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaClipboardList,
  FaChartLine,
  FaPrescriptionBottleAlt,
  FaChartBar,
  FaUser, 
} from "react-icons/fa";

export type DrawerData = {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  link: string;
};

export const adminDrawerData: DrawerData[] = [
 
  {
    id: "profile",
    name: "My Profile",
    icon: FaUser, 
    link: "/admin/profile",
  },
  {
    id: "dashboard",
    name: "Dashboard Overview",
    icon: FaChartLine,
    link: "/admin",
  },
  {
    id: "doctors",
    name: "Doctors",
    icon: FaUserMd,
    link: "/admin/doctors",
  },
  {
    id: "patients",
    name: "Patients",
    icon: FaUserInjured,
    link: "/admin/patients",
  },
  {
    id: "appointments",
    name: "Appointments",
    icon: FaCalendarCheck,
    link: "/admin/appointments",
  },
  {
    id: "payments",
    name: "Payments",
    icon: FaMoneyBillWave,
    link: "/admin/payments",
  },
  {
    id: "complaints",
    name: "Complaints",
    icon: FaClipboardList,
    link: "/admin/complaints",
  },
  {
    id: "prescriptions",
    name: "Prescriptions",
    icon: FaPrescriptionBottleAlt,
    link: "/admin/prescriptions",
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: FaChartBar,
    link: "/admin/analytics",
  },
];
