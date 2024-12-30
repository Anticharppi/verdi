"use client";

import { Package } from "lucide-react";
import { FormSection } from "@/components/forms/sections/form-section";
import { MOCK_BASE_MATERIALS } from "@/lib/data/materials-mock";

interface MaterialBasicInfoProps {
  values: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  disabled?: boolean;
}

export function MaterialBasicInfo({ values, onChange, disabled }: MaterialBasicInfoProps) {
  return (
    <FormSection
      icon={Package}
      title="Información Básica"
      description="Datos principales del material"
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Código
          </label>
          <input
            type="text"
            name="code"
            value={values.code || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
            placeholder="Ej: M001"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={values.name || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
            placeholder="Ej: Cartón Corrugado"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Material Base
          </label>
          <select
            name="baseMaterialId"
            value={values.baseMaterialId || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
          >
            <option value="">Seleccione un material base</option>
            {MOCK_BASE_MATERIALS.map((baseMaterial) => (
              <option key={baseMaterial.id} value={baseMaterial.id}>
                {baseMaterial.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Precio
          </label>
          <input
            type="number"
            name="price"
            value={values.price || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
            min="0"
            step="100"
            placeholder="Ingrese el precio"
          />
        </div>
      </div>
    </FormSection>
  );
}