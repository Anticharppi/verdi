"use client";

import { Plus } from "lucide-react";
import { MacroRoutesList } from "@/components/macro-routes/macro-routes-list";

export default function MacroRoutesPage() {
  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Macro Rutas</h1>
        <p className="mt-2 text-gray-600">
          Gestiona las macro rutas y sus configuraciones
        </p>
      </div>

      {/* Content */}
      <MacroRoutesList />
    </div>
  );
}