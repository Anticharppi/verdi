import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  isChild?: boolean;
  isCollapsed?: boolean;
}

export function NavItem({
  href,
  icon,
  label,
  isActive = false,
  isCollapsed = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 text-gray-300 rounded-lg transition-colors relative",
        isActive ? "bg-emerald-500 text-white" : "hover:bg-white/10",
        isCollapsed && "justify-center"
      )}
    >
      <div className={cn("flex-shrink-0", isActive && "text-white")}>
        {icon}
      </div>
      {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
}
