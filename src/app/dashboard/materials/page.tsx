"use client";

import { MaterialsList } from "@/components/materials/materials-list";

export default function MaterialsPage() {
  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Materiales</h1>
        <p className="mt-2 text-gray-600">
          Gestiona los materiales y sus precios
        </p>
      </div>

      <MaterialsList />
    </div>
  );
}