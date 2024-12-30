"use client";

import { DataTable } from "@/components/ui/data-table";
import { useCompany } from "@/hooks/use-company";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { Plus } from "lucide-react";
import { MacroRoute } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MacroRouteForm } from "./macro-route-form";

type MacroRouteWithRelations = MacroRoute & {
  routes: {
    id: string;
    name: string;
    code: string;
  }[];
  macroRoutesNueca: {
    nueca: {
      id: string;
      code: string;
    };
  }[];
};

export function MacroRoutesList() {
  const [showForm, setShowForm] = useState(false);
  const { company } = useCompany();

  const { data: macroRoutes, isLoading } = useQuery<MacroRouteWithRelations[]>({
    queryKey: ["macro-routes", company?.id],
    queryFn: async () => {
      const { data } = await axios.get("/api/macro-routes");
      return data;
    },
    enabled: !!company,
  });

  const columns: ColumnDef<MacroRouteWithRelations>[] = [
    {
      accessorKey: "code",
      header: "Código",
    },
    {
      accessorKey: "name",
      header: "Nombre",
    },
    {
      accessorKey: "routes",
      header: "Rutas",
      cell: ({ row }) => {
        return <span>{row.original.routes.length}</span>;
      },
    },
    {
      accessorKey: "macroRoutesNueca",
      header: "NUECAs",
      cell: ({ row }) => {
        return <span>{row.original.macroRoutesNueca.length}</span>;
      },
    },
  ];

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={toggleForm}>
          <Plus className="w-4 h-4 mr-2" />
          Nueva Macro Ruta
        </Button>
      </div>

      {showForm && <MacroRouteForm onClose={toggleForm} />}

      <DataTable
        columns={columns}
        data={macroRoutes || []}
        loading={isLoading}
        searchPlaceholder="Buscar macro rutas..."
        searchColumn="name"
      />
    </div>
  );
}
