"use client";

import { Box, Plus, Trash2 } from "lucide-react";
import { FormSection } from "@/components/forms/sections/form-section";
import { Button } from "@/components/ui/button";
import { MOCK_BASE_MATERIALS } from "@/lib/data/materials-mock";

interface StationMaterialsProps {
  values: any;
  materials: any[];
  onAddMaterial: () => void;
  onRemoveMaterial: (index: number) => void;
  onMaterialChange: (index: number, field: string, value: any) => void;
  disabled?: boolean;
}

export function StationMaterials({ 
  values,
  materials,
  onAddMaterial,
  onRemoveMaterial,
  onMaterialChange,
  disabled 
}: StationMaterialsProps) {
  return (
    <FormSection
      icon={Box}
      title="Materiales"
      description="Gestión de materiales y precios"
      iconColor="text-purple-600"
      iconBgColor="bg-purple-100"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Configure los materiales que se manejan en esta estación
          </p>
          <Button
            type="button"
            onClick={onAddMaterial}
            variant="ghost"
            size="sm"
            className="text-emerald-600 hover:text-emerald-700"
          >
            <Plus className="w-4 h-4 mr-1" />
            Agregar Material
          </Button>
        </div>

        {materials.map((material, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg border border-gray-200 bg-gray-50 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Material {index + 1}</h3>
              <Button
                type="button"
                onClick={() => onRemoveMaterial(index)}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Material Base
                </label>
                <select
                  value={material.baseMaterialId || ""}
                  onChange={(e) => onMaterialChange(index, "baseMaterialId", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
                  disabled={disabled}
                >
                  <option value="">Seleccione un material</option>
                  {MOCK_BASE_MATERIALS.map((baseMaterial) => (
                    <option key={baseMaterial.id} value={baseMaterial.id}>
                      {baseMaterial.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código
                </label>
                <input
                  type="text"
                  value={material.code || ""}
                  onChange={(e) => onMaterialChange(index, "code", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
                  disabled={disabled}
                  placeholder="Ej: MAT001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Precio
                </label>
                <input
                  type="number"
                  value={material.price || ""}
                  onChange={(e) => onMaterialChange(index, "price", Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
                  disabled={disabled}
                  min="0"
                  step="100"
                  placeholder="Ingrese el precio"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </FormSection>
  );
}