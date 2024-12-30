"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, Map, Route } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MacroRoute } from "@/types/macro-routes";

const MOCK_MACRO_ROUTES: MacroRoute[] = [
  {
    id: "1",
    code: "MR001",
    name: "Macro Ruta Norte",
    routes: [
      { id: "1", name: "Ruta Residencial 1", code: "R001" },
      { id: "2", name: "Ruta Comercial 1", code: "R002" },
    ],
    nuecas: [
      { id: "1", code: "NUECA001" },
      { id: "2", code: "NUECA002" },
    ],
  },
  {
    id: "2",
    code: "MR002",
    name: "Macro Ruta Sur",
    routes: [
      { id: "3", name: "Ruta Residencial 2", code: "R003" },
    ],
    nuecas: [
      { id: "1", code: "NUECA001" },
    ],
  },
];

export function MacroRoutesList() {
  const router = useRouter();

  const columns: ColumnDef<MacroRoute>[] = [
    {
      accessorKey: "name",
      header: "Macro Ruta",
      cell: ({ row }) => (
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <Map className="h-6 w-6 text-emerald-600" />
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
      accessorKey: "routes",
      header: "Rutas",
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Route className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-900">{row.original.routes.length} rutas</span>
        </div>
      ),
    },
    {
      accessorKey: "nuecas",
      header: "NUECAs",
      cell: ({ row }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {row.original.nuecas.length} NUECAs
        </span>
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
          href="/dashboard/macro-routes/new"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Agregar Macro Ruta</span>
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={MOCK_MACRO_ROUTES}
        searchKey="name"
        searchPlaceholder="Buscar macro ruta..."
        onRowClick={(row) => router.push(`/dashboard/macro-routes/${row.id}`)}
      />
    </div>
  );
}