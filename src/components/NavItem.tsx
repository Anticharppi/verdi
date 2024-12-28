"use client";

import Link from "next/link";
import { cn } from "../lib/utils";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  isChild?: boolean;
}

export function NavItem({
  href,
  icon,
  label,
  isActive,
  isChild,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors",
        isChild && "ml-6",
        isActive
          ? "bg-emerald-500 text-white hover:bg-emerald-600"
          : "text-gray-300 hover:bg-white/10"
      )}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
