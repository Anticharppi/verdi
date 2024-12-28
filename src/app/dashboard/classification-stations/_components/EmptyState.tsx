"use client";

import { Building2 } from "lucide-react";

export function EmptyState() {
  return (
    <div className="text-center py-10 bg-white rounded-lg shadow">
      <Building2 className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">
        No hay estaciones de clasificación
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Comience agregando una estación de clasificación para esta empresa.
      </p>
    </div>
  );
}