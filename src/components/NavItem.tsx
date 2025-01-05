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
  isChild = false,
  isCollapsed = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 text-gray-300 rounded-lg transition-colors relative",
        isActive ? "bg-white/10 text-white" : "hover:bg-white/10",
        isChild && !isCollapsed && "ml-4",
        isCollapsed && "justify-center",
        isCollapsed &&
          isActive &&
          "after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-6 after:bg-blue-500 after:rounded-l"
      )}
    >
      <div className={cn("flex-shrink-0", isActive && "text-white")}>
        {icon}
      </div>
      {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
}
