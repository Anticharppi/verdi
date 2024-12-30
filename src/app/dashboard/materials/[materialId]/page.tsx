"use client";

import { MaterialForm } from "@/components/forms/material-form";
import { MOCK_MATERIALS } from "@/lib/data/materials-mock";
import { use } from "react";

interface Props {
  params: Promise<{
    materialId: string;
  }>;
}

export default function EditMaterialPage({ params }: Props) {
  const { materialId } = use(params);
  const material = MOCK_MATERIALS.find(
    (material) => material.id === materialId
  );

  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Editar Material</h1>
        <p className="mt-2 text-gray-600">
          Modificar información del material
        </p>
      </div>

      <MaterialForm initialData={material || {}} isNew={false} />
    </div>
  );
}