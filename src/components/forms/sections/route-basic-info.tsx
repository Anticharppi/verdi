"use client";

import { Route as RouteIcon } from "lucide-react";
import { FormSection } from "@/components/forms/sections/form-section";
import { RouteTypes } from "@/types/routes";
import { MOCK_MACRO_ROUTES } from "@/lib/data/mock-data";

interface RouteBasicInfoProps {
  values: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  disabled?: boolean;
}

export function RouteBasicInfo({ values, onChange, disabled }: RouteBasicInfoProps) {
  return (
    <FormSection
      icon={RouteIcon}
      title="Información Básica"
      description="Datos principales de la ruta"
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
            placeholder="Ej: RR001"
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
            placeholder="Ej: Ruta Residencial Norte"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Macro Ruta
          </label>
          <select
            name="macroRouteId"
            value={values.macroRouteId || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
          >
            <option value="">Seleccione una macro ruta</option>
            {MOCK_MACRO_ROUTES.map((macroRoute) => (
              <option key={macroRoute.id} value={macroRoute.id}>
                {macroRoute.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Ruta
          </label>
          <select
            name="type"
            value={values.type || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
          >
            <option value="">Seleccione un tipo</option>
            {Object.values(RouteTypes).map((type) => (
              <option key={type} value={type}>
                {type.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}
              </option>
            ))}
          </select>
        </div>
      </div>
    </FormSection>
  );
}