"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { ServiceAreaTable } from "./_components/ServiceAreaTable";

export default function ServiceAreasPage() {
  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Areas de prestación
        </h1>
        <p className="mt-2 text-gray-600">Gestiona las áreas de prestación</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <Link
          href="/dashboard/service-areas/create"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Crear</span>
        </Link>
      </div>

      <ServiceAreaTable />
    </div>
  );
}
