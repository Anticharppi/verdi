"use client";

import {
  LineChart,
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
  PackageCheck,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect, JSX } from "react";
import { cn } from "../lib/utils";
import { NavItem } from "./NavItem";
import { CompanySelector } from "./CompanySelector";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Tooltip } from "@/components/Tooltip";

type NavigationItem = {
  label: string;
  href: string;
  icon: JSX.Element;
};

type Props = {
  children: React.ReactNode;
};

const MAIN_NAVIGATION: NavigationItem[] = [
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

const SETTINGS_NAVIGATION: NavigationItem[] = [
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

export function Sidebar({ children }: Props) {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Verificar si una ruta está activa
  const isRouteActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/dashboard") {
      return true;
    }
    // Para cualquier otra ruta, verifica si el pathname comienza con el href
    return href !== "/dashboard" && pathname.startsWith(href);
  };

  useEffect(() => {
    setMounted(true);
    const savedCollapsed = localStorage.getItem("sidebar-collapsed");
    if (savedCollapsed !== null) {
      setIsCollapsed(JSON.parse(savedCollapsed));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("sidebar-collapsed", JSON.stringify(isCollapsed));
    }
  }, [isCollapsed, mounted]);

  // Mantener settings abierto si estamos en una ruta de settings
  useEffect(() => {
    const isInSettings = SETTINGS_NAVIGATION.some((item) =>
      pathname.startsWith(item.href)
    );
    if (isInSettings) {
      setIsSettingsOpen(true);
    }
  }, [pathname]);

  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      if (isMobileView) {
        setIsCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const sidebarWidth = isCollapsed ? "w-20" : "w-64";

  // Evitar el flash durante la hidratación
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="w-64 fixed inset-y-0 left-0 bg-gray-900" />
        <div className="pl-64">
          <main className="p-8">{children}</main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className={cn(
          "fixed inset-y-0 left-0 bg-gray-900 flex flex-col transition-all duration-300",
          sidebarWidth,
          isMobile && isCollapsed && "-translate-x-full"
        )}
      >
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-white">Verdi</h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isCollapsed ? "Expandir sidebar" : "Colapsar sidebar"}
          >
            {isCollapsed ? (
              <PanelLeftOpen className="w-5 h-5 text-gray-300" />
            ) : (
              <PanelLeftClose className="w-5 h-5 text-gray-300" />
            )}
          </button>
        </div>

        <div className="flex-1">
          <div className="flex flex-col h-[calc(100vh-8.5rem)] w-full">
            {!isCollapsed && (
              <div className="p-4 border-b border-white/10">
                <CompanySelector />
              </div>
            )}

            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              <nav className="p-4 space-y-2">
                {MAIN_NAVIGATION.map((item) => (
                  <Tooltip
                    key={item.href}
                    content={isCollapsed ? item.label : undefined}
                    side="right"
                  >
                    <NavItem
                      href={item.href}
                      icon={item.icon}
                      label={item.label}
                      isActive={isRouteActive(item.href)}
                      isCollapsed={isCollapsed}
                    />
                  </Tooltip>
                ))}
              </nav>
            </div>

            <div className="p-4 border-t border-white/10">
              <div>
                <Tooltip
                  content={isCollapsed ? "Ajustes" : undefined}
                  side="right"
                >
                  <button
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                    className={cn(
                      "flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors",
                      SETTINGS_NAVIGATION.some((item) =>
                        isRouteActive(item.href)
                      ) && "bg-white/10"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      {!isCollapsed && (
                        <span className="text-sm font-medium">Ajustes</span>
                      )}
                    </div>
                    {!isCollapsed && (
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          isSettingsOpen && "rotate-180"
                        )}
                      />
                    )}
                  </button>
                </Tooltip>
                {isSettingsOpen && (
                  <div className="mt-2 space-y-2">
                    {SETTINGS_NAVIGATION.map((item) => (
                      <Tooltip
                        key={item.href}
                        content={isCollapsed ? item.label : undefined}
                        side="right"
                      >
                        <NavItem
                          href={item.href}
                          icon={item.icon}
                          label={item.label}
                          isActive={isRouteActive(item.href)}
                          isChild
                          isCollapsed={isCollapsed}
                        />
                      </Tooltip>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-white/10">
          <Tooltip
            content={isCollapsed ? "Cerrar sesión" : undefined}
            side="right"
          >
            <LogoutLink className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
              {!isCollapsed && (
                <span className="text-sm font-medium">Cerrar sesión</span>
              )}
            </LogoutLink>
          </Tooltip>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          isCollapsed ? "pl-20" : "pl-64",
          isMobile && isCollapsed && "pl-0"
        )}
      >
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
