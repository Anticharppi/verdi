"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Trash2, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Mock data para estados y ciudades
const mockStates = [
  { code: "ANT", name: "Antioquia" },
  { code: "ATL", name: "Atlántico" },
  { code: "BOL", name: "Bolívar" },
  { code: "BOY", name: "Boyacá" },
  { code: "CAL", name: "Caldas" }
];

const mockCities = {
  "ANT": [
    { code: "MED", name: "Medellín" },
    { code: "ENV", name: "Envigado" },
    { code: "BEL", name: "Bello" },
    { code: "ITA", name: "Itagüí" }
  ],
  "ATL": [
    { code: "BAQ", name: "Barranquilla" },
    { code: "SOL", name: "Soledad" },
    { code: "MAL", name: "Malambo" }
  ],
  "BOL": [
    { code: "CTG", name: "Cartagena" },
    { code: "MAG", name: "Magangué" },
    { code: "TUR", name: "Turbaco" }
  ]
};

interface ServiceAreaFormValues {
  stateCode: string;
  cities: { code: string; name: string }[];
}

interface ServiceAreaFormProps {
  initialData?: ServiceAreaFormValues;
  isNew: boolean;
}

export default function ServiceAreaForm({ initialData, isNew }: ServiceAreaFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedState, setSelectedState] = useState<string>(initialData?.stateCode || "");
  const [selectedCities, setSelectedCities] = useState<{ code: string; name: string }[]>(
    initialData?.cities || []
  );
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simular guardado
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push("/dashboard/service-areas");
      router.refresh();
    } catch (error) {
      console.error("Error al guardar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setSelectedCities([]);
  };

  const handleAddCity = (cityCode: string) => {
    const stateCities = mockCities[selectedState as keyof typeof mockCities] || [];
    const city = stateCities.find(c => c.code === cityCode);
    if (city && !selectedCities.some(c => c.code === city.code)) {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const handleRemoveCity = (cityCode: string) => {
    setSelectedCities(selectedCities.filter(city => city.code !== cityCode));
  };

  const availableCities = selectedState
    ? mockCities[selectedState as keyof typeof mockCities].filter(
        city => !selectedCities.some(sc => sc.code === city.code)
      )
    : [];

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Área de servicio */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Área de Servicio</h2>
              <p className="text-sm text-gray-500">Selecciona el departamento y sus ciudades</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Departamento
              </label>
              <Select value={selectedState} onValueChange={handleStateChange}>
                <SelectTrigger className="w-full h-10">
                  <SelectValue placeholder="Selecciona un departamento" />
                </SelectTrigger>
                <SelectContent>
                  {mockStates.map((state) => (
                    <SelectItem key={state.code} value={state.code}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedState && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ciudad
                </label>
                <Select
                  value=""
                  onValueChange={handleAddCity}
                  disabled={availableCities.length === 0}
                >
                  <SelectTrigger className="w-full h-10">
                    <SelectValue 
                      placeholder={
                        availableCities.length === 0
                          ? "No hay más ciudades disponibles"
                          : "Selecciona una ciudad"
                      } 
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {availableCities.map((city) => (
                      <SelectItem key={city.code} value={city.code}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {selectedCities.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ciudades seleccionadas
                </label>
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex flex-wrap gap-2">
                    {selectedCities.map((city) => (
                      <Badge 
                        key={city.code}
                        variant="secondary"
                        className="px-2 py-1 flex items-center gap-1"
                      >
                        {city.name}
                        <button
                          type="button"
                          onClick={() => handleRemoveCity(city.code)}
                          className="ml-1 hover:text-red-500 focus:outline-none"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex items-center justify-end gap-4 bg-gray-50 px-6 py-4 rounded-lg border border-gray-100">
          <button
            type="button"
            onClick={() => router.push("/dashboard/service-areas")}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading || selectedCities.length === 0}
            className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:hover:bg-emerald-500 transition-all duration-200"
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
              isNew ? "Crear área de servicio" : "Guardar cambios"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}