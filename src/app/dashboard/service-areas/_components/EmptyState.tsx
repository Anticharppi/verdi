"use client";

import { MapPin } from "lucide-react";

export function NoServiceAreas() {
  return (
    <div className="text-center py-10 bg-white rounded-lg shadow">
      <MapPin className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">
        No hay áreas de servicio
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Comience agregando un área de servicio para esta empresa.
      </p>
    </div>
  );
}
