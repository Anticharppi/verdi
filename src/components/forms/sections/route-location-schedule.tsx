"use client";

import { MapPin } from "lucide-react";
import { FormSection } from "@/components/forms/sections/form-section";

interface RouteLocationScheduleProps {
  values: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  disabled?: boolean;
}

export function RouteLocationSchedule({ values, onChange, disabled }: RouteLocationScheduleProps) {
  return (
    <FormSection
      icon={MapPin}
      title="Ubicación y Horarios"
      description="Configuración de direcciones y tiempos"
      iconColor="text-blue-600"
      iconBgColor="bg-blue-100"
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dirección Inicial
          </label>
          <input
            type="text"
            name="startAddress"
            value={values.startAddress || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
            placeholder="Dirección inicial de la ruta"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hora Inicial
          </label>
          <input
            type="time"
            name="startTime"
            value={values.startTime || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dirección Final
          </label>
          <input
            type="text"
            name="endAddress"
            value={values.endAddress || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
            placeholder="Dirección final de la ruta"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hora Final
          </label>
          <input
            type="time"
            name="endTime"
            value={values.endTime || ""}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
            disabled={disabled}
          />
        </div>
      </div>
    </FormSection>
  );
}