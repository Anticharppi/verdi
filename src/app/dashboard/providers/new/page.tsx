"use client";

import { useCompany } from "@/contexts/CompanyContext";
import { ProviderForm } from "@/components/providers/provider-form";

const initialData = {
  id: "",
  names: "",
  lastNames: "",
  dniType: "",
  dni: "",
  birthDate: "",
  phone: "",
  email: "",
  address: "",
  type: "",
  workingDay: "",
  workingWeekDay: "",
  nuecaId: "",
  status: "Activo",
};

export default function NewProviderPage() {
  const { selectedCompany } = useCompany();

  if (!selectedCompany) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Por favor seleccione una empresa</p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Nuevo Proveedor</h1>
        <p className="mt-2 text-sm text-gray-700">
          Registra un nuevo proveedor en {selectedCompany.name || selectedCompany.businessName}
        </p>
      </div>

      <ProviderForm initialData={initialData} />
    </div>
  );
}