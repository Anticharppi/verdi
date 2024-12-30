"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Map, Route as RouteIcon } from "lucide-react";
import { MacroRoute } from "@/types/macro-routes";

// Mock data for ECAs
const MOCK_ECAS = [
  { id: "1", name: "ECA Norte" },
  { id: "2", name: "ECA Sur" },
  { id: "3", name: "ECA Este" },
];

interface MacroRouteFormProps {
  initialData: Partial<MacroRoute>;
  isNew?: boolean;
}

export function MacroRouteForm({ initialData, isNew = true }: MacroRouteFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(initialData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simular una actualización exitosa
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log("Datos guardados:", formValues);
      router.push("/dashboard/macro-routes");
      router.refresh();
    } catch (error) {
      console.error("Error al guardar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información Básica */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <Map className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Información Básica</h2>
              <p className="text-sm text-gray-500">Datos principales de la macro ruta</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Código
              </label>
              <input
                type="text"
                name="code"
                value={formValues.code || ""}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
                disabled={loading}
                placeholder="Ej: MR001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formValues.name || ""}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
                disabled={loading}
                placeholder="Ej: Macro Ruta Norte"
              />
            </div>
          </div>
        </div>

        {/* Configuración de ECA */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <RouteIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Configuración de ECA</h2>
              <p className="text-sm text-gray-500">Asignar ECA a la macro ruta</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ECA
            </label>
            <select
              name="ecaId"
              value={formValues.ecaId || ""}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
              disabled={loading}
            >
              <option value="">Seleccione una ECA</option>
              {MOCK_ECAS.map((eca) => (
                <option key={eca.id} value={eca.id}>
                  {eca.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex items-center justify-end gap-4 bg-gray-50 px-6 py-4 rounded-lg border border-gray-100">
          <button
            type="button"
            onClick={() => router.push("/dashboard/macro-routes")}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 transition-all duration-200"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Guardando...
              </span>
            ) : (
              isNew ? "Crear Macro Ruta" : "Guardar Cambios"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}