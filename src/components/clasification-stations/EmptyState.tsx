"use client";

import { Building2 } from "lucide-react";
import Link from "next/link";

export function EmptyState() {
  return (
    <div className="text-center py-16 px-8 bg-white rounded-xl shadow-md border border-gray-100">
      <div className="flex flex-col items-center">
        <div className="bg-gray-50 p-4 rounded-full">
          <Building2 className="h-12 w-12 text-blue-500" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          No hay estaciones de clasificación
        </h3>
        <p className="mt-2 text-sm text-gray-500 max-w-sm">
          Comience agregando una estación de clasificación para esta empresa.
        </p>
        <Link
          href="/dashboard/classification-stations/create"
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent 
          text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
          transition-colors duration-200"
        >
          Agregar estación
        </Link>
      </div>
    </div>
  );
}
