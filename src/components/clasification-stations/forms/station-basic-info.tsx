"use client";

import { Building2 } from "lucide-react";
import { FormSection } from "@/components/forms/sections/form-section";

interface StationBasicInfoProps {
  values: any;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  disabled?: boolean;
}

export function StationBasicInfo({
  values,
  onChange,
  disabled,
}: StationBasicInfoProps) {
  return (
    <FormSection
      icon={Building2}
      title="Información Básica"
      description="Datos principales de la estación de clasificación"
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
            placeholder="Ej: NUECA-001"
          />
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
            step="1000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ciudad
          </label>
          <select
            name="cityId"
            value={values.cityId || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
          >
            <option value="">Seleccione una ciudad</option>
            {/* TODO: Agregar ciudades dinámicamente */}
            <option value="CTG">Cartagena</option>
            <option value="MED">Medellín</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NUAP
          </label>
          <select
            name="nuapId"
            value={values.nuapId || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
          >
            <option value="">Seleccione un NUAP</option>
            {/* TODO: Agregar NUAPs dinámicamente */}
            <option value="NUAP-001">NUAP-BOL-001</option>
            <option value="NUAP-002">NUAP-ANT-001</option>
          </select>
        </div>
      </div>
    </FormSection>
  );
}
