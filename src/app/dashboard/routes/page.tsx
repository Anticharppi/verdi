"use client";

import { RoutesList } from "@/components/routes/routes-list";

export default function RoutesPage() {
  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Rutas</h1>
        <p className="mt-2 text-gray-600">
          Gestiona las rutas y sus configuraciones
        </p>
      </div>

      <RoutesList />
    </div>
  );
}