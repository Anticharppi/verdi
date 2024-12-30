"use client";

import { Clock } from "lucide-react";
import { FormSection } from "@/components/forms/sections/form-section";

interface RouteFrequencyDistanceProps {
  values: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  disabled?: boolean;
}

export function RouteFrequencyDistance({ values, onChange, disabled }: RouteFrequencyDistanceProps) {
  return (
    <FormSection
      icon={Clock}
      title="Frecuencia y Distancias"
      description="Configuración de periodicidad y recorridos"
      iconColor="text-purple-600"
      iconBgColor="bg-purple-100"
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Frecuencia Semanal
          </label>
          <input
            type="number"
            name="weeklyFrequency"
            value={values.weeklyFrequency || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
            min="1"
            max="7"
            placeholder="Días por semana"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Días
          </label>
          <input
            type="text"
            name="frequency"
            value={values.frequency || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
            placeholder="Ej: L-M-V"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Distancia en Vía Pavimentada (km)
          </label>
          <input
            type="number"
            name="distanceOnPavedRoute"
            value={values.distanceOnPavedRoute || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
            step="0.1"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Distancia en Vía No Pavimentada (km)
          </label>
          <input
            type="number"
            name="distanceOnNotPavedRoute"
            value={values.distanceOnNotPavedRoute || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
            step="0.1"
            min="0"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="endsOnTransferStation"
            name="endsOnTransferStation"
            checked={values.endsOnTransferStation || false}
            onChange={onChange}
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <label htmlFor="endsOnTransferStation" className="text-sm font-medium text-gray-700">
            Termina en Estación de Transferencia
          </label>
        </div>

        {values.endsOnTransferStation && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Código de Estación de Transferencia
            </label>
            <input
              type="text"
              name="transferStationCode"
              value={values.transferStationCode || ""}
              onChange={onChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
              disabled={disabled}
              placeholder="Ej: TS001"
            />
          </div>
        )}
      </div>
    </FormSection>
  );
}