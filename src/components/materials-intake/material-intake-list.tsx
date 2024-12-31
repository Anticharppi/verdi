"use client";

import { DataTable } from "@/components/ui/data-table";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

type MaterialIntake = {
  id: string;
  total: number;
  subtotal: number;
  totalFee: number;
  fixedFee: number;
  weekCode: number;
  closed: boolean;
  createdAt: string;
  providerName: string;
  routeName: string;
  vehiclePlate?: string;
};

const columns: ColumnDef<MaterialIntake>[] = [
  {
    accessorKey: "weekCode",
    header: "Semana",
  },
  {
    accessorKey: "providerName",
    header: "Proveedor",
  },
  {
    accessorKey: "routeName", 
    header: "Ruta",
  },
  {
    accessorKey: "vehiclePlate",
    header: "Vehículo",
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => {
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
      }).format(row.getValue("total"));
    },
  },
  {
    accessorKey: "closed",
    header: "Estado",
    cell: ({ row }) => (
      <span
        className={cn(
          "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
          row.getValue("closed")
            ? "bg-green-50 text-green-700 ring-green-600/20"
            : "bg-yellow-50 text-yellow-800 ring-yellow-600/20"
        )}
      >
        {row.getValue("closed") ? "Cerrado" : "Abierto"}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Fecha",
    cell: ({ row }) => {
      return new Date(row.getValue("createdAt")).toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
];

export function MaterialIntakeList() {
  const router = useRouter();

  const data: MaterialIntake[] = [
    {
      id: "1",
      total: 150000,
      subtotal: 140000,
      totalFee: 8000,
      fixedFee: 2000,
      weekCode: 48,
      closed: true,
      createdAt: "2024-12-31",
      providerName: "Juan Pérez",
      routeName: "Ruta Norte",
      vehiclePlate: "ABC123",
    },
  ];

  return (
    <div className="space-y-4">
      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Buscar por proveedor o ruta..."
        onRowClick={(row) => router.push(`/dashboard/materials-intake/${row.id}`)}
      />
    </div>
  );
}