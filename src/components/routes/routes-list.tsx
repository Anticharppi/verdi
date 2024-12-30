"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, Route as RouteIcon, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Route } from "@/types/routes";
import { MOCK_ROUTES } from "@/lib/data/routes-mock";
import { Badge } from "@/components/ui/badge";

export function RoutesList() {
  const router = useRouter();

  const getRouteBadgeColor = (type: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      RECOLECCION_RESIDUOS_APROVECHABLES: { bg: "bg-green-100", text: "text-green-800" },
      RECOLECCION_RESIDUOS_NO_APROVECHABLES: { bg: "bg-red-100", text: "text-red-800" },
      BARRIDO_LIMPIEZA_VIAS_AREAS_PUBLICAS: { bg: "bg-blue-100", text: "text-blue-800" },
    };
    return colors[type] || { bg: "bg-gray-100", text: "text-gray-800" };
  };

  const columns: ColumnDef<Route>[] = [
    {
      accessorKey: "name",
      header: "Ruta",
      cell: ({ row }) => (
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <RouteIcon className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {row.original.name}
            </div>
            <div className="text-sm text-gray-500">
              {row.original.code}
            </div>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "macroRoute",
      header: "Macro Ruta",
      cell: ({ row }) => (
        <div className="text-sm text-gray-900">
          {row.original.macroRoute.name}
          <div className="text-sm text-gray-500">
            {row.original.macroRoute.code}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "type",
      header: "Tipo",
      cell: ({ row }) => {
        const colors = getRouteBadgeColor(row.original.type);
        return (
          <Badge 
            className={`${colors.bg} ${colors.text} border-none`}
            variant="outline"
          >
            {row.original.type.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}
          </Badge>
        );
      },
    },
    {
      accessorKey: "frequency",
      header: "Frecuencia",
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-900">{row.original.frequency}</span>
        </div>
      ),
    },
    {
      accessorKey: "startTime",
      header: "Horario",
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-900">
            {row.original.startTime} - {row.original.endTime}
          </span>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Actions Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
        </div>

        <Link
          href="/dashboard/routes/new"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Agregar Ruta</span>
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={MOCK_ROUTES}
        searchKey="name"
        searchPlaceholder="Buscar ruta..."
        onRowClick={(row) => router.push(`/dashboard/routes/${row.id}`)}
      />
    </div>
  );
}