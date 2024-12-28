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
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "../lib/utils";
import { NavItem } from "./NavItem";

export function SidebarNav() {
  const pathname = usePathname();
  const [isCompanyOpen, setIsCompanyOpen] = useState(true);

  const navigation = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LineChart className="w-4 h-4" />,
    },
    {
      label: "Empresas",
      icon: <Building2 className="w-4 h-4" />,
      isOpen: isCompanyOpen,
      onToggle: () => setIsCompanyOpen(!isCompanyOpen),
      children: [
        {
          label: "Administrar Empresas",
          href: "/dashboard/companies",
          icon: <Building className="w-4 h-4" />,
        },
        {
          label: "Usuarios",
          href: "/dashboard/users",
          icon: <Users className="w-4 h-4" />,
        },
      ],
    },
    {
      label: "Rutas",
      href: "/dashboard/routes",
      icon: <Route className="w-4 h-4" />,
    },
    {
      label: "Vehículos",
      href: "/dashboard/vehicles",
      icon: <Truck className="w-4 h-4" />,
    },
    {
      label: "Reportes",
      href: "/dashboard/reports",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      label: "Configuración",
      href: "/dashboard/settings",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  return (
    <nav className="p-4 space-y-2">
      {navigation.map((item) =>
        item.children ? (
          <div key={item.label}>
            <button
              onClick={item.onToggle}
              className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:bg-white/10 rounded-lg"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  item.isOpen && "rotate-180"
                )}
              />
            </button>
            {item.isOpen && (
              <div className="mt-2 space-y-2">
                {item.children.map((child) => (
                  <NavItem
                    key={child.href}
                    href={child.href}
                    icon={child.icon}
                    label={child.label}
                    isActive={pathname === child.href}
                    isChild
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <NavItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isActive={pathname === item.href}
          />
        )
      )}
    </nav>
  );
}
