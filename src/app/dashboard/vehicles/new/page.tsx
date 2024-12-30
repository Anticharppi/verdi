"use client";

import { useCompany } from "@/contexts/CompanyContext";
import { VehicleForm } from "@/components/vehicles/vehicle-form";

const initialData = {
  id: "",
  type: "OTRO",
  licensePlate: "",
  volumeCapacity: 0,
  weightCapacity: 0,
  axesAmount: 0,
  registrationDate: "",
  entryOperationDate: new Date().toISOString().split('T')[0],
  brand: "",
  providerId: "",
};

export default function NewVehiclePage() {
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
        <h1 className="text-2xl font-bold text-gray-900">Nuevo Vehículo</h1>
        <p className="mt-2 text-sm text-gray-700">
          Registra un nuevo vehículo en {selectedCompany.name || selectedCompany.businessName}
        </p>
      </div>

      <VehicleForm initialData={initialData} />
    </div>
  );
}