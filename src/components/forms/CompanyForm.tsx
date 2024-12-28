"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CompanyFormValues } from "@/lib/types";
import { CompanyBasicInfo } from "./company/CompanyBasicInfo";
import { CompanyContactInfo } from "./company/CompanyContactInfo";
import { CompanyOperatingCities } from "./company/CompanyOperatingCities";
import { mockStates, mockCities, type SelectedCity } from "@/lib/mocks/location-data";

interface CompanyFormProps {
  initialData: CompanyFormValues;
  isNew: boolean;
}

export default function CompanyForm({ initialData, isNew }: CompanyFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<CompanyFormValues>(initialData);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCities, setSelectedCities] = useState<SelectedCity[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simular una actualización exitosa
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log("Datos guardados:", { ...formValues, operatingCities: selectedCities });
      router.push("/dashboard/companies");
      router.refresh();
    } catch (error) {
      console.error("Error al guardar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStateChange = (stateCode: string) => {
    setSelectedState(stateCode);
  };

  const handleCityAdd = (cityId: string) => {
    if (!cityId) return;
    
    const state = mockStates.find(s => s.code === selectedState);
    const city = mockCities[selectedState as keyof typeof mockCities]?.find(c => c.id === cityId);
    
    if (state && city && !selectedCities.some(sc => sc.id === city.id)) {
      setSelectedCities([...selectedCities, {
        ...city,
        stateCode: state.code,
        stateName: state.name
      }]);
    }
  };

  const handleCityRemove = (cityId: string) => {
    setSelectedCities(selectedCities.filter(city => city.id !== cityId));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información Básica */}
        <CompanyBasicInfo
          name={formValues.name}
          description={formValues.description}
          loading={loading}
          onChange={handleChange}
        />

        {/* Información de Contacto */}
        <CompanyContactInfo
          email={formValues.email}
          phone={formValues.phone}
          website={formValues.website}
          address={formValues.address}
          loading={loading}
          onChange={handleChange}
        />

        {/* Ciudades de Operación */}
        <CompanyOperatingCities
          loading={loading}
          selectedState={selectedState}
          selectedCities={selectedCities}
          onStateChange={handleStateChange}
          onCityAdd={handleCityAdd}
          onCityRemove={handleCityRemove}
        />

        {/* Botones de acción */}
        <div className="flex items-center justify-end gap-4 bg-gray-50 px-6 py-4 rounded-lg border border-gray-100">
          <button
            type="button"
            onClick={() => router.push("/dashboard/companies")}
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
              isNew ? "Crear Empresa" : "Guardar Cambios"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
