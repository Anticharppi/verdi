"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PersonalInfoSection } from "./sections/personal-info-section";
import { ContactInfoSection } from "./sections/contact-info-section";
import { WorkInfoSection } from "./sections/work-info-section";
import { ChevronLeft } from "lucide-react";

interface ProviderFormData {
  id: string;
  names: string;
  lastNames: string;
  dniType: string;
  dni: string;
  birthDate: string;
  phone: string;
  email: string;
  address: string;
  type: string;
  workingDay: string;
  workingWeekDay: string;
  nuecaId: string;
  status: string;
}

interface ProviderFormProps {
  initialData: ProviderFormData;
}

const mockNuecas = [
  { id: "1", code: "NUECA-001", name: "NUECA Principal" },
  { id: "2", code: "NUECA-002", name: "NUECA Secundaria" },
];

export function ProviderForm({ initialData }: ProviderFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ProviderFormData>(initialData);
  const isEditing = !!initialData.id;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simular una actualización exitosa
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log("Datos guardados:", formData);
      router.push("/dashboard/providers");
      router.refresh();
    } catch (error) {
      console.error("Error al guardar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof ProviderFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Botón Volver */}
      <button
        type="button"
        onClick={() => router.push("/dashboard/providers")}
        className="mb-6 px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Volver a Proveedores
      </button>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Secciones del formulario */}
        <PersonalInfoSection
          formData={formData}
          loading={loading}
          isEditing={isEditing}
          onChange={handleInputChange}
        />

        <ContactInfoSection
          formData={formData}
          loading={loading}
          onChange={handleInputChange}
        />

        <WorkInfoSection
          formData={formData}
          loading={loading}
          mockNuecas={mockNuecas}
          onChange={handleInputChange}
        />

        {/* Botones de acción */}
        <div className="flex items-center justify-end gap-4 bg-gray-50 px-6 py-4 rounded-lg border border-gray-100">
          <button
            type="button"
            onClick={() => router.push("/dashboard/providers")}
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
              isEditing ? "Guardar Cambios" : "Crear Proveedor"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}