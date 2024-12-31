"use client";

import { Button } from "@/components/ui/button";
import { MaterialIntakeList } from "@/components/materials-intake/material-intake-list";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MaterialIntakePage() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Recepción de Materiales</h2>
          <p className="text-sm text-gray-600">
            Gestiona la recepción de materiales de los proveedores
          </p>
        </div>
        <Button onClick={() => router.push("/dashboard/materials-intake/create")}>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Recibo
        </Button>
      </div>
      
      <MaterialIntakeList />
    </div>
  );
}