"use client";

import { useCompany } from "@/contexts/CompanyContext";
import { VehicleForm } from "@/components/vehicles/vehicle-form";
import { notFound } from "next/navigation";
import { VehicleFormData } from "@/components/vehicles/types";

// Mock data para simular la obtención del vehículo
const mockVehicle: VehicleFormData = {
  id: "1",
  type: "VOLQUETA",
  licensePlate: "ABC123",
  volumeCapacity: 10.5,
  weightCapacity: 5000,
  axesAmount: 2,
  registrationDate: "2024-01-15",
  entryOperationDate: "2024-01-20",
  brand: "Mercedes-Benz",
  providerId: "p1",
};

export default function EditVehiclePage({ params }: { params: { id: string } }) {
  const { selectedCompany } = useCompany();
  // Simulamos la obtención del vehículo por ID
  const vehicle = mockVehicle;

  if (!selectedCompany) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Por favor seleccione una empresa</p>
      </div>
    );
  }

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Editar Vehículo</h1>
        <p className="mt-2 text-gray-600">
          Modifica la información del vehículo
        </p>
      </div>

      <VehicleForm initialData={vehicle} />
    </div>
  );
}