"use client";

import {
  Settings,
  ChevronDown,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  User,
} from "lucide-react";
import { cn } from "../lib/utils";
import { NavItem } from "./NavItem";
import { CompanySelector } from "./CompanySelector";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Tooltip } from "@/components/Tooltip";
import { MAIN_NAVIGATION, SETTINGS_NAVIGATION } from "@/constants/routes";
import { useSidebar } from "@/hooks";

type Props = {
  children: React.ReactNode;
};

export function Sidebar({ children }: Props) {
  const {
    isCollapsed,
    isMobile,
    isSettingsOpen,
    sidebarWidth,
    user,
    setIsSettingsOpen,
    toggleSidebar,
    isRouteActive,
  } = useSidebar();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div
        className={cn(
          "fixed inset-y-0 left-0 bg-gray-900 flex flex-col transition-all duration-300",
          sidebarWidth,
          isMobile && isCollapsed && "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="px-4 h-16 border-b border-white/10 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">V</span>
              </div>
              <h1 className="text-lg font-semibold text-white">Verdi</h1>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors ml-auto"
            aria-label={isCollapsed ? "Expandir sidebar" : "Colapsar sidebar"}
          >
            {isCollapsed ? (
              <PanelLeftOpen className="w-5 h-5 text-gray-300" />
            ) : (
              <PanelLeftClose className="w-5 h-5 text-gray-300" />
            )}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Company Selector */}
          {!isCollapsed && (
            <div className="p-4 border-b border-white/10">
              <CompanySelector />
            </div>
          )}

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <nav className="p-3 space-y-1">
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

          {/* Settings Section */}
          <div className="p-3 border-t border-white/10">
            <div>
              <Tooltip
                content={isCollapsed ? "Ajustes" : undefined}
                side="right"
              >
                <button
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className={cn(
                    "flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors",
                    "text-gray-300 hover:bg-white/5",
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
                        "w-4 h-4 transition-transform duration-200",
                        isSettingsOpen && "rotate-180"
                      )}
                    />
                  )}
                </button>
              </Tooltip>
              {isSettingsOpen && (
                <div className="mt-1 space-y-1">
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

        {/* Footer */}
        <div className="p-3 border-t border-white/10 space-y-1">
          <Tooltip
            content={isCollapsed ? user.email || "" : undefined}
            side="right"
          >
            <div className="flex items-center gap-2 px-3 py-2 text-gray-300 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
                <User className="w-4 h-4" />
              </div>
              {!isCollapsed && (
                <div className="flex-1 truncate">
                  <p className="text-sm font-medium truncate">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                </div>
              )}
            </div>
          </Tooltip>

          <Tooltip
            content={isCollapsed ? "Cerrar sesión" : undefined}
            side="right"
          >
            <LogoutLink>
              <button className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-white/5 rounded-lg transition-colors w-full">
                <LogOut className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && (
                  <span className="text-sm font-medium">Cerrar sesión</span>
                )}
              </button>
            </LogoutLink>
          </Tooltip>
        </div>
      </div>

      {/* Main Content Area */}
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
