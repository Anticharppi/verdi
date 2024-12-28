import { SidebarNav } from "@/src/components/SidebarNav";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900">
        {/* Logo */}
        <div className="px-6 py-4 border-b border-white/10">
          <h1 className="text-xl font-bold text-white">Verdi</h1>
        </div>

        {/* Navigation */}
        <SidebarNav />

        {/* User section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <LogoutLink className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Cerrar sesión</span>
          </LogoutLink>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
