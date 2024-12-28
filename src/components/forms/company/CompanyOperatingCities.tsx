"use client";

import { MapPinned, X } from "lucide-react";
import { mockStates, mockCities, SelectedCity } from "@/lib/mocks/location-data";

interface CompanyOperatingCitiesProps {
  loading: boolean;
  selectedState: string;
  selectedCities: SelectedCity[];
  onStateChange: (stateCode: string) => void;
  onCityAdd: (cityId: string) => void;
  onCityRemove: (cityId: string) => void;
}

export function CompanyOperatingCities({
  loading,
  selectedState,
  selectedCities,
  onStateChange,
  onCityAdd,
  onCityRemove,
}: CompanyOperatingCitiesProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
          <MapPinned className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Ciudades de Operación</h2>
          <p className="text-sm text-gray-500">Selecciona las ciudades donde opera la empresa</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Departamento
            </label>
            <select
              value={selectedState}
              onChange={(e) => onStateChange(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
              disabled={loading}
            >
              <option value="">Selecciona un departamento</option>
              {mockStates.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ciudad
            </label>
            <select
              disabled={!selectedState || loading}
              onChange={(e) => onCityAdd(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
              value=""
            >
              <option value="">Selecciona una ciudad</option>
              {selectedState &&
                mockCities[selectedState as keyof typeof mockCities]?.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Lista de ciudades seleccionadas */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Ciudades seleccionadas</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCities.length === 0 ? (
              <p className="text-sm text-gray-500">No hay ciudades seleccionadas</p>
            ) : (
              selectedCities.map((city) => (
                <div
                  key={city.id}
                  className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-full text-sm"
                >
                  <span className="text-purple-700">{city.name}</span>
                  <span className="text-purple-400">({city.stateName})</span>
                  <button
                    type="button"
                    onClick={() => onCityRemove(city.id)}
                    className="text-purple-400 hover:text-purple-600 focus:outline-none"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}