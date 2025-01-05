import { SETTINGS_NAVIGATION } from "@/constants/routes";
import { useSession } from "@/contexts/SessionContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

export const useSidebar = () => {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, isLoadingUser } = useSession();

  const isRouteActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/dashboard") {
      return true;
    }
    return href !== "/dashboard" && pathname.startsWith(href);
  };

  useEffect(() => {
    const savedCollapsed = localStorage.getItem("sidebar-collapsed");
    if (savedCollapsed !== null) {
      setIsCollapsed(JSON.parse(savedCollapsed));
    }
  }, []);

  useEffect(() => {
    const isInSettings = SETTINGS_NAVIGATION.some((item) =>
      pathname.startsWith(item.href)
    );
    if (isInSettings) {
      setIsSettingsOpen(true);
    }
  }, [pathname]);

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

  return {
    isSettingsOpen,
    isMobile,
    isCollapsed,
    sidebarWidth,
    user,
    isLoadingUser,
    isRouteActive,
    toggleSidebar,
    setIsSettingsOpen,
  };
};
