import { Building2, Truck, Route, Users, ArrowUpRight } from "lucide-react";
import { UserWelcome } from "@/components/dashboard/UserWelcome";
import { StatsCard } from "@/components/dashboard/StatsCard";

export default async function DashboardPage() {
  const stats = [
    {
      name: "Empresas activas",
      value: "12",
      change: "+2.1%",
      icon: <Building2 className="w-8 h-8 text-emerald-600" />,
    },
    {
      name: "Vehículos en servicio",
      value: "89",
      change: "+12%",
      icon: <Truck className="w-8 h-8 text-emerald-600" />,
    },
    {
      name: "Rutas activas",
      value: "284",
      change: "+3.4%",
      icon: <Route className="w-8 h-8 text-emerald-600" />,
    },
    {
      name: "Usuarios registrados",
      value: "156",
      change: "+6.2%",
      icon: <Users className="w-8 h-8 text-emerald-600" />,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "company",
      message: "Nueva empresa registrada: Servicios Públicos S.A.",
      timestamp: "Hace 2 horas",
    },
    {
      id: 2,
      type: "route",
      message: "Ruta R-123 actualizada por Juan Pérez",
      timestamp: "Hace 3 horas",
    },
    {
      id: 3,
      type: "vehicle",
      message: "Nuevo vehículo agregado a la flota: XYZ-123",
      timestamp: "Hace 5 horas",
    },
  ];

  return (
    <div>
      <UserWelcome />

      <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.name}
            name={stat.name}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">
            Actividad reciente
          </h2>
          <div className="mt-6 divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="py-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <ArrowUpRight className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="/dashboard/activity"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
            >
              Ver toda la actividad
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
