"use client";

import { ProviderForm } from "@/components/providers/provider-form";
import { useCompany } from "@/contexts/CompanyContext";

const mockProvider = {
  id: "1",
  names: "Juan Carlos",
  lastNames: "Pérez Rodríguez",
  dniType: "CC",
  dni: "12345678",
  birthDate: "1990-05-15",
  phone: "3001234567",
  email: "juan@example.com",
  address: "Calle 123 #45-67",
  type: "RECICLADOR",
  workingDay: "DIURNA",
  workingWeekDay: "LUN_VIE",
  nuecaId: "1",
  status: "Activo",
};

export default function EditProviderPage({ params }: { params: { id: string } }) {
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
        <h1 className="text-2xl font-bold text-gray-900">Editar Proveedor</h1>
        <p className="mt-2 text-sm text-gray-700">
          Actualiza la información del proveedor en {selectedCompany.name || selectedCompany.businessName}
        </p>
      </div>

      <ProviderForm initialData={mockProvider} />
    </div>
  );
}