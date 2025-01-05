import {
  LineChart,
  ScrollText,
  Factory,
  Route,
  PackageCheck,
  Truck,
  UsersRound,
  FileText,
  Building,
  Users,
  Map,
} from "lucide-react";
import { JSX } from "react";

type NavigationItem = {
  label: string;
  href: string;
  icon: JSX.Element;
};

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LineChart className="w-5 h-5" />,
  },
  {
    label: "Areas de prestacion de servicios",
    href: "/dashboard/service-areas",
    icon: <ScrollText className="w-5 h-5" />,
  },
  {
    label: "Estacion de clasificacion de aprovechamiento",
    href: "/dashboard/classification-stations",
    icon: <Factory className="w-5 h-5" />,
  },
  {
    label: "Macro Rutas",
    href: "/dashboard/macro-routes",
    icon: <Map className="w-5 h-5" />,
  },
  {
    label: "Rutas",
    href: "/dashboard/routes",
    icon: <Route className="w-5 h-5" />,
  },
  {
    label: "Recepción de Materiales",
    href: "/dashboard/materials-intake",
    icon: <PackageCheck className="w-5 h-5" />,
  },
  {
    label: "Vehículos",
    href: "/dashboard/vehicles",
    icon: <Truck className="w-5 h-5" />,
  },
  {
    label: "Proveedores",
    href: "/dashboard/providers",
    icon: <UsersRound className="w-5 h-5" />,
  },
  {
    label: "Reportes",
    href: "/dashboard/reports",
    icon: <FileText className="w-5 h-5" />,
  },
];

export const SETTINGS_NAVIGATION: NavigationItem[] = [
  {
    label: "Administrar Empresas",
    href: "/dashboard/companies",
    icon: <Building className="w-5 h-5" />,
  },
  {
    label: "Usuarios",
    href: "/dashboard/users",
    icon: <Users className="w-5 h-5" />,
  },
];
