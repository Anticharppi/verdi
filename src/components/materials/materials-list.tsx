"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, Package, Box } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Material } from "@/types/materials";
import { MOCK_MATERIALS } from "@/lib/data/materials-mock";

export function MaterialsList() {
  const router = useRouter();

  const columns: ColumnDef<Material>[] = [
    {
      accessorKey: "name",
      header: "Material",
      cell: ({ row }) => (
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <Package className="h-6 w-6 text-emerald-600" />
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
      accessorKey: "baseMaterial",
      header: "Material Base",
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Box className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-900">
            {row.original.baseMaterial.name}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: "Precio",
      cell: ({ row }) => (
        <div className="text-sm text-gray-900">
          ${row.original.price.toLocaleString()}
        </div>
      ),
    },
    {
      accessorKey: "nueca",
      header: "NUECA",
      cell: ({ row }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {row.original.nueca.code}
        </span>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
        </div>

        <Link
          href="/dashboard/materials/new"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Agregar Material</span>
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={MOCK_MATERIALS}
        searchKey="name"
        searchPlaceholder="Buscar material..."
        onRowClick={(row) => router.push(`/dashboard/materials/${row.id}`)}
      />
    </div>
  );
}