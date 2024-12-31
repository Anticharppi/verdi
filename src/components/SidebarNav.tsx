"use client";

import {
  LineChart,
  Building2,
  Building,
  Users,
  Route,
  Truck,
  FileText,
  Settings,
  ChevronDown,
  Factory,
  ScrollText,
  UsersRound,
  Map,
  PackageCheck
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "../lib/utils";
import { NavItem } from "./NavItem";
import { CompanySelector } from "./CompanySelector";

export function SidebarNav() {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const mainNavigation = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LineChart className="w-4 h-4" />,
    },
    {
      label: "Areas de prestacion de servicios",
      href: "/dashboard/service-areas",
      icon: <ScrollText className="w-4 h-4" />,
    },
    {
      label: "Estacion de clasificacion de aprovechamiento",
      href: "/dashboard/classification-stations",
      icon: <Factory className="w-4 h-4" />,
    },
    {
      label: "Macro Rutas",
      href: "/dashboard/macro-routes",
      icon: <Map className="w-4 h-4" />,
    },
    {
      label: "Rutas",
      href: "/dashboard/routes",
      icon: <Route className="w-4 h-4" />,
    },
    {
      label: "Recepción de Materiales",
      href: "/dashboard/materials-intake",
      icon: <PackageCheck className="w-4 h-4" />,
    },
    {
      label: "Vehículos",
      href: "/dashboard/vehicles",
      icon: <Truck className="w-4 h-4" />,
    },
    {
      label: "Proveedores",
      href: "/dashboard/providers",
      icon: <UsersRound className="w-4 h-4" />,
    },
    {
      label: "Reportes",
      href: "/dashboard/reports",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-8.5rem)] w-full">
      <div className="p-4 border-b border-white/10">
        <CompanySelector />
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-2">
          {mainNavigation.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-white/10">
        <div>
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:bg-white/10 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Ajustes</span>
            </div>
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform",
                isSettingsOpen && "rotate-180"
              )}
            />
          </button>
          {isSettingsOpen && (
            <div className="mt-2 space-y-2">
              <NavItem
                href="/dashboard/companies"
                icon={<Building className="w-4 h-4" />}
                label="Administrar Empresas"
                isActive={pathname === "/dashboard/companies"}
                isChild
              />
              <NavItem
                href="/dashboard/users"
                icon={<Users className="w-4 h-4" />}
                label="Usuarios"
                isActive={pathname === "/dashboard/users"}
                isChild
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}